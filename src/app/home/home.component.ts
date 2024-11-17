import { Component, OnInit } from '@angular/core';
import SwiperCore, {
  Autoplay,
  EffectCoverflow,
  EffectFade,
  Swiper,
} from 'swiper';
import { AutoplayOptions } from 'swiper/types';
SwiperCore.use([EffectCoverflow, EffectFade, Autoplay]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isMobile: boolean = true;
  isDesktop: boolean = true;

  constructor() { }

  ngOnInit(): void {
    // Set initial screen size
    this.isMobile = window.innerWidth <= 844;
    this.isDesktop = !this.isMobile;

    // Listen for window resize events to update screen size
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth <= 844;
      this.isDesktop = !this.isMobile;
    });
  }
  windowWidth: number = window.innerWidth;
  autoplayOptions: AutoplayOptions | boolean = {
    delay: 7000,
    disableOnInteraction: false,
  };
  coverFlowEffectOptions = {
    stretch: 0,
  };
  showFullText: boolean = false;

  toggleText() {
    this.showFullText = !this.showFullText;
  }
}
var SIDEBAR_VISIBLE = false;
function openSidebar() {
  // document.getElementById('navigation').style.transform
  if (SIDEBAR_VISIBLE) {
    document.getElementById('navigation')!.style.transform = 'translateX(0%)';
    document.getElementById('overlay')!.style.display = 'none';
  } else {
    document.getElementById('navigation')!.style.transform =
      'translateX(-100%)';
    document.getElementById('overlay')!.style.display = 'block';
  }
  SIDEBAR_VISIBLE = !SIDEBAR_VISIBLE;
}

