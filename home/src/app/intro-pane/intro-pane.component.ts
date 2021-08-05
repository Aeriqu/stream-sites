import { Component, OnInit } from '@angular/core';
import { faDiscord, faTwitter, faTwitch, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPaintBrush, faUserCircle, faQuestion } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-intro-pane',
  templateUrl: './intro-pane.component.html',
  styleUrls: ['./intro-pane.component.scss']
})
export class IntroPaneComponent implements OnInit {

  faDiscord = faDiscord;
  faTwitter = faTwitter;
  faTwitch = faTwitch;
  faYoutube = faYoutube;
  faPaintBrush = faPaintBrush;
  faUserCircle = faUserCircle;
  faQuestion = faQuestion;

  constructor() { }

  ngOnInit(): void {
    // Work around for Chrome ignoring the muted attribute on the video
    // let video: HTMLMediaElement = <HTMLMediaElement> document.getElementById("intro-media");
    // video.muted = true;
    // video.play();
  }

  scrollTo(elementName: string): void {
    document.querySelector('#' + elementName)!.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

}
