<img width="963" alt="image" src="https://github.com/SprintPart2Team10/openmind/assets/141597336/f4be09a1-7337-4cca-99ce-aa52a6b6b171">

## 프로젝트 소개

> Project-Title : 무엇이든 물어보살  
> Project-Period : 2023-12-11 ~ 2023-12-23  
> Team : Codeit-Sprint-2-Part2-Team10(김근아,지현기,임우진,정성원,황채연)  
> "무엇이든 물어보살"이라는 방송 프로그램에서 아이디어를 착안해 각 분야의 전문가에게 고민을 상담받는 컨셉의 웹 서비스  

## 주요 기능 소개
- 고민을 상담해주는 전문가는 전문 분야를 선택한 후 닉네임을 입력하여 개인 페이지를 생성할 수 있습니다.
- 사용자는 원하는 전문가를 선택해 익명으로 고민을 상담글을 남길 수 있습니다.
- 전문가는 남겨진 고민 상담글에 답변을 달 수 있고, 답변을 수정, 삭제하여 자신의 페이지를 관리할 수 있습니다.

## 기술 스택
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"> <img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">

## 담당 제작 기능
- post page 개발 (전문가의 상담내역을 확인하는 페이지)
    - 카카오톡 메시지API를 활용하여 카카오톡 공유하기 기능 구현
- list page 개발 (전문가들의 리스트를 확인하는 페이지)
    - API 통신을 통해 전문가 리스트 불러오기
    - 각 페이지번호로 이동 가능한 페이지네이션 기능 구현
    - 전문가 리스트를 최신순과 이름순으로 정렬하는 드롭다운 버튼 구현
- vercel 배포
 
  ![listpage](https://github.com/SprintPart2Team10/openmind/assets/141597336/a428cc04-ed8b-491f-a2dd-6845c9954edc)

## 트러블 슈팅
<img width="563" alt="image" src="https://github.com/jeongseongwon94/openmind/assets/148832721/035a05c8-dd51-4239-956b-3aafd7f0eb69">

- vercel로 배포된 사이트에서 새로고침 시 404 에러 발생
    - 랜딩페이지로 접근하면 새로고침을 해도 에러가 발생하지않는데, pathname이 추가된 페이지에서 새로고침을하면 404 Not found 에러가 발생
    - vite는 기본적으로 정적 웹페이지를 생성하지 않고, vercel은 정적 웹사이트를 위한 서비스인데, vite를 사용하여 빌드한 SPA(single page application)를 배포하게 되면 클라이언트상에서 라우팅 처리를 할 수 없기 때문에 에러가 발생한다. 이를 해결하려면 모든 경로를 index.html로 리다이렉트하는 설정이 필요하다.
        
        ```jsx
        {
          "rewrites": [{ "source": "/(.*)", "destination": "/" }]
        }
        ```
        
        루트 폴더에 vercel.json파일을 생성하여 위 코드를 작성하면 vercel이 index.html 파일을 제공하고, 클라이언트 측 JavaScript 코드에서 적절한 라우팅을 처리할 수 있게 된다.

## 배포 링크
- [LINK](https://openmind-jsw.vercel.app)
