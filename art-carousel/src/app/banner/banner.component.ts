import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  title: string = 'Thanks for coming, watching, and hanging out with me!';

  constructor() { }

  ngOnInit(): void {
    const urlParams = new URLSearchParams(window.location.search);
    let titleParam = urlParams.get('title');
    this.title = titleParam ? titleParam : this.title;
  }

}
