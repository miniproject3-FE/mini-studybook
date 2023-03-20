/**
 * 작성자: 김은영
 * 목적: 프로젝트 내에서 공통적으로 쓰이는 custom hook 생성
 * 작성 날짜 : 2023-03-18
 *
 * 수정: 리렌더링 문제로 useRef로 사용하기로 합의
 * 목적: input에 대한 Custom hooks, useRef를 이용해 렌더링을 하지않고 데이터만 저장
 * 작성자: 박찬우
 * 작성 날짜: 2023-03-18
 * @returns
 */

import React, { useState } from 'react';

function useInput() {
  const [value, setValue] = useState('');

  const handler = (e) => {
    setValue(e.target.value);
  };

  const changeHandler = (change) => {
    setValue(change);
  };

  return [value, handler, changeHandler];
}

export default useInput;
