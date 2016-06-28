import { Component, OnInit, Input } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { PolymerElement } from '@vaadin/angular2-polymer';
import { DataService } from './data.service';

@Component({
  selector: 'my-dropdown',
  template: `
    <paper-dropdown-menu label="hardcoded options and selection">
      <paper-listbox 
      [selected]="1"
      class="dropdown-content">
        <paper-item *ngFor="let option of ['hi', 'hello', 'yo']">{{option}}</paper-item>
      </paper-listbox>
    </paper-dropdown-menu>

    <paper-dropdown-menu label="hardcoded selection">
      <paper-listbox 
      [selected]="1"
      class="dropdown-content">
        <paper-item *ngFor="let option of dropdownOptions.fruit">{{option}}</paper-item>
      </paper-listbox>
    </paper-dropdown-menu>

    <paper-dropdown-menu label="selection refresh" #fruitDropdown >
      <paper-listbox 
      [selected]="userData.fruitSelection"
      class="dropdown-content">
        <paper-item *ngFor="let option of dropdownOptions.fruit">{{option}}</paper-item>
      </paper-listbox>
    </paper-dropdown-menu>
  `,
  styles: [`

  `],
  directives: [
    PolymerElement('paper-dropdown-menu'),
    PolymerElement('paper-listbox'),
    PolymerElement('paper-item')
  ]
})
export class DropdownComponent implements OnInit {

  @Input() userData: {fruitSelection:any, colorSelection:any};

  private dropdownOptions: { fruit: Array<string> } = { fruit: null };

  constructor(private data: DataService) { }

  ngOnInit() { 
    
    this.data.fruitOptions.subscribe(options => {
    	this.dropdownOptions.fruit = options;
      this.userData.fruitSelection = 0;
   	});

  }

  goBack() { }

}
