import { Component, OnInit, ElementRef, Input, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICO_CONFIGURATION, AngularIcoComponentConfig } from './angular-ico.config';

@Component({
  selector: 'ui-icon',
  template: '<!-- icon space -->',
  styleUrls: ['./angular-ico.component.scss']
})
export class AngularIcoComponent implements OnInit {
  @Input() public name: string;
  @Input() public autosize = true;

  constructor(private el: ElementRef, private http: HttpClient, @Inject(ICO_CONFIGURATION) private cfg: AngularIcoComponentConfig) {}

  ngOnInit() {
    this.Setup();
  }

  private Setup(): void {
    if (this.name != null) {
      let key: string = `ui-icon-${this.name}`;
      let content: string | null = null;

      if (this.cfg.cache) {
        content = window.sessionStorage.getItem(key);
      }

      if (content === null) {
        this.http
          .get(`${this.cfg.baseUrl}/${this.name}.svg`, {
            responseType: 'text'
          })
          .subscribe(
            content => {
              if (this.cfg.cache) {
                window.sessionStorage.setItem(key, content);
              }

              this.Transform(content);
            },
            error => {
              console.warn('Icon', error);
            }
          );
      } else {
        this.Transform(content);
      }
    } else {
      console.warn('Icon', 'Name is undefined.');
    }
  }

  private Transform(content: string): void {
    try {
      let element: HTMLElement = this.el.nativeElement;

      element.setAttribute('aria-hidden', 'true');

      if (this.autosize) {
        let tempElement: HTMLElement = document.createElement('div');

        tempElement.innerHTML = content;

        let first: Element | null = tempElement.firstElementChild;

        if (first != null) {
          first.removeAttribute('width');
          first.setAttribute('height', '1em');

          element.innerHTML = first.outerHTML;
        }
      } else {
        element.innerHTML = content;
      }
    } catch (ex) {
      console.warn(ex);
    }
  }
}
