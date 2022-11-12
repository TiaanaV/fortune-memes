import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import MainContent from './Components/MainContent/MainContent';
import WeatherBar from './Components/WeatherBar/WeatherBar';
import style from './App.module.css'

function App(props) {

  return (
    <div className={style.gradientBackground}>
      <div className={style.appWrapper}>
        <Header />
        <WeatherBar />
        <MainContent memes={props.memesSection.memes} getRandomMeme={props.getRandomMeme} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
