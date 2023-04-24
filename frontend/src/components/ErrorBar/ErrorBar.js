import styles from './ErrorBar.module.css';



function ErrorBar({e}) {
    return (
        <div>
            <div className={e !== null ? styles.error: styles.noError}>
                {e}
            </div>
        </div>
    )
}

export default ErrorBar;