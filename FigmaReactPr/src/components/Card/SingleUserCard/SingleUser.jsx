import UserStartDate from "../UserStartDate";
import ProfilePictures from '../SingleUserCard/ProfilePictures/ProfilePictures'
import ProgressBar from '../SingleUserCard/ProgressBar/ProgressBar'
import ProgressPercentage from '../SingleUserCard/ProgressBar/ProgressPercentage'
import Status from '../SingleUserCard/Status/Status'
import CardTitle from "./CardTitle/CardTitle";
import TaskAndUsersCount from './TaskAndUsersCount/TaskAndUsersCount'


import style from '../SingleUserCard/single_user.module.css'
import img3Dots from '../SingleUserCard/img/3dots.svg'

const SingleUser = () => {


    return (
        <div className={style.single_user}>
            <div className={style.card_top}>
                <CardTitle />
                <div className={style.card_top_right_icons}>
                    <img src={img3Dots}></img>
                </div>
            </div>
            <div className={style.status}>
                <UserStartDate />
                <Status />
                <TaskAndUsersCount users="4" tasks="14" />
            </div>
            <ProfilePictures />
            <ProgressPercentage />
            <ProgressBar />
        </div>
    )
}

export default SingleUser;