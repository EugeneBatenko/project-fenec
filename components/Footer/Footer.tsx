import {FC} from "react";
import styles from './footer.module.css';
import Link from "next/link";

export const Footer: FC = () => {
    return(
        <footer className={styles.footer}>
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col d-flex align-items-center flex-wrap">
                      <p className="m-0 me-5">All right reserved. Yevhen Batenko 2018 - {new Date(new Date()).getFullYear()}</p>
                      <Link href="/privacy" className="link">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}