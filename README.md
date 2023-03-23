# mini project team 3

# 프로젝트 소개

## 🖥️ Front-end

[GitHub](https://github.com/orgs/miniproject3-FE/repositories)

## 🖥️ Back-end

[GitHub](https://github.com/JinguLeee/studybook)

---

## 주요 기능

1. 로그인 / 회원 가입

- 회원가입 시, 유효성 검사를 진행
- 로그인 시, 토큰을 받아와 쿠키에 저장

2. CRUD 기능 구현

3. 좋아요 기능 구현

4. Drap & Drop 기능 구현

---

## WildFrame

![wildframe](https://user-images.githubusercontent.com/124577334/227242151-710274c4-8842-48b5-b970-5dc88d9d0183.png)
![wildframe2](https://user-images.githubusercontent.com/124577334/227242160-2b9545a7-8cf6-4c4b-8b20-d08063af4bc2.png)

---

## 일정 계획

## <img width="1541" alt="check" src="https://user-images.githubusercontent.com/124577334/227242042-96300deb-49a1-4cc9-bd1f-6b6ed4d19e7a.png">

## ERD

<img width="834" alt="ERD" src="https://user-images.githubusercontent.com/124577334/227241522-f2d05fc1-5cd3-4323-bfc4-87aedaf9d821.png">

---

## API 명세서

<img width="1122" alt="API1" src="https://user-images.githubusercontent.com/124577334/227241625-f07b017b-38ba-4b81-bcfa-9b61fb2136b5.png">

<img width="1108" alt="API2" src="https://user-images.githubusercontent.com/124577334/227241700-4f8a3ad2-8015-4eb4-91a3-f73264d19ce7.png">
<img width="1134" alt="API3" src="https://user-images.githubusercontent.com/124577334/227241765-23526877-4893-4448-83e3-2dd983263a87.png">

--

## 기술 스택

  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">

 <img src="https://img.shields.io/badge/redux tookit-764ABC?style=for-the-badge&logo=REDUX&logoColor=white">

 <img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white">

 <img src="https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">

  <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">

## <img src="https://img.shields.io/badge/amazon s3-569A31?style=for-the-badge&logo=amazon s3&logoColor=white">

---

## Troble Shooting

1. json-server로 테스트 시 생긴 에러

   <span style= 'color: red'>500 Internal Server Error</span>

   json-server로 테스트 시 db.json에 “id”를 필수로 넣어줘야 하는데, 이를 지키지 않아서 발생한 오류.

![image](https://user-images.githubusercontent.com/124577334/227239148-f5aa6c2f-cfcb-4502-8c39-2abc43936cef.png)

2. Axios 콜 후 reject될 때 받아온 error를 rejectWithValue에 payload로 넘겨주는 과정에서 발생한 에러

![image](https://user-images.githubusercontent.com/124577334/227239253-a8bb3228-219e-4286-816a-a4cd60fa31bc.png)

<span style= 'color: red'>A non-serializable value</span>

error에 담긴 데이터가 많기 때문에, error자체를 넘겨줄 때 필요한 정보를 선택하여 넘겨주어야 한다.

3. 렌더링 문제

   logout, signout, 좋아요를 눌렀을 때 페이지에 리렌더링이 되지 않는 경우가 여러번 발생했다. 그 중 몇가지 경우를 기록해보았다.

![image](https://user-images.githubusercontent.com/124577334/227239372-2446006e-659a-4175-817f-a9ed03fad7ce.png)

- 아래의 경우 : 화면에 그려줄 정보를 받아오면서 동시에 화면이 리렌더링되도록
  Boards 컴포넌트에서 dispatch를 useEffect의 의존성 배열에 넣어서 이를 해결하고자 했다.

![image](https://user-images.githubusercontent.com/124577334/227239467-62c136b4-219b-4207-8cde-a9c8c08fee57.png)

- 아래의 경우 : 수정하기 페이지에서 버튼을 눌렀을 때 클라이언트단에서 리렌더링이 일어나지 않았다.
  수정하기 버튼을 눌렀을 시 서버에 데이터를 전송하여 변경 하므로,
  변경한 제목과 내용을 의존성 배열에 담아서 useSelector가 store에서 불러온 data에 변화가 있을 때
  리렌더링 되도록 하였다.

![image](https://user-images.githubusercontent.com/124577334/227239769-62f4631f-3e3c-458b-a376-7d65a20aace8.png)

4. react cookie → universal cookie

- 1.  로그인 시에 받은 token값을 저장해 두었다가, request head에 담아 서버에 보내주기 위해 react cookie를 사용하기로 했다.
- 2.  대부분의 페이지에서 서버에 토큰 값을 보내주어야 했기 때문에, instance interceptor를 통해 서버와 통신 전에 항상 토큰을 보내주도록 하려고 의도하였다. 그러나 의도대로 되지 않았다.
- 3. react-cookie의 경우 useCookie라는 hook으로 관리를 하며, useCookie를 사용하기 위해서는 Provider로 사용 범위를 지정해주어야 했다. 이로인해 오류가 발생한 것으로 추측하고 있다.
