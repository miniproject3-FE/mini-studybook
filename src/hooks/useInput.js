/**
 * 작성자 : 박찬우
 * 목적 : input에 대한 Custom hooks, useRef를 이용해 렌더링을 하지않고 데이터만 저장
 * 작성 날짜 : 2023-03-18
 */

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
