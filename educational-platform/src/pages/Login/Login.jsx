import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';
import loginImage from '../../assets/login-signUp.svg';

const Login = () => {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginContainer}>
                <h1>Вход</h1>
                <p>Введите учетные данные для доступа к своему аккаунту!</p>

                <form>
                    <div className={styles.formGroup}>
                        <input type="email" placeholder="Email address" />
                    </div>

                    <div className={styles.formGroup}>
                        <input type="password" placeholder="Password" />
                    </div>

                    <button type="submit" className={styles.loginButton}>Войти</button>

                    <div className={styles.registerLink}>
                        Ещё не с нами?
                        <Link to="/signup" className={styles.signUp}> Присоединиться</Link>
                    </div>
                </form>
            </div>

            <div className={styles.image}>
                <img src={loginImage} alt="Progress tracking" />
            </div>

        </div>
    );
};

export default Login;