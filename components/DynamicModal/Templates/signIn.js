/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { Form } from 'antd';
import Link from 'next/link';
import ComponentStyles from './styles.module.css';
import firebaseClient from '../../../services/firebaseClient';
import Error from './error';

export default function SignIn({ setState, updateModal }) {
  const [error, setError] = useState('');
  const layout = {
    labelCol: {
      span: 8,
    }
  };
  const onFinish = async values => {
    try {
      await firebaseClient.auth().signInWithEmailAndPassword(values.email, values.password);
      firebaseClient.auth().onAuthStateChanged(async user => {
        if (user) {
          updateModal(false);
        }
      });
    } catch (err) {
      setError(err.message ? err.message : 'unable to sign you in at this time');
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
        <span className="typography_spartacus_sixteen">Sign In</span>
        <span
          className={`typography_spartacus_seven ${ComponentStyles.sign_up_container}`}
        >
          <Link href="/sign-up">
            <span className={ComponentStyles.sign_up_prompt}>
              Sign Up Here
            </span>
          </Link> for free if you dont have an account!
        </span>
        {error && <Error message={error} />}
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
                message: 'Please input your Email',
              },
            ]}
          >
            <input
              className={ComponentStyles.form_item}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password',
              },
            ]}
          >
            <input
              className={ComponentStyles.form_item}
              placeholder="Password"
              type="password"
            />
          </Form.Item>
          <Form.Item className={ComponentStyles.button}>
            <button type="primary" htmltype="submit" className="button_lg_styled">
              Sign In
            </button>
          </Form.Item>
        </Form>
        <span
          onClick={() => setState('retrieve')}
          className={`${ComponentStyles.reset_prompt} typography_spartacus_fifteen`}
        >Can&apos;t access your account?
        </span>
      </div>
    </div>
  );
}
