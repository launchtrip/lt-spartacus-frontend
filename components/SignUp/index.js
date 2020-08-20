/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { Form, Select, Checkbox } from 'antd';
import ComponentStyles from './style/styles.module.css';

export default function SignUp() {
  const [submit, updateSubmit] = useState(false);
  const { Option } = Select;

  const layout = {
    labelCol: {
      span: 8,
    }
  };

  const onFinish = values => {
    updateSubmit(true);
    console.log('Success:', values);
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
                className={ComponentStyles.signUp_form_item_base}
              >
                <Select
                  placeholder="Industry"
                  allowClear
                  className={ComponentStyles.signUp_form_item_select}
                >
                  <Option value="Tech">Tech</Option>
                  <Option value="Medical">Medical</Option>
                  <Option value="Music">Music</Option>
                </Select>
              </Form.Item>

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
              <Form.Item valuePropName="checked">
                <Checkbox>Send me emails about news and discounts</Checkbox>
              </Form.Item>

              <Form.Item className={ComponentStyles.button}>
                <button type="primary" htmlType="submit" className="button_lg_styled">
                  Submit
                </button>
              </Form.Item>

            </Form>
          </section>
          <section className={ComponentStyles.section_two}>
            <span className="typography_spartacus_eighteen_bold">Member Perks Coming Soon</span>
            <ul className={`typography_spartacus_one_bold ${ComponentStyles.list}`}>
              <li>Discount Tickets</li>
              <li>Sales Events</li>
              <li>Import Notifications and More!</li>
            </ul>
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
