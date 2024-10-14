import { FaNodeJs } from "react-icons/fa6";
import styles from './index.module.css';


export const Projects = () => {
    return (
        <section className="mb-5 bg-section py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="h2 text-center mb-5">Projects</h2>
                    </div>
                    <div className="col-4">
                        <div className={styles.card}>
                            {/*https://littlesnippets.net/snip1364*/}
                            <figure className={styles.figure}>
                                <img className={styles.img} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample58.jpg"
                                     alt="sample58"/>
                                <figcaption className={styles.figcaption}>
                                    <h3 className={styles.title}>Will Barrow</h3>
                                    <p className={styles.text}>Which is worse, that everyone has his price, or that the price is always so
                                        low.</p>
                                </figcaption>
                                <FaNodeJs size={50} className={styles.icon}/>
                            </figure>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={styles.card}>
                            {/*https://littlesnippets.net/snip1288*/}
                            <figure className={styles.figure}>
                                <img className={styles.img} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample67.jpg"
                                     alt="sample67"/>
                                <figcaption className={styles.figcaption}>
                                    <h3 className={styles.title}>Eleanor Fant</h3>
                                    <p className={styles.text}>Which is worse, that everyone has his price, or that the price is always so
                                        low.</p>
                                </figcaption>
                                <FaNodeJs size={50} className={styles.icon}/>
                            </figure>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={styles.card}>
                            {/*https://littlesnippets.net/snip1401*/}
                            <figure className={styles.figure}>
                                <img className={styles.img} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg"
                                     alt="sample87"/>
                                <figcaption className={styles.figcaption}>
                                    <h3 className={styles.title}>Will Barrow</h3>
                                    <p className={styles.text}>The only skills I have the patience to learn are those that have no real
                                        application in life. </p>
                                </figcaption>
                                <FaNodeJs size={50} className={styles.icon}/>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}