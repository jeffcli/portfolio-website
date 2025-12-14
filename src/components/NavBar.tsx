import React from 'react';
import {Link} from 'react-router-dom';
import styles from './NavBar.module.css';
import cubeIcon from "./assets/rubiks.png";




const Navbar: React.FC = () => {


    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarContainer}>


                    <a href=
                           "/">
                        <img src={cubeIcon} className={styles.rubk}
                             alt="Click to visit geeksforgeeks.org"/>
                    </a>
                    <Link to="/" className={styles.navbarLogo}>
                        Jeffrey Li
                    </Link>

            <div className={styles.menuIcon}>

                </div>
                <ul className={styles.navMenu}>

                    <li className={styles.navItem}>
                        <Link to="/about" className={styles.navLinks}>
                            About
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to="/portfolio" className={styles.navLinks}>
                            Projects
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;