import { Component } from '@angular/core';
import SwiperCore, {
  Autoplay,
  EffectCoverflow,
  EffectFade,
  Swiper,
  Pagination,
  Navigation
} from 'swiper';
import { AutoplayOptions } from 'swiper/types';

SwiperCore.use([EffectCoverflow, EffectFade, Autoplay,Pagination, Navigation]);
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  windowWidth: number = window.innerWidth;
  autoplayOptions: AutoplayOptions = {
    delay: 7000,
  disableOnInteraction: false,
 };
 coverFlowEffectOptions = {
   stretch: 0,
 };
 Pagination = {
       el: ".swiper-pagination",
 }
 Navigation= {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
 }
}
