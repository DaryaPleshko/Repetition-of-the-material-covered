import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { coursesData } from '../../pages/Courses/CourseDetail/data/coursesData';
import styles from './SignUp.module.scss';
import signUpImage from '../../assets/login-signUp.svg';
import { authApi } from '../../api/auth.api';

const SignUp = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        pwd: '',
        pwdConfirmation: '',
        course: ''
    });

    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isCourseSelectOpen, setIsCourseSelectOpen] = useState(false);

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

    const handleCourseSelect = (courseId) => {
        setFormData(prev => ({
            ...prev,
            course: courseId
        }));
        setIsCourseSelectOpen(false);

        if (errors.course) {
            setErrors(prev => ({
                ...prev,
                course: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = 'Имя обязательно для заполнения';

        if (!formData.email) newErrors.email = 'Email обязателен для заполнения';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Введите корректный email адрес';

        if (!formData.pwd) newErrors.pwd = 'Пароль обязателен для заполнения';
        else if (formData.pwd.length < 6) newErrors.pwd = 'Пароль должен содержать не менее 6 символов';

        if (!formData.pwdConfirmation) newErrors.pwdConfirmation = 'Подтверждение пароля обязательно';
        else if (formData.pwd !== formData.pwdConfirmation) newErrors.pwdConfirmation = 'Пароли не совпадают';

        if (!formData.course) newErrors.course = 'Выберите курс';

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
            await authApi.register({
                name: formData.name,
                email: formData.email,
                course: formData.course,
                pwd: formData.pwd,
                pwdConfirmation: formData.pwdConfirmation
            });

            console.log('Новый пользователь создан:', formData.email, formData.course);
            navigate('/dashboard');
        } catch (error) {
            console.error('Ошибка при регистрации:', error);
            setErrors({ general: error.message || 'Произошла ошибка. Попробуйте снова.' });
        } finally {
            setIsLoading(false);
        }
    };

    const availableCourses = [
        { id: 'javascript', name: 'JavaScript' },
        { id: 'typescript', name: 'TypeScript' },
        { id: 'python', name: 'Python' },
        { id: 'java', name: 'Java' },
        { id: 'csharp', name: 'C#' }
    ];

    React.useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest(`.${styles.customSelectWrapper}`)) setIsCourseSelectOpen(false);
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

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
                            placeholder="Ваше имя"
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
                        <label className={styles.courseLabel}>Выберите курс обучения:</label>
                        <div className={styles.customSelectWrapper}>
                            <div className={`${styles.customSelect} ${errors.course ? styles.inputError : ''} ${isLoading ? styles.disabled : ''}`}
                                onClick={() => !isLoading && setIsCourseSelectOpen(!isCourseSelectOpen)} >
                                <span className={formData.course ? styles.selectedValue : styles.placeholder}>
                                    {formData.course ? availableCourses.find(c => c.id === formData.course)?.name : 'Выберите курс'}
                                </span>
                                <span className={`${styles.selectArrow} ${isCourseSelectOpen ? styles.arrowUp : ''}`}>
                                    ▼
                                </span>
                            </div>

                            {isCourseSelectOpen && (
                                <div className={styles.selectDropdown}>
                                    {availableCourses.map(course => (
                                        <div key={course.id}
                                            className={`${styles.selectOption} ${formData.course === course.id ? styles.selectedOption : ''}`}
                                            onClick={() => handleCourseSelect(course.id)} >
                                            <span className={styles.optionName}>{course.name}</span>
                                            {formData.course === course.id && ( <span className={styles.checkMark}>✓</span> )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        {errors.course && (<span className={styles.errorText}>{errors.course}</span>)}
                    </div>

                    <div className={styles.formGroup}>
                        <input type="password"
                            name="pwd"
                            placeholder="Пароль"
                            value={formData.pwd}
                            onChange={handleChange}
                            className={errors.pwd ? styles.inputError : ''}
                            disabled={isLoading}/>
                        {errors.pwd && (<span className={styles.errorText}>{errors.pwd}</span>)}
                    </div>

                    <div className={styles.formGroup}>
                        <input type="password"
                            name="pwdConfirmation"
                            placeholder="Подтвердите пароль"
                            value={formData.pwdConfirmation}
                            onChange={handleChange}
                            className={errors.pwdConfirmation ? styles.inputError : ''}
                            disabled={isLoading}
                            autoComplete="new-password" />
                        {errors.pwdConfirmation && (<span className={styles.errorText}>{errors.pwdConfirmation}</span>)}
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