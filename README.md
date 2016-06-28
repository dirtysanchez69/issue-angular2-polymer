tldr: When children of paper-dropdown-menu are updated by Angular, the parent does not reload or react to the change. The "selected" option does not bind to the new items, for example, unless we it update as well. 

Say I have a paper-dropdown-menu, as such (this works fine):

//hardcoded options and selection

<paper-dropdown-menu label="hardcoded options and selection">
  <paper-listbox 
  [selected]="1"
  class="dropdown-content">
    <paper-item *ngFor="let option of ['hi', 'hello', 'yo']">{{option}}</paper-item>
  </paper-listbox>
</paper-dropdown-menu>
In this case, the child (paper-item) is presumably parsed before the parent (paper-listbox), and the parent selects the second of it's children to be the selected value.

Now, if the options arrive a bit later, after an async event, the options (paper-items) are updated just fine, but we lose the selected value.

//hardcoded selection

<paper-dropdown-menu label="hardcoded selection">
  <paper-listbox 
  [selected]="1"
  class="dropdown-content">
    <paper-item *ngFor="let option of dropdownOptions.fruit">{{option}}</paper-item>
  </paper-listbox>
</paper-dropdown-menu>
If dropdownOptions.fruit is initialized with some values, we see the selected value, but upon updating the options, the selected value disappears.

Now, if we also bind the selected value, and we update that as well, upon receiving the new data, then the new selected value is displayed (hooray). However, this only works if we actually change the value of the "selected" property. If we initialize this value to 1, then we must pick another number in order to trigger the update (which still leaves us with a problem).

<paper-dropdown-menu label="selection refresh" #fruitDropdown >
  <paper-listbox 
  [selected]="userData.fruitSelection"
  class="dropdown-content">
    <paper-item *ngFor="let option of dropdownOptions.fruit">{{option}}</paper-item>
  </paper-listbox>
</paper-dropdown-menu>
snap 2016-06-28 at 02 03 16

What do you think of this?
Is there a clean way to forcibly trigger a reload on a polymer element?