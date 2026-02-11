import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="/" className={styles.logo}>Hschool</Link>

            <div className={styles.authButtons}>
                <Link to="/login" className={styles.loginButton}>Войти →</Link>
                <Link to="/signup" className={styles.signupButton}>Присоединиться</Link>
            </div>
        </header>
    );
};

export default Header;