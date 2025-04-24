import './App.css';
import ProfileCard from './components/ProfileCard';
import profileImg from './assets/images/profile.jpg';

function App() {
  return (
    <div className="main-container">
      <h1 className="title">최인호의 리액트 ✨</h1>

      <ProfileCard
        image={profileImg}
        name="최인호"
        description=""
      />
    
      <div className="link-area">
        <a
          className="link-button"
          href="/homework/microphone.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          마이크🎤
        </a>
        <a
          className="link-button"
          href="\homework\trend.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          트렌드😎
        </a>
        <a
          className="link-button"
          href="\homework\bear.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          곰도리🐻‍❄️
        </a>
        <a
          className="link-button"
          href="\homework\travel.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          여행🧳
        </a>
        <a
          className="link-button"
          href="\homework\apple.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          사과🍎
        </a>
        <a 
          className="link-button"
          href="\homework\resume.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          지원서📙
        </a>
        <a
          className="link-button"
          href="/homework/cat.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          고양이😺
        </a>
        <a
          className="link-button"
          href="\homework\grid1.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          배경색
        </a>
        <a
          className="link-button"
          href="\homework\background.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          그리드1
        </a>
        <a
          className="link-button"
          href="\homework\grid2.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          그리드2
        </a>
        
        

      </div>
    </div>
  );
}

export default App;
