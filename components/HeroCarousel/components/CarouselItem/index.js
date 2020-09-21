/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-useless-concat */
import React from 'react';
import ComponentStyles from './style/styles.module.css';

export default function CarouselItem({ data }) {
  const urlOne = data[0].link;
  const urlTwo = data[1].link;
  const imageOne = `url(${data[0].image})`;
  const imageTwo = `url(${data[1].image})`;

  return (
    <div className={ComponentStyles.carousel_card_container}>
      <div className={ComponentStyles.carousel_card_container_inner}>
        <a
          href={urlOne}
          target="_blank"
          className={ComponentStyles.carousel_card_item_one_link}
        >
          <div
            style={{ backgroundImage: imageOne }}
            className={ComponentStyles.carousel_card_item_one}
          />
        </a>
        <a
          href={urlTwo}
          target="_blank"
          className={ComponentStyles.carousel_card_item_two_link}
        >
          <div
            style={{ backgroundImage: imageTwo }}
            className={ComponentStyles.carousel_card_item_two}
          />
        </a>
      </div>
    </div>
  );
}
