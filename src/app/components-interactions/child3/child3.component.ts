import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnChanges {

  @Input() prop1;
  @Input() prop2;

  ngOnChanges(changes) {
    console.log(changes.prop1);
    console.log(changes.prop1.isFirstChange());
  }

}
