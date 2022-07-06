import style from './task_and_users.module.css'

const TaskAndUsersCount = (props) => {
    return(<div className={style.task_and_users_wrapper}>
        <div className={style.tasks}>
            <p>{props.tasks}</p>
            <p>Tasks</p>
        </div>
        <div className={style.users}>
            <p>{props.users}</p>
            <p>Users</p>
        </div>
    </div>)
}

export default TaskAndUsersCount;