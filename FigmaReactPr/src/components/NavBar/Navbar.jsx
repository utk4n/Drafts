import Logout from './Logout'

import style from '../NavBar/navbar.module.css'
import dashboard from './img/dashboard.svg'
import members from './img/members.svg'
import modules from './img/modules.svg'
import projects from './img/projects.svg'
import sprint from './img/sprint.svg'
import report from './img/report.svg'
import collapse from './img/collapse.svg'

const Navbar = () => {
    return (
        <nav>
            <div className={style.navlinks_wrapper}>
                <div className={style.logo}>
                    <div className="logo">ChirKuut</div>
                    <img className={style.collapse} src={collapse} />
                </div>
                <a href='#' ><img src={dashboard}></img>Dashboard</a>
                <a href='#' className={style.active}><img src={projects}></img>Projects</a>
                <a href='#'><img src={modules}></img>Modules</a>
                <a href='#'><img src={sprint}></img>Sprint</a>
                <a href='#'><img src={members}></img>Members</a>
                <a href='#'><img src={report}></img>Reports</a>
            </div>
            <Logout />
        </nav>
    )
}

export default Navbar;