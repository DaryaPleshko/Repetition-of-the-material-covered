import React, { useState, useMemo } from 'react';
import styles from './Schedule.module.css';

const Schedule = ({ course }) => {
    const [selectedMonth, setSelectedMonth] = useState(1);

    const getTotalMonths = () => {
        const durationStr = course.duration || '6 месяцев';
        const match = durationStr.match(/(\d+)/);
        return match ? parseInt(match[1]) : 6;
    };

    const groupTopicsByMonth = (topics, totalMonths) => {
        const months = [];
        const topicsPerMonth = Math.ceil(topics.length / totalMonths);
        
        for (let i = 0; i < totalMonths; i++) {
            const start = i * topicsPerMonth;
            const end = Math.min(start + topicsPerMonth, topics.length);
            
            if (start < topics.length) {
                months.push({
                    month: i + 1,
                    topics: topics.slice(start, end)
                });
            }
        }
        return months;
    };

    const totalMonths = getTotalMonths();
    const months = useMemo(() => 
        groupTopicsByMonth(course.topics || [], totalMonths), 
        [course.topics, totalMonths]
    );

    if (months.length === 0) {
        return (
            <div className={styles.schedule}>
                <p className={styles.empty}>Расписание появится позже</p>
            </div>
        );
    }

    const currentMonth = months[selectedMonth - 1];

    return (
        <div className={styles.schedule}>
            <h2>Расписание занятий</h2>
            
            <div className={styles.nav}>
                <button className={styles.navBtn}
                    onClick={() => setSelectedMonth(m => Math.max(1, m - 1))}
                    disabled={selectedMonth === 1}>←</button>
                <span className={styles.navInfo}> Месяц {selectedMonth} из {months.length}</span>
                <button className={styles.navBtn}
                    onClick={() => setSelectedMonth(m => Math.min(months.length, m + 1))}
                    disabled={selectedMonth === months.length}>→</button>
            </div>

            <div className={styles.monthCard}>
                <h3>Месяц {currentMonth.month}</h3>
                <ul className={styles.topicList}>
                    {currentMonth.topics.map((topic, idx) => (
                        <li key={idx} className={styles.topicItem}>{topic}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Schedule;