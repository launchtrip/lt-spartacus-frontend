import React from 'react';
import ComponentStyles from './style/styles.module.css';
import EventIcon from '../EventIcon';

export default function Article({ article }) {
  const body = article.body.split(/\n/g);
  const [image] = article.image;
  return (
    <div className={ComponentStyles.article_container}>
      <img src={image.url} alt={image.caption} className={ComponentStyles.articl_image} />
      <section className={`${ComponentStyles.articl_title} typography_spartacus_twenty_two_bold `}>{article.title}</section>
      <section className="typography_spartacus_twenty_three">Written by {article.author}</section>
      <section className={ComponentStyles.articl_copy_container}>
        <section className={ComponentStyles.articl_copy_section_one}>
          <section className={`${ComponentStyles.articl_copy_section_one_share_copy} typography_spartacus_seventeen_bold`}>Share:</section>
          <EventIcon image="/assets/facebook.png" width="30px" height="30px" />
          <EventIcon image="/assets/twitter.png" width="30px" height="30px" />
          <EventIcon image="/assets/linkedin.png" width="30px" height="30px" />
        </section>
        <section className={`${ComponentStyles.articl_copy_section_two} typography_spartacus_four`}>
          {body.map((p) => <section key={Math.random()} className={ComponentStyles.articl_copy_section_two_paragraph}>{p}</section>)}
        </section>
        <section className={ComponentStyles.articl_copy_section_three}>hey</section>
      </section>
    </div>
  );
}
