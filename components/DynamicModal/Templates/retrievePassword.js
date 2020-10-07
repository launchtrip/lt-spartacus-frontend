/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { Form } from 'antd';
import { ForgotPassword } from '../../../pages/api/Routes/User';
import ComponentStyles from './styles.module.css';
import Error from './error';

export default function RetrievePassword({ setState, setNote, original, updateModal }) {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const layout = {
    labelCol: {
      span: 8,
    }
  };
  const onFinish = async values => {
    try {
      await ForgotPassword(values);
      setNote('Please check your inbox and  click on the link to reset your password');
      setState('note');
      setTimeout(() => {
        updateModal(false);
        setState(original);
      }, 3000);
    } catch (err) {
      setErrorMessage('unable to send password retrieval email at this time!');
      setError(true);
      setTimeout(() => { setError(undefined); }, 5000);
    }
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className={ComponentStyles.modal_base_container}>
      <div className={ComponentStyles.modal_container}>
        <span className="typography_spartacus_sixteen">Retrieve Account</span>
        <span
          className={`typography_spartacus_seven ${ComponentStyles.sign_up_container}`}
        >
          Enter your email and we will send you instructions to reset your password
        </span>
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
          <Form.Item className={ComponentStyles.button}>
            <button type="primary" htmltype="submit" className="button_lg_styled">
              Submit
            </button>
          </Form.Item>
        </Form>
        {error && <Error message={errorMessage} />}

      </div>
    </div>
  );
}
