/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, } from 'react';
import { PlayCircleTwoTone } from '@ant-design/icons';
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

  const renderVideoOrImage = (src, val) => {
    if (src.caption) {
      if (!vid) {
        setVideo(true);
      }
      return (

        <figure className={`col-md-6 ${ComponentStyles.multimedia_container_video}`} onClick={() => setSlideAndOpen(val)}>
          <PlayCircleTwoTone twoToneColor="black" className={ComponentStyles.play_button} />
          <img
            alt="pictures"
            src={src.url}
            className="img-fluid"

          />

        </figure>
      );
    }
    return (
      <figure
        className={`col-md-6 ${ComponentStyles.multimedia_container_image}`}
        onClick={() => setSlideAndOpen(val)}
      >
        <img
          alt="pictures"
          src={src.url}
          className="img-fluid"
        />
      </figure>
    );
  };

  const sectionsTwo = (d) => {
    if (d.length === 2) {
      return (
        renderVideoOrImage(data[1], 1)
      );
    }
    if (d.length === 3) {
      return (
        <div className={ComponentStyles.multimedia_container_sec_two}>
          {renderVideoOrImage(data[1], 1)}
          {renderVideoOrImage(data[2], 2)}
        </div>
      );
    }
    if (d.length === 4) {
      return (
        <div className={ComponentStyles.multimedia_container_sec_two}>
          {renderVideoOrImage(data[1], 1)}
          {renderVideoOrImage(data[2], 2)}
          {renderVideoOrImage(data[3], 3)}
        </div>
      );
    }
    return (
      <div className={ComponentStyles.multimedia_container_sec_two}>
        {renderVideoOrImage(data[1], 1)}
        {renderVideoOrImage(data[2], 2)}

        {renderVideoOrImage(data[3], 3)}
        {renderVideoOrImage(data[4], 4)}
      </div>
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
      <div className="row">
        <div className="col-md-12">
          <div id="mdb-lightbox-ui" />
          <div className={`mdb-lightbox no-margin ${ComponentStyles.multimedia_container_inner}`}>
            {renderVideoOrImage(data[0], 0)}
            {data.length > 1 && sectionsTwo(data)}

          </div>
        </div>
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
