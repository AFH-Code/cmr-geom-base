import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services/general/images.service';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-dashboardheader',
  templateUrl: './dashboardheader.component.html',
  styleUrls: ['./dashboardheader.component.scss']
})
export class DashboardheaderComponent implements OnInit {

  images: any;
  constructor(private imagesService: ImagesService) { }

  ngOnInit(): void {
    this.toggleSideBar();
    this.images = this.imagesService.getImages();
  }

  toggleSideBar(){
      /**
     * Easy selector helper function
     */
    const select = (el: any, all = false) => {
      el = el.trim()
      if (all) {
        //return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }

    if (select('.toggle-sidebar-btn')) {
      $('.toggle-sidebar-btn').click(function(){
        select('body').classList.toggle('toggle-sidebar')
      })
    }
  }

}
