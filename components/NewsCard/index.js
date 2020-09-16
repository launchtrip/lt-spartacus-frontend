import React from 'react';
import ComponentStyles from './style/styles.module.css';
import { countdownInDays } from '../helperFunctions';

export default function NewsCard({ alternate, line, withImage, article }) {
  if (!article) {
    return <p>no article</p>;
  }
  const date = article.date ? article.date : article.updated_at;
  const mainContainer = withImage ? ComponentStyles.news_container_with_image : ComponentStyles.news_container;
  const titleClass = withImage ? `typography_spartacus_nineteen ${ComponentStyles.news_title}` : 'typography_spartacus_one_demi_bold';
  console.log(article);
  const renderSubs = () => {
    const subs = article.subindustries && article.subindustries.map((sub, i) => {
      const { length } = article.subindustries;
      if (i + 1 === length) {
        return sub.description;
      }
      return `${sub.description}, `;
    });
    return subs;
  };
  return (
    <div className={mainContainer}>
      <span className={`${titleClass} ${ComponentStyles.news_item}`}>{article.title}</span>
      {!alternate &&
      <span
        className={` typography_spartacus_seven ${ComponentStyles.news_item}`}
      >
        {article.body}
      </span>}
      {!alternate &&
      <div
        className={ComponentStyles.news_container_detials}
      >
        <p className="typography_spartacus_eleven">
          {renderSubs()}
        </p> |
        <p className="typography_spartacus_twelve">
          {countdownInDays(date)} {countdownInDays(date) > 1 ? 'days' : 'day'} ago
        </p>
      </div>}
      {alternate &&
      <div
        className={ComponentStyles.news_container_detials_alt}
      >
        <span className="typography_spartacus_eleven">
          {renderSubs()}
        </span>
        <span className={`typography_spartacus_twelve ${ComponentStyles.news_container_detials_alt_item}`}>
          {countdownInDays(date)} {countdownInDays(date) > 1 ? 'days' : 'day'} ago
        </span>
      </div>}

      {line && <hr className={ComponentStyles.news_hr} />}
    </div>
  );
}
