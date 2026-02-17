import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import loginImage from '../../assets/login-signUp.svg';

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
        if (errors[name] || errors.general) setErrors({});
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.email) newErrors.email = 'Email обязателен для заполнения';
        else if (!/\S+@\S+\.\S+/.test(formData.email))  newErrors.email = 'Введите корректный email адрес';

        if (!formData.password)   newErrors.password = 'Пароль обязателен для заполнения';

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
            const storedUsers = localStorage.getItem('users');
            const users = storedUsers ? JSON.parse(storedUsers) : [];

            const user = users.find(userCreate => userCreate.email === formData.email);

            if (user && user.password === formData.password) {
                localStorage.setItem('currentUser', JSON.stringify({
                    email: user.email,
                    name: user.name
                }));
                await new Promise(resolve => setTimeout(resolve, 500));
                
                navigate('/userCourse');
            } else {
                setErrors({
                    general: 'Неверный email или пароль'
                });
            }
        } catch (error) {
            console.error('Ошибка при входе:', error);
            setErrors({ general: 'Произошла ошибка. Попробуйте снова.'});
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
                    <div className={styles.errorMessage} role="alert">{errors.general}</div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                    <div className={styles.formGroup}>
                        <input type="email"
                            name="email"
                            placeholder="Email address"
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? styles.inputError : ''}
                            disabled={isLoading}/>
                        {errors.email && (<span className={styles.errorText}>{errors.email}</span>)}
                    </div>

                    <div className={styles.formGroup}>
                        <input type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className={errors.password ? styles.inputError : ''}
                            disabled={isLoading}/>
                        {errors.password && (<span className={styles.errorText}>{errors.password}</span>)}
                    </div>

                    <button type="submit" className={styles.loginButton} disabled={isLoading}>
                        {isLoading ? 'Вход...' : 'Войти'}
                    </button>

                    <div className={styles.registerLink}>Ещё не с нами?
                        <Link to="/signup" className={styles.signUp}> Присоединиться </Link>
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