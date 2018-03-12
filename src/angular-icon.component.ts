import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ui-icon',
  template: '<!-- icon space -->',
  styleUrls: ['./angular-icon.component.scss']
})
export class AngularIconComponent implements OnInit {

  public static baseUrl: string;

  @Input()
  public name: string;

  @Input()
  public autosize: boolean = true;

  constructor(
    private el: ElementRef,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.Setup();
  }

  private Setup(): void {
    if (this.name != null) {
      this.http.get(`${AngularIconComponent.baseUrl}/${this.name}.svg`, { responseType: 'text' })
        .subscribe(response => {
          let element: HTMLElement = this.el.nativeElement;

          element.setAttribute('aria-hidden', 'true');

          if (this.autosize) {
            let tempElement: HTMLElement = document.createElement('div');
            tempElement.innerHTML = response;
            tempElement.firstElementChild.setAttribute('width', '100%');
            tempElement.firstElementChild.setAttribute('height', '100%');
            element.innerHTML = tempElement.firstElementChild.outerHTML;
          }
          else {
            element.innerHTML = response;
          }


        }, error => {
          console.warn('Icon', error);
        });
    } else {
      console.warn('Icon', 'Name is undefined.');
    }
  }

}
