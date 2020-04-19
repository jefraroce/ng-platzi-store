import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  mySwiper: Swiper;

  images: string[] = [
    'assets/images/banner-1.jpg',
    'assets/images/banner-2.jpg',
    'assets/images/banner-3.jpg'
  ]

  ngOnInit(): void {
    this.mySwiper = new Swiper('.swiper-container');
  }
}
