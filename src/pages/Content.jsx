import React from 'react';

const Content = ({ text, details }) => {
  console.log('Content calling - ', text);
  return (
    <h3>
      {text} - {details}
    </h3>
  );
};

export default React.memo(Content);
