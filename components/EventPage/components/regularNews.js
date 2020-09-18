import React from 'react';
import ComponentStyles from '../style/styles.module.css';
import NewsCard from '../../NewsCard';

export default function RegularNews({ event }) {
  return (
    <section className={ComponentStyles.event_page_section_two_news}>
      <span className={`typography_spartacus_eight ${ComponentStyles.event_page_section_two_news_title}`}>News & Articles</span>
      {event.articles.map((article) => <NewsCard alternate line article={article} />)}
    </section>
  );
}
