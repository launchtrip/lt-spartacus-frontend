/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import ComponentStyles from './style/styles.module.css';

export default function CarouselItemMobile({ data }) {
  const url = data.link;
  const image = `url(${data.image})`;
  return (
    <div className={ComponentStyles.carousel_card_container}>
      <div className={ComponentStyles.carousel_card_container_inner}>
        <a
          href={url}
          target="_blank"
          className={ComponentStyles.carousel_card_item_one_link}
        >
          <div
            style={{ backgroundImage: image }}
            className={ComponentStyles.carousel_card_item_one}
          />
        </a>
      </div>
    </div>
  );
}
