import style from "../ProgressBar/.progress_percentage_wrapper.module.css"

const ProgressPercentage = () => {
    return (
        <div className={style.progress_percentage_wrapper}>
            <p>Progress</p>
            <p>67%</p>
        </div>
    )
}

export default ProgressPercentage;