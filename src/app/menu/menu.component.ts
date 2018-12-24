import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { trigger, state, style, transition, group, animate } from '@angular/animations';

export const SlideInOutAnimation = [
  trigger('slideInOut', [
    state('in', style({
      'max-height': '500px', 'opacity': '1', 'visibility': 'visible'
    })),
    state('out', style({
      'max-height': '0px', 'opacity': '0', 'visibility': 'hidden'
    })),
    transition('in => out', [group([
      animate('400ms ease-in-out', style({
        'opacity': '0'
      })),
      animate('600ms ease-in-out', style({
        'max-height': '0px'
      })),
      animate('700ms ease-in-out', style({
        'visibility': 'hidden'
      }))
    ]
    )]),
    transition('out => in', [group([
      animate('1ms ease-in-out', style({
        'visibility': 'visible'
      })),
      animate('600ms ease-in-out', style({
        'max-height': '500px'
      })),
      animate('800ms ease-in-out', style({
        'opacity': '1'
      }))
    ]
    )])
  ]),
];

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [SlideInOutAnimation]
})
export class MenuComponent implements OnInit {

  isActiveValue: boolean;
  animationState = 'out';

  get isActive() {
    return this.isActiveValue;
  }
  set isActive(active: boolean) {
    this.animationState = active ? 'in' : 'out';
    this.isActiveValue = active;
  }

  constructor() { }

  ngOnInit() {
  }

}
