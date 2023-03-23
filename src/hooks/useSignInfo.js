import React, { useState } from 'react';

function useSignInfo() {
  const [valueInfo, setvalue] = useState({ value: '', isError: true, error: '' });

  const valHandler = (e) => {
    const { value } = e.target;
    setvalue({ ...valueInfo, value });
  };

  const errorHandler = (item) => {
    const fristItem = item[0];
    const secondItem = item[1];
    setvalue({ ...valueInfo, isError: fristItem, error: secondItem });
  };

  return [valueInfo, valHandler, errorHandler];
}
export default useSignInfo;
