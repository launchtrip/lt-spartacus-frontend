/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { Form, Select } from 'antd';
import ComponentStyles from './styles.module.css';
import { RequestDiscountTickets } from '../../../pages/api/Routes/Requests';
import Error from './error';

export default function RequestTickets({ setState, setNote, original, updateModal }) {
  const [error, setError] = useState('');
  const layout = {
    labelCol: {
      span: 8,
    }
  };
  const onFinish = async values => {
    try {
      await RequestDiscountTickets(values);
      setNote('Thank you for contacting us. We will get in touch with you shortly');
      setState('note');
      setTimeout(() => {
        updateModal(false);
        setState(original);
      }, 3000);
    } catch (err) {
      setError('Error');
      setTimeout(() => {
        setError('');
      }, 5000);
    }
    console.log('Success:', values);
  };
  const { Option } = Select;

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className={ComponentStyles.modal_base_container}>
      <div className={ComponentStyles.modal_container}>
        <span className="typography_spartacus_sixteen">Request Discount Tickets</span>
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
            name="name"
          >
            <input
              className={ComponentStyles.form_item}
              placeholder="Name"
            />
          </Form.Item>
          <Form.Item
            name="company"
          >
            <input
              className={ComponentStyles.form_item}
              placeholder="Company"
            />
          </Form.Item>
          <Form.Item
            name="email"
          >
            <input
              className={ComponentStyles.form_item}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="quantity"
          >
            <Select
              placeholder="Number of Tickets"
              allowClear
              className={ComponentStyles.form_item_select}
            >
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
            </Select>
          </Form.Item>

          <Form.Item className={ComponentStyles.button}>
            <button type="primary" htmltype="submit" className="button_lg_styled">
              Request Discount
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
