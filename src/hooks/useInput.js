import React, { useState } from 'react';

function useInput() {
  const [value, setvalue] = useState('');

  const handler = (e) => {
    const { value } = e.target;
    setvalue(value);
  };

  const changeHandler = (change) => {
    setvalue(change);
  };

  return [value, handler, changeHandler];
}
export default useInput;
