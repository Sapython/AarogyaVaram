import { Component } from '@angular/core';
import SwiperCore, { EffectFade, Swiper } from 'swiper';
SwiperCore.use([EffectFade]);
@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.scss']
})
export class GallaryComponent {
  windowWidth: number = window.innerWidth;
  coverFlowEffectOptions = {
    stretch: 0,
  };
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

