import './App.css';
import ProfileCard from './components/ProfileCard';
import profileImg from './assets/images/zi-a.png';

function App() {
  return (
    <div className="main-container">
      <h1 className="title">정지아의 리액트 포트폴리오 ✨</h1>

      <ProfileCard
        image={profileImg}
        name="정지아"
        description="신소재를 사랑하는 개발자입니다. React와 Node를 활용한 풀스택 프로젝트에 열정을 가지고 있으며, 교육과 실습을 함께합니다."
      />

      <div className="link-area">
        <a
          className="link-button"
          href="https://chapter3-react1.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          📘 CHAPTER 3 - 기초
        </a>
        <a
          className="link-button"
          href="https://chapter3-react2.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          📙 CHAPTER 3 게시판 CRUD
        </a>
        <a
          className="link-button"
          href="https://chapter3-react3.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          📗 CHAPTER 3 게시판 + MySQL
        </a>
      </div>
    </div>
  );
}

export default App;
