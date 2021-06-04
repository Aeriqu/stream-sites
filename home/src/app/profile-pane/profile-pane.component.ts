import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-pane',
  templateUrl: './profile-pane.component.html',
  styleUrls: ['./profile-pane.component.scss']
})
export class ProfilePaneComponent implements OnInit {

  birthday: Date = new Date(1998, 2, 2);
  age: Number;

  constructor() {
    let today = new Date();
    this.age = today.getFullYear() - this.birthday.getFullYear();
  }

  ngOnInit(): void {
    // Work around for Chrome ignoring the muted attribute on the video
    let video: HTMLMediaElement = <HTMLMediaElement> document.getElementById("profile-video");
    video.muted = true;
    video.play();
  }

}
