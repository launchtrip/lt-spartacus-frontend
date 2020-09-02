/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Form } from 'antd';
import ComponentStyles from './style/styles.module.css';

export default function QuestionWidget({ type }) {
  const vertical = type === 'vertical';
  const main = vertical ? ComponentStyles.question_container : ComponentStyles.question_container_horizontal;
  const classType = vertical ? ComponentStyles.question_conatiner_vertical : ComponentStyles.question_conatiner_horizontal;
  const formClassType = vertical ? ComponentStyles.form_container : ComponentStyles.form_container_horizontal;
  const formItem = vertical ? ComponentStyles.form_item : ComponentStyles.form_item_horizontal;
  const layout = {
    labelCol: {
      span: 8,
    }
  };

  const onFinish = (e) => {
    console.log(e);
  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className={main}>
      <span className="typography_spartacus_eight">Have A Question?</span>
      <div className={classType}>
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          className={formClassType}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          {vertical &&
          <Form.Item
            name="name"
          >
            <input
              className={formItem}
              placeholder="Name"
            />
          </Form.Item>}
          {vertical &&
          <Form.Item
            name="email"
          >
            <input
              className={formItem}
              placeholder="Email"
            />
          </Form.Item>}
          {!vertical &&
          <div>
            <Form.Item
              name="name"
            >
              <input
                className={formItem}
                placeholder="Name"
              />
            </Form.Item>
            <Form.Item
              name="email"
            >
              <input
                className={formItem}
                placeholder="Email"
              />
            </Form.Item>

          </div>}
          <Form.Item
            name="question"
          >
            <input
              placeholder="Your Question or Message"

              className={ComponentStyles.form_item_text}
            />
          </Form.Item>

          <Form.Item className={ComponentStyles.button}>
            <button type="primary" htmlType="submit" className={vertical ? 'button_lg_styled' : 'button_lg_styled_filled'}>
              Submit
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
