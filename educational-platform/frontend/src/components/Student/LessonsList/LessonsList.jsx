import React, { useEffect, useMemo, useState } from 'react';
import styles from './LessonsList.module.scss';

const LessonsList = ({ course, progress, onLessonComplete, targetLessonId }) => {
    const completedLessons = progress?.completedLessons || [];

    const isLessonCompleted = (lessonId) => completedLessons.includes(lessonId);

    const topics = course.topics || [];

    const topicItems = useMemo(
        () =>
            topics.map((topic, index) => {
                const lessonId = `topic-${index}`;
                return { lessonId, topic, index, completed: isLessonCompleted(lessonId) };
            }),
        [topics, completedLessons]
    );

    const [query, setQuery] = useState('');
    const [filter, setFilter] = useState('all'); 

    const visibleTopics = useMemo(() => {
        const q = query.trim().toLowerCase();
        return topicItems.filter((item) => {
            const matchesQuery = q ? item.topic.toLowerCase().includes(q) : true;
            const matchesFilter =
                filter === 'all' ? true : filter === 'completed' ? item.completed : !item.completed;
            return matchesQuery && matchesFilter;
        });
    }, [topicItems, query, filter]);

    const [selectedLessonId, setSelectedLessonId] = useState(null);
    const selectedLesson = useMemo(() => {
        if (!selectedLessonId) return null;
        const idxMatch = /^topic-(\d+)$/.exec(String(selectedLessonId));
        if (!idxMatch) return null;
        const index = Number(idxMatch[1]);
        const topic = topics[index];
        if (!topic) return null;
        return { index, topic, lessonId: selectedLessonId, completed: isLessonCompleted(selectedLessonId) };
    }, [selectedLessonId, topics, completedLessons]); 

    const [selectedTest, setSelectedTest] = useState(null);

    useEffect(() => {
        if (!targetLessonId) return;
        const el = document.getElementById(targetLessonId);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [targetLessonId]);

    useEffect(() => {
        const anyModalOpen = Boolean(selectedLessonId || selectedTest);
        if (!anyModalOpen) return;

        const onKeyDown = (e) => {
            if (e.key === 'Escape') {
                setSelectedLessonId(null);
                setSelectedTest(null);
            }
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [selectedLessonId, selectedTest]);

    const closeLessonModal = () => setSelectedLessonId(null);
    const closeTestModal = () => setSelectedTest(null);

    return (
        <div className={styles.lessonsList}>
            <h2>Программа обучения</h2>

            <div className={styles.lessonsTools}>
                <div className={styles.searchWrap}>
                    <input
                        className={styles.searchInput}
                        type="search"
                        value={query}
                        placeholder="Поиск по урокам..."
                        onChange={(e) => setQuery(e.target.value)}
                        aria-label="Поиск по урокам"
                    />
                </div>

                <div className={styles.filterSegment} role="tablist" aria-label="Фильтр уроков">
                    <button
                        type="button"
                        className={`${styles.segmentBtn} ${filter === 'all' ? styles.segmentBtnActive : ''}`}
                        onClick={() => setFilter('all')}
                    >
                        Все
                    </button>
                    <button
                        type="button"
                        className={`${styles.segmentBtn} ${filter === 'pending' ? styles.segmentBtnActive : ''}`}
                        onClick={() => setFilter('pending')}
                    >
                        Невыполненные
                    </button>
                    <button
                        type="button"
                        className={`${styles.segmentBtn} ${filter === 'completed' ? styles.segmentBtnActive : ''}`}
                        onClick={() => setFilter('completed')}
                    >
                        Выполненные
                    </button>
                </div>
            </div>

            <div className={styles.topicsList}>
                {visibleTopics.length === 0 ? (
                    <p className={styles.emptyTopics}>По запросу ничего не найдено</p>
                ) : (
                    visibleTopics.map((item) => {
                        const { lessonId, topic, index, completed } = item;

                    return (
                        <div key={lessonId} id={lessonId} className={styles.topicCard}>
                            <div className={styles.topicContent}>
                                <div className={styles.topicHeader}>
                                    <label className={styles.checkbox}>
                                        <input type="checkbox"
                                            checked={completed}
                                            onChange={() => onLessonComplete(lessonId)}
                                        />
                                        <span className={styles.checkmark}></span>
                                    </label>
                                    
                                    <span className={styles.topicNumber}>{String(index + 1).padStart(2, '0')}</span>

                                    <span className={`${styles.topicTitle} ${completed ? styles.completed : ''}`}>{topic}</span>
                                </div>

                                <button
                                    className={styles.watchBtn}
                                    type="button"
                                    onClick={() => setSelectedLessonId(lessonId)}
                                >
                                    Смотреть урок
                                </button>
                            </div>
                        </div>
                    );
                    })
                )}
            </div>

            {course.tests && course.tests.length > 0 && (
                <div className={styles.testsSection}>
                    <h3>📝 Контрольные работы</h3>
                    <div className={styles.testsList}>
                        {course.tests.map((test, index) => (
                            <div key={index} className={styles.testCard}>
                                <span className={styles.testName}>{test}</span>
                                <button className={styles.testBtn} type="button" onClick={() => setSelectedTest(test)}>
                                    Пройти тест
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {selectedLesson && (
                <div
                    className={styles.modalBackdrop}
                    role="presentation"
                    onClick={closeLessonModal}
                >
                    <div className={styles.modal} role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <h3 className={styles.modalTitle}>
                                Урок {String(selectedLesson.index + 1).padStart(2, '0')}: {selectedLesson.topic}
                            </h3>
                            <button className={styles.modalClose} type="button" onClick={closeLessonModal}>
                                Закрыть
                            </button>
                        </div>

                        <div className={styles.modalBody}>
                            <p className={styles.modalHint}>
                                Демонстрационная карточка урока. Отметьте урок как выполненный — прогресс обновится сразу.
                            </p>
                            <div className={styles.modalMetaRow}>
                                <span className={styles.modalMetaLabel}>Статус:</span>
                                <span className={styles.modalMetaValue}>
                                    {selectedLesson.completed ? 'Выполнен' : 'Не выполнен'}
                                </span>
                            </div>
                        </div>

                        <div className={styles.modalActions}>
                            <button
                                type="button"
                                className={styles.modalPrimaryBtn}
                                onClick={() => onLessonComplete(selectedLesson.lessonId)}
                            >
                                {selectedLesson.completed ? 'Снять как выполненное' : 'Отметить как выполненное'}
                            </button>
                            <button type="button" className={styles.modalGhostBtn} onClick={closeLessonModal}>
                                Понятно
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {selectedTest && (
                <div className={styles.modalBackdrop} role="presentation" onClick={closeTestModal}>
                    <div className={styles.modal} role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <h3 className={styles.modalTitle}>Тест: {selectedTest}</h3>
                            <button className={styles.modalClose} type="button" onClick={closeTestModal}>
                                Закрыть
                            </button>
                        </div>

                        <div className={styles.modalBody}>
                            <p className={styles.modalHint}>
                                В текущей версии тесты не реализованы. Можно использовать эту карточку как основу для реального прохождения.
                            </p>
                        </div>

                        <div className={styles.modalActions}>
                            <button type="button" className={styles.modalPrimaryBtn} onClick={closeTestModal}>
                                Ок
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LessonsList;