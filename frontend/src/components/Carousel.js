import React from "react";
import ProductCard from "./ProductCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

function range(start, end) {
  if (end === undefined) {
    end = start;
    start = 0;
  }

  return Array(end - start)
    .fill()
    .map((_, idx) => start + idx);
}

function Carousel() {
  return (
    <div>
      <Swiper
        modules={[EffectCoverflow, Pagination, Navigation]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={false}
        slidesPerView={3}
        spaceBetween={1}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 5,
          slideShadows: false,
        }}
        // pagination
        // navigation
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {range(5).map((index) => (
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
        ))}
      </Swiper>
      <div class={"pagination"}></div>
    </div>
  );
}

export default Carousel;
