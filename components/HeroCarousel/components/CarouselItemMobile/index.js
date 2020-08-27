import React from 'react';
import ComponentStyles from './style/styles.module.css';

export default function CarouselItemMobile() {
  return (
    <div className={ComponentStyles.carousel_card_container}>
      <div className={ComponentStyles.carousel_card_container_inner}>
        <div style={{ backgroundImage: "url(" + "/assets/banner1.png" + ")" }} className={ComponentStyles.carousel_card_item_one} ></div>

        {/* <img alt="" src="/assets/banner1.png" className={ComponentStyles.carousel_card_item_one} /> */}
      </div>
    </div>
  );
}
