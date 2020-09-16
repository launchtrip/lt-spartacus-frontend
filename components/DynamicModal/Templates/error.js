import React from 'react';
import { Alert } from 'antd';
import ComponentStyles from './styles.module.css';

export default function Error({ message }) {
  return (
    <div className={ComponentStyles.modal__error_container}>
      <Alert message={message} type="error" showIcon />
    </div>
  );
}
