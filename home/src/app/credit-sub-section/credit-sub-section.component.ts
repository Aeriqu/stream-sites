import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-sub-section',
  templateUrl: './credit-sub-section.component.html',
  styleUrls: ['./credit-sub-section.component.scss']
})
export class CreditSubSectionComponent implements OnInit {

  @Input() section: any;

  constructor() { }

  ngOnInit(): void {
  }

}
