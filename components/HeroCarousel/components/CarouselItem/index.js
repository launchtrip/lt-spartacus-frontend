import React from 'react';
import ComponentStyles from './style/styles.module.css';

export default function CarouselItem() {
  return (
    <div className={ComponentStyles.carousel_card_container}>
      <div className={ComponentStyles.carousel_card_container_inner}>
        <img alt="" src="/assets/banner1.png" className={ComponentStyles.carousel_card_item_one} />

        <img alt="" src="/assets/banner2.png" className={ComponentStyles.carousel_card_item_two} />
      </div>
    </div>
  );
}
