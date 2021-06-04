import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtitle-pane',
  templateUrl: './subtitle-pane.component.html',
  styleUrls: ['./subtitle-pane.component.scss']
})
export class SubtitlePaneComponent implements OnInit {

  @Input() text: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
