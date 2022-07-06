import HeaderFiltered from './HeaderFilteredButtons'


import style from '../Header/header.module.css'
import message from '../Header/img/message.svg'
import notification from '../Header/img/notification.svg'
import settings from '../Header/img/settings.svg'
import profil from '../Header/img/profil.svg'
const Header = () => {
    return (<header>
        <div className={style.top_of_header}>
            <h3>Projects</h3>
            <input type="text" placeholder='Search' onChange={(e) => console.log(e.target.value)} />
            <div className={style.personal_side}>
                <img src={message} alt="" />
                <img src={notification} alt="" />
                <img src={settings} alt="" />
            </div>
            <div className={style.personal_information}>
        <img src={profil}/>
        <div className={style.name_email}>
            <div className={style.name}>Asfak Mahmud</div>
            <div className={style.email}>asfakmahmudbd@gmaill.com</div>
        </div>
            </div>
        </div>

        <HeaderFiltered />
    </header>)
}

export default Header;