import {
  Component,
  ViewChild,
  TemplateRef,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('Shop')
  Shop: TemplateRef<any>;

  @ViewChild('Notification')
  Notification: TemplateRef<any>;

  @ViewChild('Review')
  Review: TemplateRef<any>;

  allTabs: any;
  index = 0;

  ngOnInit() {
    this.allTabs = [
      { name: 'Shop', template: this.Shop },
      { name: 'Notification', template: this.Notification },
      { name: 'Review', template: this.Review },
    ];
  }

  ngAfterViewInit() {
    window.setTimeout(() => {
      this.index = 1;
    }, 300);
  }
}
