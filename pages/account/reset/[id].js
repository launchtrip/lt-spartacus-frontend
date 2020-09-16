import React from 'react';
import { BaseContainer, ResetPassword } from '../../../components';

export default function ResetPasswordPage({ jwt }) {
  return (
    <BaseContainer page="Reset Password">
      <ResetPassword token={jwt} />
    </BaseContainer>
  );
}

export const getServerSideProps = async ({ query }) => ({
  props: {
    jwt: query.id
  },
});
