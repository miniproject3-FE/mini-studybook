/**
 * 작성자: 김은영
 * 목적: Main page 구축. Header와 Posts로 구성
 * 날짜: 2023-03-21
 */

import React from 'react'
import Header from '../../components/Header'
import Posts from '../../components/Posts'


function Main() {

  return (
    <>
      <Header />
      <Posts />
    </>
  )
}

export default Main