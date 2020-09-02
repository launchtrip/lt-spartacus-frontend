import React from 'react';
import ComponentStyles from './style/styles.module.css';

export default function NewsCard({ alternate, line, withImage }) {
  const mainContainer = withImage ? ComponentStyles.news_container_with_image : ComponentStyles.news_container;
  const titleClass = withImage ? `typography_spartacus_nineteen ${ComponentStyles.news_title}` : 'typography_spartacus_one_demi_bold';
  return (
    <div className={mainContainer}>
      <span className={`${titleClass} ${ComponentStyles.news_item}`}>The numbers behind Collision from Home </span>
      {!alternate &&
      <span
        className={` typography_spartacus_seven ${ComponentStyles.news_item}`}
      >Lleading open source and cloud native communities to further the education and
        advancement.
      </span>}
      {!alternate &&
      <div
        className={ComponentStyles.news_container_detials}
      >
        <p className="typography_spartacus_eleven">Tech, Startup</p> | <p className="typography_spartacus_twelve">1 day ago</p>
      </div>}
      {alternate &&
      <div
        className={ComponentStyles.news_container_detials_alt}
      >
        <span className="typography_spartacus_eleven">
          Tech, Startup
        </span>
        <span className={`typography_spartacus_twelve ${ComponentStyles.news_container_detials_alt_item}`}>
          1 day ago
        </span>
      </div>}

      {line && <hr className={ComponentStyles.news_hr} />}
    </div>
  );
}
