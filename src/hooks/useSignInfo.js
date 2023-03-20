/**
 * 작성자 : 박찬우
 * 목적 : Form 태그에서 유효성 검사와 변화를 감지하기 위해 설정
 * 작성 날짜 : 2023-03-18
 */

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
