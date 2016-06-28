import { Component } from '@angular/core';
import { DropdownComponent } from './dropdown.component';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  template: `
    <my-dropdown [userData]="userData"></my-dropdown>
  `,
  directives: [
    DropdownComponent
  ],
  providers: [
    DataService
  ]
})
export class AppComponent {

  private userData: Object = {
    fruitSelection: 1
  };

}
