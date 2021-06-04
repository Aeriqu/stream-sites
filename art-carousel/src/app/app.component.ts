import { state, trigger, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { ArtService } from './art-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'art-carousel';

  artData: any = {url: ''};
  isShowing: boolean = false;

  constructor(private artService: ArtService) {
    this.artService.getImages().subscribe(data => this.imageCallback(data));
  }

  findIndex(data: any): number {

    for (let index = 0; index < data.images.length; index++) {
      let image = data.images[index];

      if (image.url == this.artData.url) {
        return index;
      }
    }

    return -1;
  }

  imageCallback(data: any): void {
    if(data.images.length > 1) {
      // Check if current artData is in the list, if so, pick a different one
      let artDataIndex: number = this.findIndex(data);
      if (artDataIndex != -1) {
        data.images.splice(artDataIndex, 1);
      }

      let randomIndex = Math.floor(Math.random() * data.images.length);
      this.loadImage(data.images[randomIndex]);
    }

    else if(data.images.length === 1) {
      this.loadImage(data.images[0]);
    }

    else {
      console.log('[Error] Unable to obtain image data.');
    }
  }

  loadImage(data: any): void {
    let image = new Image();
    image.onload = () => { this.showImage(data); };
    image.src = data.url;
  }

  showImage(data: any): void {
    this.artData = data;
    this.isShowing = true;

    setTimeout(
      () => { this.changeImage() },
      10000
    );
  }

  changeImage(): void {
    console.log('changing image');
    this.isShowing = false;
    
    setTimeout(
      () => { this.artService.getImages().subscribe(data => this.imageCallback(data)); },
      500
    );
  }
}
