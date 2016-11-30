import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  template: `    
    <h3>{{name}}</h3>
  `  
})
export class Child2Component {
  
  _name: string = '<no name!>';

  @Input()
  set name(name: string) {
    this._name = (name && name.trim()) || '<no name!>';
  }

  get name(): string {
    return this._name;
  }

}
