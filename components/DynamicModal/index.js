import React, { useState } from 'react';
import { Modal } from 'antd';
import {
  SignIn,
  RetrievePassword,
  Note,
  RequestTickets,
  Sponsor
} from './Templates';

export default function DynamicModal({ updateModal, modal, type, width, event }) {
  const [state, setState] = useState(type);
  const [note, setNote] = useState('');

  const handleCancel = () => {
    updateModal(false);
    setTimeout(() => {
      setState(type);
    }, 1000);
  };
  const renderBody = (txt) => {
    const templates = {
      signIn: <SignIn setState={setState} updateModal={updateModal} />,
      retrieve: <RetrievePassword
        setState={setState}
        setNote={setNote}
        original={type}
        updateModal={updateModal}
      />,
      note: <Note note={note} />,
      request: <RequestTickets
        updateModal={updateModal}
        setState={setState}
        setNote={setNote}
        original={type}
        event={event}
      />,
      sponsor: <Sponsor
        updateModal={updateModal}
        setState={setState}
        setNote={setNote}
        original={type}
        event={event}
      />
    };
    return templates[txt];
  };
  return (
    <Modal
      visible={modal}
      onCancel={handleCancel}
      footer={null}
      width={width}

    >
      {renderBody(state)}
    </Modal>

  );
}
