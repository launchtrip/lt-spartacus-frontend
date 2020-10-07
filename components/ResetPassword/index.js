/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { Form, Alert } from 'antd';
import { useRouter } from 'next/router';
import ComponentStyles from './style/styles.module.css';
import { ResetPassword as ResetPasswordCall } from '../../pages/api/Routes/User';

export default function ResetPassword({ token }) {
  const [submit, updateSubmit] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const Router = useRouter();
  const layout = {
    labelCol: {
      span: 8,
    }
  };
  const onFinish = async values => {
    try {
      const data = { ...values, code: token };
      await ResetPasswordCall(data);
      updateSubmit(true);
      setTimeout(() => {
        Router.push('/');
      }, 5000);
    } catch (err) {
      const properErrorMessage = err.response && err.response.data && err.response.data.message;
      setErrorMessage(properErrorMessage ? err.response.data.message : 'unable to reset password right now!');
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
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
              name="passwordConfirmation"
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
              <button type="primary" htmltype="submit" className="button_lg_styled">
                Reset Password
              </button>
            </Form.Item>
          </Form>
          {error && <Alert showIcon type="error" message={errorMessage} />}

        </div>
        :
        <div
          className={ComponentStyles.submit_container}
        >
          <span className="typography_spartacus_sixteen">Success!</span>
          <span className="typography_spartacus_seventeen_bold">
            Your password has been updated!
          </span>
        </div>}
    </div>
  );
}
