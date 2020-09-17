/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Form, message } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import ComponentStyles from './style/styles.module.css';
import { AskAQuestion } from '../../pages/api/Routes/Requests';

export default function QuestionWidget({ type, id }) {
  const [loading, setLoading] = useState(false);
  const vertical = type === 'vertical';
  const main = vertical ? ComponentStyles.question_container : ComponentStyles.question_container_horizontal;
  const classType = vertical ? ComponentStyles.question_conatiner_vertical : ComponentStyles.question_conatiner_horizontal;
  const formClassType = vertical ? ComponentStyles.form_container : ComponentStyles.form_container_horizontal;
  const formItem = vertical ? ComponentStyles.form_item : ComponentStyles.form_item_horizontal;
  const layout = {
    labelCol: {
      span: 8,
    }
  };

  const onFinish = async (e) => {
    try {
      setLoading(true);
      const data = { ...e };
      data.event = id;
      await AskAQuestion(data);
      message.success('Your question has been submitted!');
      setLoading(false);
    } catch (error) {
      message.error('Unable to submit message!');
      setLoading(false);
    }
  };

  return (
    <div className={main}>
      <span className="typography_spartacus_eight">Have A Question?</span>
      <div className={classType}>
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          className={formClassType}
          onFinish={onFinish}
        >
          {vertical &&
            <Form.Item
              className={ComponentStyles.form_row}
              name="name"
            >
              <input
                className={formItem}
                placeholder="Name"
              />
            </Form.Item>}
          {vertical &&
            <Form.Item
              className={ComponentStyles.form_row}
              name="email"
            >
              <input
                className={formItem}
                placeholder="Email"
              />
            </Form.Item>}
          {!vertical &&
            <div>
              <Form.Item
                className={ComponentStyles.form_row_horz}
                name="name"
              >
                <input
                  className={formItem}
                  placeholder="Name"
                />
              </Form.Item>
              <Form.Item
                className={ComponentStyles.form_row_horz}
                name="email"
              >
                <input
                  className={formItem}
                  placeholder="Email"
                />
              </Form.Item>

            </div>}
          <Form.Item
            className={ComponentStyles.form_row_textarea}
            name="message"
          >
            <textarea
              placeholder="Your Question or Message"

              className={ComponentStyles.form_item_text}
            />
          </Form.Item>

          <Form.Item className={ComponentStyles.button}>
            <button
              disabled={loading}
              type="primary"
              htmltype="submit"
              className={vertical ? 'button_lg_styled' : 'button_lg_styled_filled'}
            >
              {loading ? <LoadingOutlined /> : 'Submit'}
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
