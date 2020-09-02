/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, } from 'react';
import { PlayCircleTwoTone } from '@ant-design/icons';
import FsLightbox from 'fslightbox-react';
import ComponentStyles from './style/styles.module.css';

export default function Multimedia({ data }) {
  const [state, setState] = useState(false);
  const [slide, setSlide] = useState(2);

  const setSlideAndOpen = (num) => {
    setSlide(num + 1);
    setState(!state);
  };
  const renderVideoOrImage = (src, classType, val) => {
    if (src.caption) {
      return (
        <section className={ComponentStyles.multimedia_container_video} onClick={() => setSlideAndOpen(val)}>
          <PlayCircleTwoTone twoToneColor="black" className={ComponentStyles.play_button} />
          <img src={src.url} alt="" className={classType} />
        </section>
      );
    }
    return (
      <img src={src.url} alt="" className={classType} onClick={() => setSlideAndOpen(val)} />
    );
  };

  const sectionsTwo = (d) => {
    if (d.length === 2) {
      return (
        <section className={ComponentStyles.media_section_one_plus}>
          {renderVideoOrImage(data[1], ComponentStyles.sec_one_image, 1)}
        </section>
      );
    }
    if (d.length === 3) {
      return (
        <section className={ComponentStyles.media_section_three}>
          {renderVideoOrImage(data[1], ComponentStyles.sec_three_image, 1)}
          {renderVideoOrImage(data[2], ComponentStyles.sec_three_image, 2)}
        </section>
      );
    }
    if (d.length === 4) {
      return (
        <section className={ComponentStyles.media_section_three}>
          <section className={ComponentStyles.media_section_three_top}>
            {renderVideoOrImage(data[1], ComponentStyles.sec_four_image, 1)}
            {renderVideoOrImage(data[2], ComponentStyles.sec_four_image, 2)}
          </section>
          {renderVideoOrImage(data[3], ComponentStyles.sec_three_image_plus, 3)}
        </section>
      );
    }
    return (
      <section className={ComponentStyles.media_section_three}>
        <section className={ComponentStyles.media_section_three_top}>
          {renderVideoOrImage(data[1], ComponentStyles.sec_four_image, 1)}
          {renderVideoOrImage(data[2], ComponentStyles.sec_four_image, 2)}
        </section>
        <section className={ComponentStyles.media_section_three_top}>
          {renderVideoOrImage(data[3], ComponentStyles.sec_four_image, 3)}
          {renderVideoOrImage(data[4], ComponentStyles.sec_four_image, 4)}
        </section>
      </section>
    );
  };

  const sectionOne = data.length > 1 ? ComponentStyles.media_section_one_plus : ComponentStyles.media_section_one;
  const images = data.map((d) => {
    if (d.caption) {
      return d.caption;
    }
    return d.url;
  });
  return (
    <div className={ComponentStyles.multimedia_container}>
      <section className="typography_spartacus_eight">Multimedia</section>
      <div className={ComponentStyles.multimedia_container_inner}>
        <section className={sectionOne}>
          {renderVideoOrImage(data[0], ComponentStyles.sec_one_image, 0)}
        </section>
        {data.length > 1 && sectionsTwo(data)}
      </div>
      <FsLightbox
        types={['image', 'video', 'youtube']}
        slide={slide}
        toggler={state}
        sources={images}
      />

    </div>
  );
}
