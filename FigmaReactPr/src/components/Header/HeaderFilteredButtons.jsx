import style from '../Header/headerfiltered.module.css'

const HeaderFiltered = () => {
    return (
        <div className={style.buttons_container}>
            <button>+  New</button>
            <div className={style.filter_btns_container}>
                <a href="#">All</a>
                <a href="#">Inactive</a>
                <a href="#">Active</a>
                <a href="#">On hold</a>
                <a href="#">Completed</a>
            </div>
        </div>
    )
}

export default HeaderFiltered;