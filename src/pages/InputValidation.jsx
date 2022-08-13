import React from 'react';

const InputValidation = () => {
  const textValidation = (e) => {
    let data = e.target.value;
    console.log('num', data, data.match('^[0-9]+$'));
    if (!data.match('^[0-9]+$')) {
      alert('Please enter number!');
      return '';
    }
  };

  return <input onChange={(e) => textValidation(e)}></input>;
};

export default InputValidation;
