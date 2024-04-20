import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import React from "react";

interface SwiperSliderProps {
  images: string[];
}

const SwiperSlider = ({ images = [] }: SwiperSliderProps) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      modules={[Keyboard, Pagination, Navigation]}
      keyboard={{ enabled: true }}
      pagination={{ clickable: true }}
      navigation={true}
      className='mySwiper'
    >
      {images.map((image: string, i) => (
        <SwiperSlide key={i}>
          <img src={image} alt='product' />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSlider;
