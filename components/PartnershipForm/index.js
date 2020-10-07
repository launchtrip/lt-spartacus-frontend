/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { Form, Select, Alert } from 'antd';
import ComponentStyles from './style/styles.module.css';
import { BecomeAPartner } from '../../pages/api/Routes/Requests';

export default function PartnershipForm() {
  const [submit, updateSubmit] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { Option } = Select;

  const layout = {
    labelCol: {
      span: 8,
    }
  };

  const onFinish = async values => {
    try {
      setLoading(true);
      await BecomeAPartner(values);
      updateSubmit(true);
    } catch (err) {
      setLoading(false);
      setError('error trying to submit your parntership form');
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
                name="firstName"
                rules={[
                  {
                    required: true,
                    message: 'Please input your first name',
                  },
                ]}
              >
                <input
                  className={ComponentStyles.partnership_form_item}
                  placeholder="First Name"
                />
              </Form.Item>
              <Form.Item
                name="lastName"
                rules={[
                  {
                    required: true,
                    message: 'Please input your last name',
                  },
                ]}
              >
                <input
                  className={ComponentStyles.partnership_form_item}
                  placeholder="Last Name"
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
                  className={ComponentStyles.partnership_form_item}
                  placeholder="Title"
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
                name="eventName"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Company/Event name',
                  },
                ]}
              >
                <input
                  className={ComponentStyles.partnership_form_item}
                  placeholder="Company/Name of Event (s)"
                />
              </Form.Item>
              <Form.Item
                name="size"
                rules={[
                  {
                    required: true,
                    message: 'Please input the size of your event',
                  },
                ]}
              >
                <Select
                  placeholder="Size of Event(s)"
                  allowClear
                  className={ComponentStyles.partnership_form_item_select}
                >
                  <Option value="<1000"> {'<1000'} </Option>
                  <Option value="1001-5000">1001-5000</Option>
                  <Option value="5001-10000">5001-10000</Option>
                  <Option value="10,001 +">10,001 +</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="industry"
                rules={[
                  {
                    required: true,
                    message: 'Please input your industry',
                  },
                ]}
              >
                <input
                  className={ComponentStyles.partnership_form_item}
                  placeholder="Industry"
                />
              </Form.Item>
              <Form.Item
                name="yearBusiness"
                rules={[
                  {
                    required: true,
                    message: 'Please input your years in business',
                  },
                ]}
              >
                <input
                  className={ComponentStyles.partnership_form_item}
                  placeholder="Years in Business"
                />
              </Form.Item>
              <Form.Item
                name="virtual"
                rules={[
                  {
                    required: true,
                    message: 'Please specify if you have a virtual event',
                  },
                ]}
                className={ComponentStyles.partnership_form_item_base}
              >
                <Select
                  placeholder="Do You Have a Virtual Event"
                  allowClear
                  className={ComponentStyles.partnership_form_item_select}
                >
                  <Option value="true">Yes</Option>
                  <Option value="false">No</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="comments"
              >
                <textarea
                  placeholder="Comments or Questions"

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
            <span className="typography_spartacus_sixteen">Add Your Event</span>
            <span className={`typography_spartacus_seven ${ComponentStyles.copy}`}>
              We are building a media platform to showcase the world’s industry leading events. If you see your event on our platform,
              fill out the contact form below and a member from our sales team will be in touch.
            </span>
            <span className={`${ComponentStyles.sub_heading} typography_spartacus_sixteen`}>With Unify we focus on:</span>
            <ul className={`typography_spartacus_one_bold ${ComponentStyles.list}`}>
              <li>Increasing brand awareness to reach a global audience</li>
              <li>Increasing registration and sponsorships</li>
              <li>Showcasing both virtual and hybrid events to the corporate event community</li>
            </ul>
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
