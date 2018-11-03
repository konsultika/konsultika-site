import { Component, OnInit, Output, EventEmitter, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HamburgerComponent implements OnInit {

  @Output() isActiveChange = new EventEmitter<boolean>();
  @Input() isActive: boolean;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isActive = !this.isActive;
    this.isActiveChange.emit(this.isActive);
  }


}
