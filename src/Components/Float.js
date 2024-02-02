import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import { Autoplay, Navigation } from "swiper/modules";
import { Container } from "react-bootstrap";

const Float = () => {
  return (
    <div>
      <Container>
        <Swiper
          slidesPerView={6}
          spaceBetween={0}
          autoplay={{
            delay: 700,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]} // Use EffectAutoplay instead of Autoplay
          className="mySwiper"
        >
          <SwiperSlide className="mx-4">
            <div className="hoverIncrease">
              <img src="Images/dsol1.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="mx-4">
            <div className="hoverIncrease">
              <img src="Images/dsol2.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="mx-4">
            <div className="hoverIncrease">
              <img src="Images/dsol3.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="mx-4">
            <div className="hoverIncrease">
              <img src="Images/dsol4.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="mx-4">
            <div className="hoverIncrease">
              <img src="Images/dsol5.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="mx-4">
            <div className="hoverIncrease">
              <img src="Images/dsol6.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="mx-4">
            <div className="hoverIncrease">
              <img src="Images/dsol1.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="mx-4">
            <div className="hoverIncrease">
              <img src="Images/dsol2.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="mx-4">
            <div className="hoverIncrease">
              <img src="Images/dsol3.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="mx-4">
            <div className="hoverIncrease">
              <img src="Images/dsol4.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="mx-4">
            <div className="hoverIncrease">
              <img src="Images/dsol5.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="mx-4">
            <div className="hoverIncrease">
              <img src="Images/dsol6.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="mx-4">
            <div className="hoverIncrease">
              <img src="Images/dsol1.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="mx-4">
            <div className="hoverIncrease">
              <img src="Images/dsol2.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="mx-4">
            <div className="hoverIncrease">
              <img src="Images/dsol3.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="mx-4">
            <div className="hoverIncrease">
              <img src="Images/dsol4.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="mx-4">
            <div className="hoverIncrease">
              <img src="Images/dsol5.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="mx-4">
            <div className="hoverIncrease">
              <img src="Images/dsol6.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="mx-4">
            <div className="hoverIncrease">
              <img src="Images/dsol1.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="mx-4">
            <div className="hoverIncrease">
              <img src="Images/dsol2.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="mx-4">
            <div className="hoverIncrease">
              <img src="Images/dsol3.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="mx-4">
            <div className="hoverIncrease">
              <img src="Images/dsol4.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="mx-4">
            <div className="hoverIncrease">
              <img src="Images/dsol5.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="mx-4">
            <div className="hoverIncrease">
              <img src="Images/dsol6.png" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
};

export default Float;
