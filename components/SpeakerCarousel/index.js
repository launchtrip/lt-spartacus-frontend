/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import Slider from 'react-slick';
import SpeakerCard from '../SpeakerCard';
import ComponentStyles from './style/styles.module.css';

export default function SpeakerCarousel({ title, hideEventTitle, speakers }) {
  console.log(speakers);
  const titleClass = `typography_spartacus_eight ${ComponentStyles.title}`;
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
  return (
    <div className={ComponentStyles.container}>
      <span className={titleClass}>{title}</span>
      <div className={ComponentStyles.carousel_container}>
        <Slider {...settings}>
          {speakers && speakers.map((speaker) => <SpeakerCard hideEventTitle={hideEventTitle} data={speaker} key={speaker.id} />)}
        </Slider>
      </div>
      <div />
    </div>
  );
}
