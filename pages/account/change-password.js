import React from 'react';
import { BaseContainer, ChangePassword } from '../../components';
import { Provider } from '../../providers/userContext';

export default function ChangePasswordPage() {
  return (
    <BaseContainer page="Change Password">
      <Provider>
        <ChangePassword />
      </Provider>
    </BaseContainer>
  );
}
