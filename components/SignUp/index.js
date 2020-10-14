/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { Form, Checkbox, Alert } from 'antd';
import ComponentStyles from './style/styles.module.css';
import { SignUp as SignUpUser } from '../../pages/api/Routes/User';

export default function SignUp() {
  const [submit, updateSubmit] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const layout = {
    labelCol: {
      span: 8,
    }
  };

  const onFinish = async values => {
    setLoading(true);
    const name = `${values.name}-${values.email}`;
    const data = { ...values, username: name };
    delete data.name;
    delete data.confirm;
    if (!values.newsOptIn) {
      data.newsOptIn = false;
    }
    try {
      await SignUpUser(data);
      updateSubmit(true);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      const properErrorMessage = err.response && err.response.data && err.response.data.message;
      setError(properErrorMessage ? err.response.data.message : 'error trying to sign you up');
      setTimeout(() => {
        setError('');
      }, 5000);
    }
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (

    <div className={ComponentStyles.signUp_container}>
      {!submit ?
        <div className={ComponentStyles.signUp_inner_container}>

          <section className={ComponentStyles.signUp_header_container}>
            <span className="typography_spartacus_sixteen">Become A Member to Access Perks!</span>
          </section>
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
                  className={ComponentStyles.signUp_form_item}
                  placeholder="Name"
                />
              </Form.Item>
              <Form.Item
                name="company"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Company/Event name',
                  },
                ]}
              >
                <input
                  className={ComponentStyles.signUp_form_item}
                  placeholder="Company/Name of Event (s)"
                />
              </Form.Item>
              <Form.Item
                name="title"
                rules={[
                  {
                    required: true,
                    message: 'Please input your title',
                  },
                ]}
              >
                <input
                  className={ComponentStyles.signUp_form_item}
                  placeholder="Title"
                />
              </Form.Item>
              <Form.Item
                name="industry"
                rules={[
                  {
                    required: true,
                    message: 'Please select an Industry',
                  },
                ]}
              >
                <input
                  className={ComponentStyles.signUp_form_item}
                  placeholder="Industry"
                />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Email',
                  },
                  {
                    type: 'email',
                    message: 'Please input a valid email',
                  }
                ]}
              >
                <input
                  className={ComponentStyles.signUp_form_item}
                  placeholder="Email"
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
                  className={ComponentStyles.signUp_form_item}
                  type="password"
                  placeholder="Password"

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
                  className={ComponentStyles.signUp_form_item}
                  type="password"
                  placeholder="Re-enter Password"

                />
              </Form.Item>
              <Form.Item valuePropName="checked" name="newsOptIn">
                <Checkbox>Send me emails about news and discounts</Checkbox>
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
            <span className="typography_spartacus_eighteen_bold">Member Perks Coming Soon</span>
            <ul className={`typography_spartacus_one_bold ${ComponentStyles.list}`}>
              <li>Discounted Tickets</li>
              <li>Access to Industry-leading Events and Updates</li>
              <li>Exclusive Access and More</li>
            </ul>
            {error && <Alert message={error} type="error" showIcon />}
          </section>

        </div>
        :
        <div
          className={ComponentStyles.submit_container}
        >
          <span className="typography_spartacus_sixteen">
            Thanks you for signing up!
            <br />
            You&apos;re almost there.
          </span>
          <span className="typography_spartacus_seventeen_bold">
            Please check your inbox and verify your email address.
          </span>
        </div>}

    </div>

  );
}
