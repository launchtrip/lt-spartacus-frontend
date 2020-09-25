import React from 'react';
import Carousel from 'react-multi-carousel';
import ComponentStyles from './style/styles.module.css';
import { CarouselItem, CarouselItemMobile } from './components';
import { split } from '../helperFunctions';

export default function HeroCarousel({ data }) {
  const rightArrow = () => (
    <img src="/assets/rightarrow.png" alt="" className={ComponentStyles.carousel_container_arrow_right} />

  );
  const leftArrow = () => (

    <img src="/assets/leftarrow.png" alt="" className={ComponentStyles.carousel_container_arrow_left} />

  );

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const webData = split(data, 2);
  return (
    <div className="home_sec_hero">
      <div className={ComponentStyles.carousel_container}>
        <Carousel
          swipeable
          draggable={false}
          showDots
          minimumTouchDrag={80}
          responsive={responsive}
          customLeftArrow={leftArrow()}
          customRightArrow={rightArrow()}
          ssr // means to render carousel on server-side.
          infinite
          autoPlaySpeed={1000}
          keyBoardControl
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={['mobile']}
          dotListClass={ComponentStyles.carousel_container_dot_style}
          renderDotsOutside
          slidesToSlide={1}
          className={ComponentStyles.carousel_web}
        >
          {webData.map((d) => <CarouselItem key={Math.random()} data={d} />)}
        </Carousel>

      </div>
      <div className={ComponentStyles.carousel_container_mobile}>
        <Carousel
          swipeable
          draggable={false}
          showDots
          minimumTouchDrag={80}
          arrows={false}
          responsive={responsive}
          ssr // means to render carousel on server-side.
          infinite
          autoPlaySpeed={1000}
          keyBoardControl
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={['tablet', 'mobile']}
          dotListClass={ComponentStyles.carousel_container_dot_style_mobile}
          renderDotsOutside
          slidesToSlide={1}
          className={ComponentStyles.carousel_mobile}
        >
          {data && data.map((d) => <CarouselItemMobile key={d.id} data={d} />)}
        </Carousel>
      </div>
    </div>
  );
}
