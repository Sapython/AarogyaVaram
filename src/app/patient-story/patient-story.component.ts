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
  selector: 'app-patient-story',
  templateUrl: './patient-story.component.html',
  styleUrls: ['./patient-story.component.scss']
})
export class PatientStoryComponent{
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
