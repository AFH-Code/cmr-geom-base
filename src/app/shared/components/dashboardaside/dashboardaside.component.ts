import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services/general/images.service';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-dashboardaside',
  templateUrl: './dashboardaside.component.html',
  styleUrls: ['./dashboardaside.component.scss']
})
export class DashboardasideComponent implements OnInit {

  images: any;
  constructor(private imagesService: ImagesService) { }

  ngOnInit(): void {
    this.images = this.imagesService.getImages();
    this.activePosition();
  }

  activePosition()
  {
  }
}
