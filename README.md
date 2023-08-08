# 원티드 프리온보딩 백엔드 사전 과제

## 1. 지원자 이름: 김경우

## 2. 애플리케이션의 실행 방법 (엔드포인트 호출 방법 포함)
1. 이 리포지토리를 클론 받습니다.
```bash
git clone https://github.com/Sir-Rain/wanted-pre-onboarding-backend.git
```

2. 서버 실행에 필요한 패키지를 설치합니다.
```bash
npm i
```

3. 서버 실행에 필요한 정보를 config/prod.json에 작성합니다.
```json
{
    "port": "", // API 서버 실행 포트
    "secretKey": "", // JWT TOKEN 사용에 필요한 비밀키
    "database": {
        "schema": "", // 사용 할 DB 스키마
        "host": "", // MYSQL 서버 호스트명
        "port": "", // MYSQL 서버 포트
        "username": "", // 사용 할 MYSQL 서버 유저명
        "password": "" // 사용 할 MYSQL 서버 유저 비밀번호 
    }
}
```

4. 서버를 실행합니다.
```bash
npm start
```

## 3. 데이터베이스 테이블 구조
  
<img width="467" alt="image" src="https://github.com/Sir-Rain/wanted-pre-onboarding-backend/assets/103017201/6d6569a3-d376-4cfb-ad0c-e32de7eb04a7">

1. User 테이블
- id: 테이블 기본키
- email: 유저 ID로 사용할 이메일
- password: 로그인에 사용할 비밀번호

2. Article 테이블
- id: 테이블 기본키
- title: 글 제목
- content: 글 내용

## 4. 구현한 API의 동작을 촬영한 데모 영상 링크

## 5. 구현 방법 및 이유에 대한 간략한 설명

## 6. API 명세(request/response 포함)
### 1. 사용자
#### 1) 회원가입

**Request**
<br>
POST /auth/signup

```text
Request Body:
  email: string
  password: string
```

<br>

**Response**
<br>
```
StatusCode:
- 성공 시: 201
- 실패 시: 400, 409

Response Body:
  message: string
  userId: number
```

<br>

#### 2) 로그인
**Request**
<br>
POST /auth/login

```
Request Body:
  email: string
  password: string
```

**Response**
<br>

```text
StatusCode:
- 성공 시: 200
- 실패 시: 400, 401

Response Body:
  message: string
```



---
### 2. 게시글

#### 1) 새로운 게시글 생성
**Request**
<br>
POST /post

```text
Request Body:
  title: string
  content: string
```

**Response**
```text
StatusCode:
- 성공 시: 201
- 실패 시: 400

Response Body:
  message: string
  postId: number
```

#### 2) 게시글 목록 조회
**Request**

GET /posts?page={ number }

**Response**
```text
StatusCode:
- 성공 시: 200
- 실패 시 : 400, 401

Response Body:
  message: string
  count: number
  posts: [
    {
      title: string,
      content: string
    } ... 
  ]
```

#### 3) 특정 게시글 조회
**Reqeust**

GET /post/:id

**Response**
```text
StatusCode:
- 성공 시: 200,
- 실패 시: 400, 404

Response Body:
  message: string
  post:
    title: string,
    content: string
```

#### 4) 특정 게시글 수정
**Request**

PUT /post/:id

**Response**
```text
StatusCode:
- 성공 시: 200,
- 실패 시: 400, 403, 404

Response Body:
  message: string
```

#### 5) 특정 게시글 삭제
**Request**

DELETE /post/:id

**Response**
```text
StatusCode:
- 성공 시: 200,
- 실패 시: 400, 403, 404

Response Body:
 message: string
```