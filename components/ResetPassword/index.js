/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { Form } from 'antd';
import ComponentStyles from './style/styles.module.css';

export default function ResetPassword() {
  const [submit, updateSubmit] = useState(false);

  const layout = {
    labelCol: {
      span: 8,
    }
  };
  const onFinish = values => {
    updateSubmit(true);
    // add logic to push back to home page with ROUTER
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className={ComponentStyles.reset_container}>
      {!submit ?
        <div className={ComponentStyles.reset_containe_inner}>
          <span className="typography_spartacus_sixteen">Reset Password</span>
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
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your old password',
                },
              ]}
            >
              <input
                className={ComponentStyles.form_item}
                placeholder="Enter Old Password"
                type="password"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
              hasFeedback
            >
              <input
                className={ComponentStyles.form_item}
                type="password"
                placeholder="New Password"
              />
            </Form.Item>

            <Form.Item
              name="confirm"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject('The two passwords that you entered do not match!');
                  },
                }),
              ]}
            >
              <input
                className={ComponentStyles.form_item}
                type="password"
                placeholder="Re-enter New Password"
              />
            </Form.Item>
            <Form.Item className={ComponentStyles.button}>
              <button type="primary" htmlType="submit" className="button_lg_styled">
                Reset Password
              </button>
            </Form.Item>
          </Form>
        </div>
        :
        <div
          className={ComponentStyles.submit_container}
        >
          <span className="typography_spartacus_sixteen">Success!</span>
          <span className="typography_spartacus_seventeen_bold">
            Your password has been update!
          </span>
        </div>}
    </div>
  );
}
