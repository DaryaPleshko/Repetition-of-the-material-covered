import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        try {
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            if (currentUser) setUser(currentUser);
        } catch (error) {
            console.error('Ошибка:', error);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('currentUser');
        setUser(null);
        navigate('/login');
    };

    return (
        <header className={styles.header}>
            <Link to="/" className={styles.logo}>Hschool</Link>

            {user ? (
                <div className={styles.userMenu}>
                    <div className={styles.userInfo}>
                        <div className={styles.avatar}>🐨</div>
                        <span className={styles.userName}>{user.email}</span>
                    </div>
                    <button onClick={handleLogout} className={styles.logoutButton}>Выйти</button>
                </div>
            ) : (
                <div className={styles.authButtons}>
                    <Link to="/login" className={styles.loginButton}>Войти →</Link>
                    <Link to="/signup" className={styles.signupButton}>Присоединиться</Link>
                </div>
            )}
        </header>
    );
};

export default Header;