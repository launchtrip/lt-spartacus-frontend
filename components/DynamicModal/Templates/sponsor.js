/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { Form } from 'antd';
import ComponentStyles from './styles.module.css';
import { BecomeASponsor } from '../../../pages/api/Routes/Requests';
import Error from './error';

export default function Sponsor({ setState, setNote, original, updateModal, event }) {
  const [error, setError] = useState('');
  const layout = {
    labelCol: {
      span: 8,
    }
  };
  const onFinish = async values => {
    try {
      const data = { ...values, event };
      await BecomeASponsor(data);
      setNote('Thank you for contacting us. We will get in touch with you shortly if applicable.');
      setState('note');
      setTimeout(() => {
        updateModal(false);
        setState(original);
      }, 3000);
    } catch (err) {
      setError('unable to submit your request at this time!');
      setTimeout(() => {
        setError('');
      }, 5000);
    }
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className={ComponentStyles.modal_base_container}>
      <div className={ComponentStyles.modal_container}>
        <span className="typography_spartacus_sixteen">Become a Sponser/Speaker</span>
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          className={ComponentStyles.form_container}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input your name',
              }
            ]}
          >
            <input
              className={ComponentStyles.form_item}
              placeholder="Name"
            />
          </Form.Item>
          <Form.Item
            name="company"
            rules={[
              {
                required: true,
                message: 'Please input your company name',
              }
            ]}
          >
            <input
              className={ComponentStyles.form_item}
              placeholder="Company"
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email',
              },
              {
                type: 'email',
                message: 'Please input a valid email',
              }
            ]}
          >
            <input
              className={ComponentStyles.form_item}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="message"
          >
            <textarea
              placeholder="Comments or Questions"
              className={ComponentStyles.form_item_text}
            />
          </Form.Item>

          <Form.Item className={ComponentStyles.button}>
            <button type="primary" htmltype="submit" className="button_lg_styled">
              Submit
            </button>
          </Form.Item>
        </Form>
        {error && <Error message={error} />}

      </div>
    </div>
  );
}
