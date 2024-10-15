import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ImagesService {

  private images: any = {
    imgProfil: '../../assets/images/profile-img.jpg',
    imgMessage1: '../../assets/images/messages-1.jpg',
    imgMessage2: '../../assets/images/messages-2.jpg',
    imgMessage3: '../../assets/images/messages-3.jpg',
    logo: '../../assets/images/logo.png',
    imgNews1: '../../assets/images/news-1.jpg',
    imgNews2: '../../assets/images/news-2.jpg',
    imgNews3: '../../assets/images/news-3.jpg',
    imgNews4: '../../assets/images/news-4.jpg',
    imgNews5: '../../assets/images/news-5.jpg',
    imgProduct1: '../../assets/images/product-1.jpg',
    imgProduct2: '../../assets/images/product-2.jpg',
    imgProduct3: '../../assets/images/product-3.jpg',
    imgProduct4: '../../assets/images/product-4.jpg',
    imgProduct5: '../../assets/images/product-5.jpg',
    azlogo: '../../assets/educ/images/logoaz.png',
    profil: '../../assets/educ/images/logoaz.png'
  }
  constructor() { }

  public getImages(): any {
    return this.images;
  }
}
