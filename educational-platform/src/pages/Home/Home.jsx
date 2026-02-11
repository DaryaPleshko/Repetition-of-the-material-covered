import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import heroImage from '../../assets/heroSection.svg';
import playfulImage from '../../assets/learn a language.svg';
import knowledgeImage from '../../assets/knowledge.svg';
import progressImage from '../../assets/progress.svg';

const Home = () => {
    return (
        <div className={styles.home}>
            <section className={styles.hero}>
                <h1 className={styles.title}>E-COURSE PLATFORM</h1>

                <div className={styles.container}>
                    <div className={styles.content}>
                        <h2 className={styles.subtitle}>
                            Онлайн-курсы, которые хочется проходить.
                        </h2>

                        <p className={styles.description}>
                            <span>FREE</span> сопровождение, вечный доступ к лекциям <br />
                            Созвоны и поддержка до получения оффера!
                        </p>

                        <div className={styles.actions}>
                            <Link to="/about" className={styles.button}>
                                О платформе
                            </Link>

                            <div className={styles.stats}>
                                <div className={styles.stat}>
                                    <div className={styles.number}>600+</div>
                                    <div className={styles.label}>Студентов</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.image}>
                        <img src={heroImage} alt="Online learning" />
                    </div>
                </div>
            </section>

            <section className={styles.statisticSection}>
                <div className={styles.image}>
                    <img src={progressImage} alt="Progress tracking" />
                </div>
                <div className={styles.containerStatistics}>
                    <h2>HSchool в цифрах</h2>
                    <p>Цифры, которые говорят сами за себя</p>
                    <Link to="/statistics" className={styles.button}>
                        Перейти к статистике →
                    </Link>
                </div>
            </section>

            <section className={styles.knowledgeSection}>
                <div className={styles.containerKnowledge}>
                    <h2>Хочешь освоить программирование с нуля?</h2>
                    <p>Понятные объяснения и практика — всё, чтобы сделать первый шаг в IT</p>
                    <Link to="/courses" className={styles.button}>
                        Выбрать курс →
                    </Link>
                </div>
                <div className={styles.image}>
                    <img src={knowledgeImage} alt="Increase knowledge" />
                </div>
            </section>

            <section className={styles.playfulSection}>
                <div className={styles.image}>
                    <img src={playfulImage} alt="Online learning" />
                </div>
                <div className={styles.containerPlayful}>
                    <h2>Тренируй собеседования <br />
                        в игровом формате</h2>
                    <p>Твой личный тренажёр перед оффером мечты</p>

                    <div className={styles.buttonsContainer}>
                        <Link to="/sprint" className={styles.playfulBtnSprint}>
                            <div className={styles.playfulPosition}>
                                <div className={styles.btnIconSprint}></div>
                                <span className={styles.btnTextSprint}>Изучение →</span>
                            </div>
                        </Link>
                        <Link to="/tasks" className={styles.playfulBtnTasks}>
                            <div className={styles.playfulPosition}>
                                <div className={styles.btnIconTasks}></div>
                                <span className={styles.btnTextTasks}>Практика →</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;