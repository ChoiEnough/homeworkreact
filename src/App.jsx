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
          href="https://microphone-rho.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          마이크🎤
        </a>
        <a
          className="link-button"
          href="https://trend-choienoughs-projects.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          트렌드😎
        </a>
        <a
          className="link-button"
          href="https://bear-iota-teal.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          곰도리🐻‍❄️
        </a>
        <a
          className="link-button"
          href="https://travel-mauve-zeta.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          여행🧳
        </a>
        <a
          className="link-button"
          href="https://homework2-kappa.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          사과🍎
        </a>
        <a
          className="link-button"
          href="https://homework-rosy.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          지원서📙
        </a>
        <a
          className="link-button"
          href="homework/cat.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          고양이😺
        </a>
        <a
          className="link-button"
          href="homework/background.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          배경색🖐️
        </a>

      </div>
    </div>
  );
}

export default App;
