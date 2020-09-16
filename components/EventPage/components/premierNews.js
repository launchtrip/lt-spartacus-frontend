import React from 'react';
import ComponentStyles from '../style/styles.module.css';
import NewsCard from '../../NewsCard';

export default function PremierNews({ event }) {
  return (
    <section className={ComponentStyles.event_page_news}>
      <span className={`typography_spartacus_eight ${ComponentStyles.event_page_related_title}`}>In The News</span>
      {event.articles.map((article) =>
        <section className={ComponentStyles.event_page_related_events_inner_img_news} key={article.id}>
          <span className={ComponentStyles.event_page_related_img_news_card}>
            <img src={article.image[0].url} alt="" className={ComponentStyles.event_page_related_img_news_card_img} />
            <NewsCard alternate withImage article={article} />
          </span>
        </section>)}
    </section>

  );
}
