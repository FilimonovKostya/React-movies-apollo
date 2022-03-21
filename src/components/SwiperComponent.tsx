import React from "react";
// eslint-disable-next-line import/extensions,import/no-unresolved
import { Swiper, SwiperSlide } from "swiper/react";
// eslint-disable-next-line import/no-unresolved
import "swiper/css";
import { Autoplay } from "swiper";
import "../index.css";

function SwiperComponent() {
  return (
    <Swiper
      className="swiper swiper-slide"
      slidesPerView={6}
      loop
      // autoplay={{
      //   delay: 1000,
      //   disableOnInteraction: false,
      // }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay]}
    >
      <SwiperSlide>
        <div className="test">
          <img
            src="https://image.tmdb.org/t/p/w300//aTcqu8cI4wMohU17xTdqmXKTGrw.jpg"
            alt=""
          />
          <span>Kristen Connolly</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="test">
          <img
            src="https://image.tmdb.org/t/p/w300//aTcqu8cI4wMohU17xTdqmXKTGrw.jpg"
            alt=""
          />
          <span>Kristen Connolly</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="test">
          <img
            src="https://image.tmdb.org/t/p/w300//aTcqu8cI4wMohU17xTdqmXKTGrw.jpg"
            alt=""
          />
          <span>Kristen Connolly</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="test">
          <img
            src="https://image.tmdb.org/t/p/w300//aTcqu8cI4wMohU17xTdqmXKTGrw.jpg"
            alt=""
          />
          <span>Kristen Connolly</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="test">
          <img
            src="https://image.tmdb.org/t/p/w300//aTcqu8cI4wMohU17xTdqmXKTGrw.jpg"
            alt=""
          />
          <span>Kristen Connolly</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="test">
          <img
            src="https://image.tmdb.org/t/p/w300//aTcqu8cI4wMohU17xTdqmXKTGrw.jpg"
            alt=""
          />
          <span>Kristen Connolly</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="test">
          <img
            src="https://image.tmdb.org/t/p/w300//aTcqu8cI4wMohU17xTdqmXKTGrw.jpg"
            alt=""
          />
          <span>Kristen Connolly</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="test">
          <img
            src="https://image.tmdb.org/t/p/w300//aTcqu8cI4wMohU17xTdqmXKTGrw.jpg"
            alt=""
          />
          <span>Kristen Connolly</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="test">
          <img
            src="https://image.tmdb.org/t/p/w300//aTcqu8cI4wMohU17xTdqmXKTGrw.jpg"
            alt=""
          />
          <span>Kristen Connolly</span>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default SwiperComponent;
