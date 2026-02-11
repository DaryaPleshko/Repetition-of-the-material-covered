import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SignUp.module.css';
import signUpImage from '../../assets/login-signUp.svg';

const SignUp = () => {
    return (
        <div className={styles.signupPage}>
            <div className={styles.signupContainer}>
                <h1>Регистрация</h1>
                <p>Создайте аккаунт, чтобы начать обучение!</p>

                <form>
                    <div className={styles.formGroup}>
                        <input  type="text"  placeholder="Full Name"/>
                    </div>

                    <div className={styles.formGroup}>
                        <input type="email" placeholder="Email address"/>
                    </div>

                    <div className={styles.formGroup}>
                        <input type="password" placeholder="Password"/>
                    </div>

                    <div className={styles.formGroup}>
                        <input type="password" placeholder="Confirm Password"  autoComplete="new-password"/>
                    </div>

                    <div className={styles.loginLink}>
                        Уже с нами?
                        <Link to="/login" className={styles.login}> Войти</Link>
                    </div>
                </form>
            </div>

            <div className={styles.image}>
                <img src={signUpImage} alt="Sign up illustration" />
            </div>

        </div>
    );
};

export default SignUp;