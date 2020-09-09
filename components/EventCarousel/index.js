/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import EventCard from '../EventCarouselCard';
import ComponentStyles from './style/styles.module.css';
import EventIcon from '../EventIcon';

export default function EventCarousel({ title, eventPage, data }) {
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
      >
        <img
          onClick={onClick}
          style={{ ...style, display: 'block' }}
          className={ComponentStyles.carousel_container_arrow_right}
          src="/assets/rightarrow.png"
          alt=""
        />
      </div>
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
      >
        <img
          style={{ ...style, display: 'block' }}
          src="/assets/leftarrow.png"
          alt=""
          className={ComponentStyles.carousel_container_arrow_left}
        />
      </div>
    );
  }

  const settings = {
    dots: false,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1
        }
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const titleClass = !eventPage ? 'typography_spartacus_eight' : `typography_spartacus_eight ${ComponentStyles.event_carousel_title}`;
  const baseClass = !eventPage ? `${ComponentStyles.event_carousel_container} home_sec_vc` : ComponentStyles.event_carousel_container;
  return (
    <div className={baseClass}>
      {!eventPage && <hr className={ComponentStyles.event_carousel_breakline_top} />}
      <span className={titleClass}>{title}</span>
      <div className={ComponentStyles.carousel_container}>
        <Slider {...settings}>
          {data && data.map((event) => <EventCard key={event.id} data={event} />)}
        </Slider>
      </div>

      {!eventPage &&
        <Link href="/virtualevents">
          <span
            className={`typography_spartacus_nine_demi_bold ${ComponentStyles.view_more}`}
          >View More <span><EventIcon image="/assets/viewMore.png" width="25px" height="25px" /></span>
          </span>
        </Link>}

      <hr className={ComponentStyles.event_carousel_breakline_bottom} />
    </div>
  );
}
