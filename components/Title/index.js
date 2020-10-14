import React from 'react';

import ComponentStyles from './style/styles.module.css';

export default function Title({ name }) {
  return <div className={`typography_spartacus_sixteen ${ComponentStyles.title}`}>{name}</div>;
}
