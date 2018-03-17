import { Component, OnInit, ElementRef, Input, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICO_CONFIGURATION, AngularIcoComponentConfig } from './angular-ico.config';

@Component({
  selector: 'ui-icon',
  template: '<!-- icon space -->',
  styleUrls: ['./angular-ico.component.scss']
})
export class AngularIcoComponent implements OnInit {

  @Input()
  public name: string;

  @Input()
  public autosize: boolean = true;

  constructor(
    private el: ElementRef,
    private http: HttpClient,
    @Inject(ICO_CONFIGURATION) private cfg: AngularIcoComponentConfig
  ) { }

  ngOnInit() {
    this.Setup();
  }

  private Setup(): void {
    if (this.name != null) {
      this.http.get(`${this.cfg.baseUrl}/${this.name}.svg`, { responseType: 'text' })
        .subscribe(response => {
          try {
            let element: HTMLElement = this.el.nativeElement;

            element.setAttribute('aria-hidden', 'true');

            if (this.autosize) {
              let tempElement: HTMLElement = document.createElement('div');

              tempElement.innerHTML = response;

              let first: Element | null = tempElement.firstElementChild;

              if (first != null) {
                first.setAttribute('width', '100%');
                first.setAttribute('height', '100%');

                element.innerHTML = first.outerHTML;
              }
            }
            else {
              element.innerHTML = response;
            }
          } catch (ex) {
            console.warn(ex);
          }
        }, error => {
          console.warn('Icon', error);
        });
    } else {
      console.warn('Icon', 'Name is undefined.');
    }
  }

}