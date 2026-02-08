import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';
import loginImage from '../../assets/login-signUp.svg';

const Login = () => {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginContainer}>
                <h1>Login</h1>
                <p>Enter your credentials to access your account</p>

                <form>
                    <div className={styles.formGroup}>
                        <input type="email" placeholder="Email address" />
                    </div>

                    <div className={styles.formGroup}>
                        <input type="password" placeholder="Password" />
                    </div>

                    <button type="submit" className={styles.loginButton}>Login</button>

                    <div className={styles.registerLink}>
                        Don't have an account?
                        <Link to="/signup" className={styles.signUp}> Sign up</Link>
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