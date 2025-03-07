import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services/general/images.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  images: any;
  constructor(private imagesService: ImagesService) { }

  ngOnInit(): void {
    this.images = this.imagesService.getImages();
  }

}
