import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services/general/images.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  images: any;
  constructor(private imagesService: ImagesService) { }

  ngOnInit(): void {
    this.images = this.imagesService.getImages();
  }

}
