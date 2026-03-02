import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { coursesData } from '../../pages/Courses/CourseDetail/data/coursesData';
import CourseHeader from '../../components/Student/CourseHeader/CourseHeader';
import CourseProgress from '../../components/Student/CourseProgress/CourseProgress';
import LessonsList from '../../components/Student/LessonsList/LessonsList';
import Schedule from '../../components/Student/Schedule/Schedule';
import Materials from '../../components/Student/Materials/Materials';
import styles from './StudentDashboard.module.css';


const StudentDashboard = () => {
    const navigate = useNavigate();
    const [student, setStudent] = useState(null);
    const [course, setCourse] = useState(null);
    const [activeTab, setActiveTab] = useState('lessons');
    const [studentProgress, setStudentProgress] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            if (!currentUser) {
                navigate('/login');
                return;
            }

            setStudent(currentUser);
            console.log('Текущий пользователь:', currentUser);

            if (!currentUser.courseId) {
                setError('У вас не выбран курс. Пожалуйста, обратитесь к администратору.');
                setLoading(false);
                return;
            }

            const studentCourse = coursesData[currentUser.courseId];
            console.log('Данные курса:', studentCourse);

            if (!studentCourse) {
                setError(`Курс с ID "${currentUser.courseId}" не найден в базе данных.`);
                setLoading(false);
                return;
            }

            setCourse(studentCourse);

            const allProgress = JSON.parse(localStorage.getItem('studentsProgress') || '{}');
            const progress = allProgress[currentUser.email] || {
                completedLessons: [],
                currentLesson: 0,
                startDate: new Date().toISOString(),
                lastActivity: new Date().toISOString()
            };
            setStudentProgress(progress);

            setLoading(false);
        } catch (err) {
            console.error('Ошибка при загрузке данных:', err);
            setError('Произошла ошибка при загрузке данных');
            setLoading(false);
        }
    }, [navigate]);

    const handleLessonComplete = (lessonId) => {
        if (!studentProgress || !student) return;

        const isCompleted = studentProgress.completedLessons.includes(lessonId);
        let updatedCompletedLessons;

        if (isCompleted) {
            updatedCompletedLessons = studentProgress.completedLessons.filter(id => id !== lessonId);
            console.log('🔴 Урок снят:', lessonId);
        } else {
            updatedCompletedLessons = [...studentProgress.completedLessons, lessonId];
            console.log('✅ Урок отмечен:', lessonId);
        }

        const updatedProgress = {
            ...studentProgress,
            completedLessons: updatedCompletedLessons,
            lastActivity: new Date().toISOString()
        };

        setStudentProgress(updatedProgress);

        const allProgress = JSON.parse(localStorage.getItem('studentsProgress') || '{}');
        allProgress[student.email] = updatedProgress;
        localStorage.setItem('studentsProgress', JSON.stringify(allProgress));
    };

    if (loading) return <div className={styles.loading}>Загрузка вашего курса...</div>;

    if (error) {
        return (
            <div className={styles.error}>
                <h2>😕 Ошибка</h2>
                <p>{error}</p>
                <button className={styles.backBtn} onClick={() => navigate('/')}>
                    Вернуться на главную
                </button>
            </div>
        );
    }

    if (!course || !student || !studentProgress) {
        return (
            <div className={styles.error}>
                <h2>😕 Что-то пошло не так</h2>
                <p>Не удалось загрузить данные курса</p>
                <button className={styles.backBtn} onClick={() => navigate('/')}>
                    Вернуться на главную
                </button>
            </div>
        );
    }

    const tabs = [
        { id: 'lessons', label: 'Уроки', icon: '📚' },
        { id: 'schedule', label: 'Расписание', icon: '📅' },
        { id: 'materials', label: 'Материалы', icon: '📎' }
    ];

    return (
        <div className={styles.dashboard}>
            <CourseHeader course={course} student={student} progress={studentProgress} />
            <CourseProgress course={course} progress={studentProgress} />

            <div className={styles.tabs}>
                {tabs.map(tab => (
                    <button key={tab.id}
                        className={`${styles.tab} ${activeTab === tab.id ? styles.activeTab : ''}`}
                        onClick={() => setActiveTab(tab.id)}>
                        <span className={styles.tabIcon}>{tab.icon}</span>
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className={styles.tabContent}>
                {activeTab === 'lessons' && (
                    <LessonsList course={course} progress={studentProgress} onLessonComplete={handleLessonComplete} />
                )}
                {activeTab === 'schedule' && (<Schedule course={course} />)}
                {activeTab === 'materials' && (<Materials course={course} />)}
            </div>
        </div>
    );
};

export default StudentDashboard;