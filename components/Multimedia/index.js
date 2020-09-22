/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, } from 'react';
import { PlayCircleOutlined } from '@ant-design/icons';
import ReactImageVideoLightbox from 'react-image-video-lightbox';
import ComponentStyles from './style/styles.module.css';

export default function Multimedia({ data }) {
  const [state, setState] = useState(false);
  const [slide, setSlide] = useState(1);
  const [vid, setVideo] = useState(false);
  const setSlideAndOpen = (num) => {
    setSlide(num);
    setState(true);
  };

  const renderVideoOrImage = (src, val, clss) => {
    const imageUrl = `url(${src.url})`;
    if (src.caption) {
      if (!vid) {
        setVideo(true);
      }
      return (
        <div className={`${ComponentStyles.multimedia_container_video} ${clss}`} onClick={() => setSlideAndOpen(val)} style={{ backgroundImage: imageUrl }}>
          <PlayCircleOutlined className={ComponentStyles.play_button} />
        </div>
      );
    }
    return (
      <div style={{ backgroundImage: imageUrl }} className={clss} onClick={() => setSlideAndOpen(val)} />
    );
  };

  const sectionsTwo = (d) => {
    if (d.length === 1) {
      return (
        renderVideoOrImage(data[0], 0, ComponentStyles.media_item_single)
      );
    }
    if (d.length === 2) {
      return (
        <>
          {renderVideoOrImage(data[0], 0, ComponentStyles.media_item_two)}
          {renderVideoOrImage(data[1], 1, ComponentStyles.media_item_two)}
        </>

      );
    }
    if (d.length === 3) {
      return (
        <>
          {renderVideoOrImage(data[0], 0, ComponentStyles.media_item_two)}
          <div className={ComponentStyles.multimedia_container_sec_two}>
            {renderVideoOrImage(data[1], 1, ComponentStyles.media_item_three)}
            {renderVideoOrImage(data[2], 2, ComponentStyles.media_item_three)}
          </div>
        </>
      );
    }
    if (d.length === 4) {
      return (
        <>
          {renderVideoOrImage(data[0], 0, ComponentStyles.media_item_two)}
          <div className={ComponentStyles.multimedia_container_sec_two}>
            <div className={ComponentStyles.multimedia_container_sec_two_inner}>
              {renderVideoOrImage(data[1], 1, ComponentStyles.media_item_four)}
              {renderVideoOrImage(data[2], 2, ComponentStyles.media_item_four)}
            </div>
            {renderVideoOrImage(data[3], 3, ComponentStyles.media_item_three)}

          </div>
        </>
      );
    }
    return (
      <>
        {renderVideoOrImage(data[0], 0, ComponentStyles.media_item_two)}
        <div className={ComponentStyles.multimedia_container_sec_two}>
          <div className={ComponentStyles.multimedia_container_sec_two_inner}>
            {renderVideoOrImage(data[1], 1, ComponentStyles.media_item_four)}
            {renderVideoOrImage(data[2], 2, ComponentStyles.media_item_four)}
          </div>
          <div className={ComponentStyles.multimedia_container_sec_two_inner}>
            {renderVideoOrImage(data[3], 3, ComponentStyles.media_item_four)}
            {renderVideoOrImage(data[4], 4, ComponentStyles.media_item_four)}
          </div>
        </div>
      </>
    );
  };

  const images = data.map((d) => {
    if (d.caption) {
      return { url: d.caption, type: 'video', altTag: 'placeholder video' };
    }
    return { url: d.url, type: 'photo', altTag: 'placeholder image' };
  });
  return (
    <div className={ComponentStyles.multimedia_container}>
      <section className="typography_spartacus_eight">Multimedia</section>
      <div className={ComponentStyles.multimedia_container_inner}>
        {sectionsTwo(data)}
      </div>
      {state &&
      <section className={ComponentStyles.multimedia_lightbox}>
        <ReactImageVideoLightbox
          data={images}
          startIndex={slide}
          showResourceCount
          onCloseCallback={() => setState(!state)}
        />
      </section>}
    </div>
  );
}
