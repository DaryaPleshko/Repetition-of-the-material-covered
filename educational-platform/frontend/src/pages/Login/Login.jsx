import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';
import loginImage from '../../assets/login-signUp.svg';
import { authApi } from '../../api/auth.api';

const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''

    });

    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name] || errors.general) {
            setErrors({});
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.email) newErrors.email = 'Email обязателен для заполнения';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Введите корректный email адрес';

        if (!formData.pwd) newErrors.pwd = 'Пароль обязателен для заполнения';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        setIsLoading(true);

        try {
            await authApi.login({
                email: formData.email,
                pwd: formData.pwd
            });

            console.log('Успешный вход для пользователя:', formData.email);
            navigate('/dashboard');
        } catch (error) {
            console.error('Ошибка при входе:', error);
            setErrors({ general: error.message || 'Произошла ошибка. Попробуйте снова.' });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.loginPage}>
            <div className={styles.loginContainer}>
                <h1>Вход</h1>
                <p>Введите учетные данные для доступа к своему аккаунту!</p>

                {errors.general && (
                    <div className={styles.errorMessage} role="alert">
                        {errors.general}
                    </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                    <div className={styles.formGroup}>
                        <input type="email"
                            name="email"
                            placeholder="Email address"
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? styles.inputError : ''}
                            disabled={isLoading}
                            autoComplete="email"/>
                        {errors.email && (
                            <span className={styles.errorText}>{errors.email}</span>
                        )}
                    </div>

                    <div className={styles.formGroup}>
                        <input type="password"
                            name="pwd"
                            placeholder="Пароль"
                            value={formData.pwd}
                            onChange={handleChange}
                            className={errors.pwd ? styles.inputError : ''}
                            disabled={isLoading}
                            autoComplete="current-password"/>
                        {errors.pwd && (
                            <span className={styles.errorText}>{errors.pwd}</span>
                        )}
                    </div>

                    <button type="submit"
                        className={styles.loginButton}
                        disabled={isLoading}>
                        {isLoading ? 'Вход...' : 'Войти'}
                    </button>

                    <div className={styles.registerLink}>
                        Ещё не с нами?
                        <Link to="/signup" className={styles.signUp}>
                            Присоединиться
                        </Link>
                    </div>
                </form>
            </div>

            <div className={styles.image}>
                <img src={loginImage} alt="Иллюстрация процесса обучения" />
            </div>
        </div>
    );
};

export default Login;