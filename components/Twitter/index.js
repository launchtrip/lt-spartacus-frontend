import React from 'react';
import {
  TwitterTimelineEmbed,
} from 'react-twitter-embed';

export default function Twitter({ name }) {
  return (
    <TwitterTimelineEmbed
      sourceType="profile"
      screenName={name}
      options={{ height: 600, width: 400 }}
      noHeader
      noFooter
      noScrollBar
      transparent
      noBoarders
    />
  );
}
