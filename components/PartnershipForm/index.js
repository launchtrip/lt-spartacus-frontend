/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { Form, Select } from 'antd';
import ComponentStyles from './style/styles.module.css';

export default function PartnershipForm() {
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
                name="company"
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
                    message: 'Please select an Industry',
                  },
                ]}
                className={ComponentStyles.partnership_form_item_base}
              >
                <Select
                  placeholder="Industry"
                  allowClear
                  className={ComponentStyles.partnership_form_item_select}
                >
                  <Option value="Tech">Tech</Option>
                  <Option value="Medical">Medical</Option>
                  <Option value="Music">Music</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="years"
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
                name="virtualEvent"
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
                  <Option value="Yes">Yes</Option>
                  <Option value="No">No</Option>
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
                <button type="primary" htmlType="submit" className="button_lg_styled">
                  Submit
                </button>
              </Form.Item>
            </Form>
          </section>
          <section className={ComponentStyles.section_two}>
            <span className="typography_spartacus_sixteen">Add Your Event</span>
            <span className={`typography_spartacus_seven ${ComponentStyles.copy}`}>
              We can help your event. We are really cool and awesome and it will
              be super beneficial for your event to be listed on our website bla bla
              bla some more reasons we like cake
            </span>
            <ul className={`typography_spartacus_one_bold ${ComponentStyles.list}`}>
              <li>Sponsor Inquiries</li>
              <li>Access Tons of Attendees</li>
              <li>Include Banner Ads and More!</li>
            </ul>
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
