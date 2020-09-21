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
      <FacebookShareButton url={url} className={ComponentStyles.event_page_social_item}>
        <FacebookIcon size={25} round style={{ margin: '0px 5px' }} />
      </FacebookShareButton>
      <TwitterShareButton url={url} className={ComponentStyles.event_page_social_item}>
        <TwitterIcon size={25} round style={{ margin: '0px 5px' }} />
      </TwitterShareButton>
      <LinkedinShareButton url={url} className={ComponentStyles.event_page_social_item}>
        <LinkedinIcon size={25} round style={{ margin: '0px 5px' }} />
      </LinkedinShareButton>
    </div>
  );
}
