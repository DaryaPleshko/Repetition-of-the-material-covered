// src/components/Student/Materials/Materials.jsx
import React from 'react';
import styles from './Materials.module.css';

const Materials = ({ course }) => {
    const mainMaterials = [
        {
            id: 1,
            icon: '📘',
            title: 'Учебник',
            description: 'Полный учебник по курсу в PDF формате',
            type: 'pdf',
            size: '15 MB',
            url: '#'
        },
        {
            id: 2,
            icon: '🎥',
            title: 'Видео-лекции',
            description: 'Все записи занятий в одном месте',
            type: 'video',
            size: '2.3 GB',
            url: '#'
        },
        {
            id: 3,
            icon: '📊',
            title: 'Презентации',
            description: 'Слайды со всех лекций',
            type: 'pdf',
            size: '45 MB',
            url: '#'
        }
    ];

    const additionalMaterials = [
        {
            id: 1,
            type: '📄',
            name: 'Шпаргалка по основам',
            format: 'PDF',
            size: '1.2 MB',
            date: '15.02.2026'
        },
        {
            id: 2,
            type: '🎬',
            name: 'Вебинар "Подготовка к собеседованию"',
            format: 'MP4',
            size: '450 MB',
            date: '10.02.2026'
        },
        {
            id: 3,
            type: '📝',
            name: 'Дополнительные задачи для практики',
            format: 'DOCX',
            size: '0.8 MB',
            date: '05.02.2026'
        },
        {
            id: 4,
            type: '🔗',
            name: 'Полезные ссылки и ресурсы',
            format: 'HTML',
            size: '0.1 MB',
            date: '01.02.2026'
        }
    ];

    return (
        <div className={styles.materials}>
            <h2>Учебные материалы</h2>
            <h3>Основные материалы курса</h3>
            <div className={styles.mainMaterials}>
                <div className={styles.materialsGrid}>
                    {mainMaterials.map(material => (
                        <div key={material.id} className={styles.materialCard}>
                            <div className={styles.materialIcon}>{material.icon}</div>
                            <h4>{material.title}</h4>
                            <p>{material.description}</p>
                            <div className={styles.materialMeta}>
                                <span className={styles.materialType}>{material.type.toUpperCase()}</span>
                                <span className={styles.materialSize}>{material.size}</span>
                            </div>
                            <button className={styles.downloadBtn}>Скачать</button>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.additionalMaterials}>
                <h3>Дополнительные материалы</h3>
                <div className={styles.materialsList}>
                    {additionalMaterials.map(material => (
                        <div key={material.id} className={styles.materialItem}>
                            <div className={styles.materialInfo}>
                                <span className={styles.fileIcon}>{material.type}</span>
                                <div>
                                    <span className={styles.fileName}>{material.name}</span>
                                    <span className={styles.fileMeta}>
                                        {material.format} • {material.size} • {material.date}
                                    </span>
                                </div>
                            </div>
                            <button className={styles.downloadIcon}>↓</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Materials;