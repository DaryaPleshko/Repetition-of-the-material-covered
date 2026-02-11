import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

import footerIcon1 from '../../../assets/footer1.svg';
import footerIcon2 from '../../../assets/footer2.svg';
import footerIcon3 from '../../../assets/footer3.svg';

const Footer = () => {
    const menuItems = [
        { label: 'Главная', path: '/' },
        { label: 'О нас', path: '/about' },
        { label: 'Курсы', path: '/courses' },
        { label: 'Статистика', path: '/statistics' }
    ];

    const team = [
        { name: 'Дарья', role: 'Developer' },
        { name: 'Анна', role: 'Founder & JS developer & TS developer & mentor' },
        { name: 'Даниил', role: 'Java developer & mentor' },
        { name: 'Станислав', role: 'C# developer & mentor' },
        { name: 'Наталья', role: 'Pytnon developer & mentor' },
        { name: 'Юрий', role: 'TS developer & mentor' }
    ];

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>

                <div className={styles.footerTop}>

                    <div className={styles.footerSection}>
                        <h3 className={styles.footerTitle}>Навигация</h3>
                        <nav className={styles.footerNav}>
                            {menuItems.map((item) => (
                                <Link key={item.path} to={item.path} className={styles.footerLink}>
                                    {item.label}
                                </Link>))}
                        </nav>
                    </div>

                    <div className={styles.footerSection}>
                        <h3 className={styles.footerTitle}>Наша команда</h3>
                        <div className={styles.teamList}>
                            {team.map((person) => (
                                <div key={person.name} className={styles.teamMember}>
                                    <span className={styles.memberName}>{person.name}</span>
                                    <span className={styles.memberRole}>- {person.role}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <div className={styles.footerCopyright}>
                        <div className={styles.footerIcons}>
                            <img src={footerIcon1} alt="Social icon 1" />
                            <img src={footerIcon2} alt="Social icon 2" />
                            <img src={footerIcon3} alt="Social icon 3" />
                        </div>
                        <span className={styles.copyrightText}>©2026 Hschool. Project for Hschool</span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;