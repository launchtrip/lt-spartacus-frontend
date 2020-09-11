import React from 'react';

export default function Error({ error }) {
  function renderError(type) {
    switch (type) {
      case 400:
        return <div>400 Error</div>;
      default:
        return <p>500 error</p>;
    }
  }
  return (
    <div>
      {renderError(error)}
    </div>
  );
}
