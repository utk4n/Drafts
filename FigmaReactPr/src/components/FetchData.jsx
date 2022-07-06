import SingleUser from './Card/SingleUserCard/SingleUser.jsx';


import style from '../components/container.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react';

const FetchData = () => {

    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        const response = await axios.get("https://randomuser.me/api/?results=9")
        setUsers(response.data.results)
    }

    useEffect(() => {
        fetchUsers()
    }, [])


    return (
        <div className={style.cards_wrapper}>
            <ul className={style.cards_container}>
                {users.map(user => <li key={user.phone}><SingleUser user={user} /></li>)}
            </ul>
        </div>
    )

}

export default FetchData;