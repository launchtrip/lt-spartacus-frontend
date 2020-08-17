import React from 'react';
import Carousel from 'react-multi-carousel';
import Link from 'next/link';
import EventCard from '../EventCard';
import ComponentStyles from './style/styles.module.css';
import EventIcon from '../EventIcon';

export default function EventCarousel({ title, arrows }) {
  const rightArrow = () => (
    <img src="/assets/rightarrow.png" alt="" className={ComponentStyles.carousel_container_arrow_right} />

  );
  const leftArrow = () => (
    <img src="/assets/leftarrow.png" alt="" className={ComponentStyles.carousel_container_arrow_left} />

  );
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1240 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1240, min: 550 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 550, min: 0 },
      items: 1
    }
  };
  return (
    <div className={ComponentStyles.event_carousel_container}>
      <hr className={ComponentStyles.event_carousel_breakline_top} />
      <span className="typography_spartacus_eight">{title}</span>

      <Carousel
        swipeable
        draggable={false}
        minimumTouchDrag={80}
        responsive={responsive}
        customLeftArrow={leftArrow()}
        customRightArrow={rightArrow()}
        ssr // means to render carousel on server-side.
        autoPlaySpeed={1000}
        keyBoardControl
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['mobile']}
        slidesToSlide={1}
        className={ComponentStyles.event_carousel}
        arrows={arrows}
        infinite
      >
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </Carousel>
      <Link href="/virtualevents">
        <span
          className={`typography_spartacus_nine_demi_bold ${ComponentStyles.view_more}`}
        >View More <span><EventIcon image="/assets/viewMore.png" width="25px" height="25px" /></span>
        </span>
      </Link>

      <hr className={ComponentStyles.event_carousel_breakline_bottom} />
    </div>
  );
}
