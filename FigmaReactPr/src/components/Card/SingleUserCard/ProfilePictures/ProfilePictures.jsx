import style from '../ProfilePictures/profile_pictures.module.css'
const ProfilePictures = () => {
    const pic = [{
        pic: "https://randomuser.me/api/portraits/med/women/58.jpg"
    },
    {
        pic: "https://randomuser.me/api/portraits/med/men/62.jpg"
    },
    {
        pic: "https://randomuser.me/api/portraits/med/women/86.jpg"
    }, {
        pic: "https://randomuser.me/api/portraits/med/women/93.jpg"
    },
    {
        pic: "https://svgshare.com/i/ip9.svg"
    }]

    return (
        <div className={style.profile_pictures}>
            <h4>Members</h4>
            {pic.map((el, index) => <img className={style.pp} key={index} src={el.pic}></img>)}
        </div>
    )
}

export default ProfilePictures;