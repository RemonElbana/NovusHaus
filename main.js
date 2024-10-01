import Swiper from "swiper";
import { Thumbs } from "swiper/modules";

// import Swiper and modules styles
import "swiper/swiper.min.css";
import "swiper/modules/thumbs.min.css";

//  Initialize Swiper
let swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

let swiper2 = new Swiper(".mySwiper2", {
  modules: [Thumbs],
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
});