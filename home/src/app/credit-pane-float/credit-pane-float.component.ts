import { Component, Input, OnInit } from '@angular/core';

import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faTwitch, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-credit-pane-float',
  templateUrl: './credit-pane-float.component.html',
  styleUrls: ['./credit-pane-float.component.scss']
})
export class CreditPaneFloatComponent implements OnInit {

  @Input() data: any;

  faHome = faHome;
  faTwitter = faTwitter;
  faTwitch = faTwitch;
  faInstagram = faInstagram;

  constructor() { }

  ngOnInit(): void { }

}
