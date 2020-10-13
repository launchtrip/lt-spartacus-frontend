/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import ComponentStyles from './style/styles.module.css';
import { countdownInDays } from '../helperFunctions';

export default function NewsCard({ alternate, line, withImage, article, external }) {
  const pathname = external ? article.link : `/article/${article.title.replace('/', '-').split(' ').join('-')}-id-${article.id}`;
  const mainContainer = withImage ? ComponentStyles.news_container_with_image : ComponentStyles.news_container;
  const titleClass = withImage ? `typography_spartacus_nineteen ${ComponentStyles.news_title}` : 'typography_spartacus_one_demi_bold';
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

  const renderDays = (date) => {
    const dateType = countdownInDays(date) > 1 ? 'days' : 'day';
    if (countdownInDays(date) > 0) {
      return `${countdownInDays(date)} ${dateType} ago`;
    }
    return 'Today';
  };
  return (
    <a target={external ? '_blank' : ''} href={pathname}>
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
            <p className={`typography_spartacus_eleven ${ComponentStyles.news_container_detials_subs}`}>
              {renderSubs()}
            </p> |
            <p className="typography_spartacus_twelve">
              {renderDays(article.date)}
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
              {countdownInDays(article.date)} {countdownInDays(article.date) > 1 ? 'days' : 'day'} ago
            </span>
          </div>}

        {line && <hr className={ComponentStyles.news_hr} />}
      </div>
    </a>
  );
}
