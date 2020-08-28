import React from 'react';

export default function EventIcon({ image, width, height, marginRight, marginLeft }) {
  return <img src={image} alt="" style={{ width, height, marginRight, marginLeft }} />;
}
