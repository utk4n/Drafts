import style from '../Card/start_date.module.css'

const UserStartDate = () => {
    const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    
    return(
        <div className={style.start_date}>
            <p style={{fontSize :"12px", color:"rgba(113, 121, 134, 1)",marginTop:"5px"}}>Start date</p>
            <p style={{fontWeight:"700", fontSize:"13px", color:"rgba(113, 121, 134, 1)", marginTop:"5px", marginBottom:"5px"}}>{date}</p>
        </div>
    )
}

export default UserStartDate;