import styles from './index.module.css';

export const Footer = () => {
    return(
        <footer className={styles.footer}>
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col">
                        <p className="m-0">All right reserved. Yevhen Batenko 2018 - {new Date(new Date()).getFullYear()}</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}