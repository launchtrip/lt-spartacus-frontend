/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import React, { useState, useContext } from 'react';
import { Form, Alert } from 'antd';
import { useRouter } from 'next/router';
import ComponentStyles from './style/styles.module.css';
import Context from '../../providers/userContext';

export default function ChangePassword() {
  const [submit, updateSubmit] = useState(false);
  const [error, setError] = useState('');
  const { updatePassword } = useContext(Context);
  const Router = useRouter();

  const layout = {
    labelCol: {
      span: 8,
    }
  };
  const onFinish = async values => {
    try {
      await updatePassword(values.password);
      console.log('>>>>>');

      updateSubmit(true);
      setTimeout(() => {
        Router.push('/');
      }, 5000);
    } catch (err) {
      setError(err.message);
      setTimeout(() => {
        setError('');
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
          <span className="typography_spartacus_sixteen">Change Password</span>
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
              <button type="primary" htmltype="submit" className="button_lg_styled">
                Change Password
              </button>
            </Form.Item>
          </Form>
          {error && <Alert message={error} type="error" showIcon />}

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
