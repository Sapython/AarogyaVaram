import { Component } from '@angular/core';

import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar]);
@Component({
  selector: 'app-blog-open',
  templateUrl: './blog-open.component.html',
  styleUrls: ['./blog-open.component.scss']
})
export class BlogOpenComponent {
  windowWidth: number = window.innerWidth;
}
