import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './SignUp.module.css';
import signUpImage from '../../assets/login-signUp.svg';

const SignUp = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
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
            setErrors(prev => ({
                ...prev,
                [name]: '',
                general: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name) newErrors.name = 'Имя обязательно для заполнения';

        if (!formData.email) newErrors.email = 'Email обязателен для заполнения';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Введите корректный email адрес';

        if (!formData.password) newErrors.password = 'Пароль обязателен для заполнения';
        else if (formData.password.length < 6) newErrors.password = 'Пароль должен содержать не менее 6 символов';

        if (!formData.confirmPassword) newErrors.confirmPassword = 'Подтверждение пароля обязательно';
        else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Пароли не совпадают';

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

            const userExists = users.some(userCreate => userCreate.email === formData.email);

            if (userExists) {
                setErrors({general: 'Пользователь с таким email уже существует'});
                setIsLoading(false);
                return;
            }

            const newUser = {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                registeredAt: new Date().toISOString()
            };

            users.push(newUser);

            localStorage.setItem('users', JSON.stringify(users));
            await new Promise(resolve => setTimeout(resolve, 500));
            navigate('/userCourse');

        } catch (error) {
            console.error('Ошибка при регистрации:', error);
            setErrors({general: 'Произошла ошибка. Попробуйте снова.'});
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.signupPage}>
            <div className={styles.signupContainer}>
                <h1>Регистрация</h1>
                <p>Создайте аккаунт, чтобы начать обучение!</p>

                {errors.general && (
                    <div className={styles.errorMessage} role="alert">{errors.general}</div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                    <div className={styles.formGroup}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            className={errors.name ? styles.inputError : ''}
                            disabled={isLoading}
                        />
                        {errors.name && (<span className={styles.errorText}>{errors.name}</span>)}
                    </div>

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

                    <div className={styles.formGroup}>
                        <input type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className={errors.confirmPassword ? styles.inputError : ''}
                            disabled={isLoading}
                            autoComplete="new-password"/>
                        {errors.confirmPassword && (<span className={styles.errorText}>{errors.confirmPassword}</span>)}
                    </div>

                    <button type="submit" className={styles.signupButton} disabled={isLoading}>
                        {isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
                    </button>

                    <div className={styles.loginLink}> Уже с нами?
                        <Link to="/login" className={styles.login}> Войти </Link>
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