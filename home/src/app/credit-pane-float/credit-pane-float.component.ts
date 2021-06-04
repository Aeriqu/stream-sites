import { Component, Input, OnInit } from '@angular/core';

import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faTwitch, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { SecretAccessService } from '../secret-access.service';

@Component({
  selector: 'app-credit-pane-float',
  templateUrl: './credit-pane-float.component.html',
  styleUrls: ['./credit-pane-float.component.scss']
})
export class CreditPaneFloatComponent implements OnInit {

  faHome = faHome;
  faTwitter = faTwitter;
  faTwitch = faTwitch;
  faInstagram = faInstagram;

  @Input() data: any;

  constructor(private secretAccess: SecretAccessService) { }

  ngOnInit(): void { }

  checkAccess(item: string): boolean {
    return this.secretAccess.checkAccess(item);
  }

}
