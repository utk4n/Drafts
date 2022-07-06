
import FetchData from './components/FetchData';
// import ProfilePictures from './components/Card/SingleUserCard/ProfilePictures/ProfilePictures'
import style from './app.module.css'
import Navbar from './components/NavBar/Navbar';
import Header from './components/Header/Header';
export default function App() {

  return (
    <div className={style.app}>
      <Navbar />
      <div className={style.wrapper}>
        <Header />
        <FetchData />
      </div>
    </div>
  );
}


