import styles from './Footer.module.css'
import {FaInstagram, FaLinkedin} from 'react-icons/fa'

function Footer(){
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <FaInstagram/>
                </li>

                <li>
                    <FaLinkedin/>
                </li>
            </ul>
            <p className={styles.copy_right}>
                <span>Project Manager &copy; 2023</span>
            </p>
        </footer>
    )
}

export default Footer