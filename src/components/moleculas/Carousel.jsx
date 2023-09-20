import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCards,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

import img1 from "../../assets/Ruleta/ruleta9.png";
import img2 from "../../assets/Ruleta/ruleta8.png";
import img3 from "../../assets/Ruleta/ruleta5.png";
import img4 from "../../assets/Ruleta/ruleta6.png";
import img5 from "../../assets/Ruleta/ruleta7.png";
import img6 from "../../assets/swiper1.png";
import img7 from "../../assets/swiper1.png";
import img8 from "../../assets/swiper1.png";
import img9 from "../../assets/swiper1.png";
import img10 from "../../assets/swiper1.png";
import Arrow from "../../assets/Arrow.svg";
export default function Carousel() {
  return (
    <Container>
      <Swiper
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[
          EffectCards,
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
        ]}
        navigation={true}
        pagination={{ type: "fraction" }}
        scrollbar={{ draggable: true }}
        effect={"cards"}
      >
        <SwiperSlide>
          <img src={img1} alt="Nft" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="Nft" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="Nft" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="Nft" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="Nft" />
        </SwiperSlide>

      </Swiper>
    </Container>
  );
}
const Container = styled.div`
  width: 25vw;
  height: 70vh;

  @media (max-width: 70em) {
    height: 60vh;
    padding: 15px 0;
  }
  @media (max-width: 64em) {
    height: 50vh;
    width: 30vw;
  }
  @media (max-width: 48em) {
    height: 35vh;
    width: 40vw;
  }
  @media (max-width: 30em) {
    height: 45vh;
    width: 60vw;
  }
  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    /* background-color: ${(props) => props.theme.carouselColor}; */
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      display: block;

      height: 100%;

      object-fit: contain;
    }
  }
  .swiper-button-next {
    color: ${(props) => props.theme.text};
    right: 0;
    width: 4rem;
    top: 60%;
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;
    &:after {
      display: none;
    }
    @media (max-width: 64em) {
      width: 3rem;
    }
    @media (max-width: 30em) {
      width: 2rem;
    }
  }
  .swiper-button-prev {
    color: ${(props) => props.theme.text};
    right: 0;
    width: 4rem;
    top: 60%;
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;
    transform: rotate(180deg);
    &:after {
      display: none;
    }
    @media (max-width: 64em) {
      width: 3rem;
    }
    @media (max-width: 30em) {
      width: 2rem;
    }
  }
`;
const ContentImg = styled.div`
  width: 100%;
  height: 100%;
  background-color: blue;
  img {
    height: 100%;
    object-fit: cover;
  }
`;
