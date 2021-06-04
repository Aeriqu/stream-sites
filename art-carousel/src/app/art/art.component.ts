import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss']
})
export class ArtComponent implements OnInit {

  @Input() artData!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
