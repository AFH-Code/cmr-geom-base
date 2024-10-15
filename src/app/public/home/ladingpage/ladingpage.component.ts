import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services/general/images.service';

@Component({
  selector: 'app-ladingpage',
  templateUrl: './ladingpage.component.html',
  styleUrls: ['./ladingpage.component.scss']
})
export class LadingpageComponent implements OnInit {

  images: any;
  constructor(private imagesService: ImagesService) { }

  ngOnInit(): void {
    this.images = this.imagesService.getImages();
  }

}
