/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import {

  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton

} from 'react-share';
import ComponentStyles from '../style/styles.module.css';

export default function Social({ display, url }) {
  return (
    <div className={ComponentStyles.event_page_social_container} style={{ justifyContent: display }}>
      <span className="typography_spartacus_eight_light">Share:</span>
      <FacebookShareButton url={url}>
        <FacebookIcon size={32} borderRadius={10} />
      </FacebookShareButton>
      <TwitterShareButton url={url}>
        <TwitterIcon size={32} borderRadius={10} />
      </TwitterShareButton>
      <LinkedinShareButton url={url}>
        <LinkedinIcon size={32} borderRadius={10} />
      </LinkedinShareButton>
    </div>
  );
}
