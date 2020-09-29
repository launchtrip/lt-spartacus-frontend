/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { Form, Alert } from 'antd';
import ComponentStyles from './style/styles.module.css';
import { ContactUs } from '../../pages/api/Routes/Requests';

export default function ContactForm() {
  const [submit, updateSubmit] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const layout = {
    labelCol: {
      span: 8,
    }
  };

  const onFinish = async values => {
    try {
      setLoading(true);
      await ContactUs(values);
      updateSubmit(true);
    } catch (err) {
      setLoading(false);
      setLoading(false);
      setError('error trying to submit your contact form');
      setTimeout(() => {
        setError('');
      }, 5000);
    }
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (

    <div className={ComponentStyles.partnership_container}>
      {!submit ?
        <>
          <section className={ComponentStyles.section_one}>
            <Form
              {...layout}
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: 'Please input your name',
                  },
                ]}
              >
                <input
                  className={ComponentStyles.partnership_form_item}
                  placeholder="Name"
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
                  className={ComponentStyles.partnership_form_item}
                  placeholder="Email"
                />
              </Form.Item>
              <Form.Item
                name="subject"
                rules={[
                  {
                    required: true,
                    message: 'Please input your subject',
                  },
                ]}
              >
                <input
                  className={ComponentStyles.partnership_form_item}
                  placeholder="Subject"
                />
              </Form.Item>
              <Form.Item
                name="message"
                rules={[
                  {
                    required: true,
                    message: 'Please input your message',
                  }
                ]}
              >
                <textarea
                  placeholder="Message"

                  className={ComponentStyles.partnership_form_item_text}
                />
              </Form.Item>

              <Form.Item className={ComponentStyles.button}>
                <button
                  disabled={loading}
                  type="primary"
                  htmltype="submit"
                  className="button_lg_styled"
                >
                  Submit
                </button>
              </Form.Item>
            </Form>
          </section>
          <section className={ComponentStyles.section_two}>
            <span className="typography_spartacus_sixteen">Have a Question?</span>
            <span className={`typography_spartacus_seven ${ComponentStyles.copy}`}>
              We are here to answer any questions you have about upcoming events, the Unify platform or other related content.
            </span>
            {error && <Alert message={error} type="error" showIcon />}

          </section>
        </>
        :
        <div
          className={ComponentStyles.submit_container}
        >
          <span className="typography_spartacus_sixteen">Success!</span>
          <span className="typography_spartacus_seventeen_bold">
            A member of our team will be in contact within 1-2 business days
          </span>
        </div>}

    </div>

  );
}
