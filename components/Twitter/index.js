import React from 'react';
import {
  TwitterTimelineEmbed,
} from 'react-twitter-embed';

export default function Twitter({ name, size }) {
  return (
    <TwitterTimelineEmbed
      sourceType="profile"
      screenName={name}
      options={{ height: size, width: 400 }}
      noHeader
      noFooter
      noScrollBar
      transparent
      noBoarders
    />
  );
}
