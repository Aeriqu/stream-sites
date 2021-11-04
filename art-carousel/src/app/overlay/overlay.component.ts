import { Component, Input, OnInit } from '@angular/core';
import { faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {

  @Input() artData!: any;

  faTwitch = faTwitch;
  faTwitter = faTwitter;

  constructor() { }

  ngOnInit(): void {
  }

}
