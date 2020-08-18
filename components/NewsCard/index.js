import React from 'react';
import ComponentStyles from './style/styles.module.css';

export default function NewsCard() {
  return (
    <div className={ComponentStyles.news_container}>
      <span className={` typography_spartacus_one_demi_bold ${ComponentStyles.news_item}`}>The numbers behind Collision from Home </span>
      <span
        className={` typography_spartacus_seven ${ComponentStyles.news_item}`}
      >Lleading open source and cloud native communities to further the education and
        advancement.
      </span>
      <div
        className={ComponentStyles.news_container_detials}
      >
        <p className="typography_spartacus_eleven">Tech, Startup</p> | <p className="typography_spartacus_twelve">1 day ago</p>
      </div>
      <hr className={ComponentStyles.news_hr} />
    </div>
  );
}
