<h1 align="center">무엇이든 물어보살</h1>
<p align="center">익명 고민 상담 웹 커뮤니케이션 서비스</p>

## 프로젝트 소개

<img width="963" alt="image" src="https://github.com/SprintPart2Team10/openmind/assets/141597336/f4be09a1-7337-4cca-99ce-aa52a6b6b171">

배포 페이지 : https://openmind-jsw.vercel.app
## 개요
- "무엇이든 물어보살"이라는 방송 프로그램에서 아이디어를 착안해 각 분야의 전문가에게 고민을 상담받는 컨셉의 웹 서비스입니다.
- 원하는 전문가를 선택해 익명으로 상담을 받거나, 고민을 토로할 수 있습니다.

## 주요 기능 소개
- 고민을 상담해주는 전문가는 전문 분야를 선택한 후 닉네임을 입력하여 개인 페이지를 생성할 수 있습니다.
- 이후에는 페이지 생성 시 부여받은 번호를 입력하면 자신의 페이지에 들어갈 수 있습니다.
- 고민을 토로하러 온 사용자는 원하는 전문가를 선택해 익명으로 고민을 상담글을 남길 수 있습니다.
- 전문가를 선택하는 페이지에서는 최신순, 이름순으로 전문가의 목록을 볼 수 있고, 페이지네이션 기능을 제공합니다.
- 전문가는 남겨진 고민 상담글에 답변을 달 수 있고, 답변을 수정, 삭제, 모든 질문 리스트를 삭제하여 자신의 페이지를 초기화할 수도 있습니다.
- 질문 상담글들은 한번에 모든 글이 보이는 것이 아니라 3개씩 모이는 무한 스크롤 기능으로 구현하였습니다.
- 또한 원하는 전문가의 페이지의 링크를 공유할 수 있는 기능을 제공합니다.

## 기술적 성취
- 리액트를 사용하여, 공통적으로 쓰이는 코드를 효율적으로 작성할 수 있었습니다.
- css module을 사용하여 className의 충돌을 방지할 수 있었습니다.
- 웹, 모바일 등에서 불편함없이 사용할 수 있도록 반응형 웹 디자인으로 구현하였습니다.

## 기술 스택
### Language
<div>
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javscript&logoColor=black">
  <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
</div>

### CSS
<img src="https://img.shields.io/badge/css modules-000000?style=for-the-badge&logo=cssmodules&logoColor=white">

### Framework
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">

### Collabaration tool
<div>
  <img src="https://img.shields.io/badge/adobe photoshop-31A8FF?style=for-the-badge&logo=adobephotoshop&logoColor=white">
  <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white">
  <img src="https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white">
  <img src="https://img.shields.io/badge/trello-0052CC?style=for-the-badge&logo=trello&logoColor=white">
</div>

### Version control
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">

### Build Tool
<img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">

### Deployment
<img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">

## 페이지별 기능 소개
### home page
- 분야를 선택하고 (중복되지 않는) 닉네임을 입력하면 해당 닉네임만의 페이지가 생성됩니다.
- 이때 API의 아이디 값과 닉네임이 로컬스토리지에 저장되어, 다시 페이지에 접근할 때는 아이디를 입력하여 자신의 페이지에 접속할 수 있습니다.

![signup](https://github.com/SprintPart2Team10/openmind/assets/141597336/5d734a10-f56a-4634-830a-5288b03ca964)
![signin](https://github.com/SprintPart2Team10/openmind/assets/141597336/7867b42f-7833-4394-8267-1bafdaafe323)

---


### list page
- 고민을 털어놓으려고 방문한 사용자는 메인페이지에서 고민 털어놓기 버튼을 클릭해 리스트 페이지에 접근할 수 있습니다.
- 리스트 페이지에서는 등록된 상담가들의 목록을 볼 수 있습니다.
- 드롭박스를 이용해서 상담가들의 목록을 이름순, 최신순으로 정렬할 수 있습니다.
- 페이지네이션 기능을 구현하여 1페이지 단위로, 5페이지 단위로, 마지막 페이지로, 첫 페이지로 이동할 수 있습니다.
- 원하는 상담가의 카드를 클릭하면, 해당 상담가의 상담 페이지로 이동할 수 있습니다.

![listpage](https://github.com/SprintPart2Team10/openmind/assets/141597336/a428cc04-ed8b-491f-a2dd-6845c9954edc)

---


### post page
- 상담을 받고 싶은 상담가를 선택한 후, 질문 작성하기 버튼을 클릭하면 질문을 작성할 수 있는 모달이 나타납니다.
- 질문을 작성하면 질문 보내기 버튼이 활성화되고, 버튼을 누르면 질문이 등록됩니다.
- 답변이 완료된 질문에는 답변 완료 배지가 표시되고, 이전에는 미답변이 표시됩니다.
- 해당 질문이 현재 시점을 기준으로 언제 생성되었는지 표시됩니다.
- 다른 사람의 질문과 답변에 좋아요/싫어요 버튼을 누를 수 있고, 해당 상담가의 페이지를 공유할 수도 있습니다.
- 질문 리스트는 3개씩 무한 스크롤 기능으로 구현하였습니다.

![postpage](https://github.com/SprintPart2Team10/openmind/assets/141597336/ec979655-d0e5-4965-bd59-bd3756bfa190)

---


### answer page

- 상담가는 로그인을 하여 자신에 페이지에 들어오면, 총 몇 개의 질문이 달렸는지 확인 할 수 있습니다.
- 답변하고 싶지 않다면 케밥 버튼을 눌러 답변 거절 버튼을 누르면, 답변 거절로 표시됩니다.
- 케밥 버튼의 기능에는 답변거절, 삭제하기, 수정하기가 있습니다.
- 답변을 달기 전에는 답변거절, 삭제하기 기능만이 나타나고, 답변이 달린 질문에는 수정하기, 삭제하기 기능만이 나타나도록 구현하였습니다.
- 기본적으로 답변이 달리지 않은 질문에는 답변을 입력할 수 있는 창이 활성화되어 있고, 답변을 입력하고 답변 완료 버튼을 누르면 답변이 등록됩니다.
- 답변이 등록되면 미답변 상태의 배지가 답변 완료로 바뀌고, 현재를 기준으로 언제 답변이 생성되었는지 표시됩니다.
- 상단의 전체 삭제 버튼을 눌러 등록된 모든 질문과 답변을 삭제할 수 있습니다.

![answerpage](https://github.com/SprintPart2Team10/openmind/assets/141597336/b48cf118-c4c7-4a82-987b-9bdb72bb3754)

---


### 404 not found page
- 유저가 잘못된 도메인을 입력하는 등 잘못된 경로 등으로 없는 페이지에 접근할 경우, 홈페이지로 돌아갈 수 있도록 유도하는 페이지입니다.

![notfound](https://github.com/SprintPart2Team10/openmind/assets/141597336/cfa9b7fb-f59d-4392-a3cf-d9d1efedf89a)


## 프로젝트 내 기여도
- vercel 배포
- list 페이지 구현
- Dropdown, Button/Box 컴포넌트 구현
- post page 카카오톡/ 페이스북 공유하기 기능 구현
