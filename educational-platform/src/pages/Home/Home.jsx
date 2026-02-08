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
                            Learning and<br />
                            teaching online,<br />
                            made easy.
                        </h2>

                        <p className={styles.description}>
                            Any subject, in any language, on any device,<br />
                            for all ages!
                        </p>

                        <div className={styles.actions}>
                            <Link to="/about" className={styles.button}>
                                About platform
                            </Link>

                            <div className={styles.stats}>
                                <div className={styles.stat}>
                                    <div className={styles.number}>600+</div>
                                    <div className={styles.label}>Students</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.image}>
                        <img src={heroImage} alt="Online learning" />
                    </div>
                </div>
            </section>

            <section className={styles.playfulSection}>
                <div className={styles.image}>
                    <img src={playfulImage} alt="Online learning" />
                </div>
                <div className={styles.containerPlayful}>
                    <h2>Learn a language <br />
                    in a playful way</h2>
                    <p>Make learning programming languages more fun <br />
                    with mini-games</p>
                    <div className={styles.buttonsContainer}>
                        <Link to="/sprint" className={styles.playfulBtnSprint}></Link>
                        <Link to="/tasks" className={styles.playfulBtnTasks}></Link>
                    </div>
                </div>
            </section>

            <section className={styles.knowledgeSection}>
                <div className={styles.containerKnowledge}>
                    <h2>Increase your knowledge</h2>
                    <p>Traditional and new effective approaches to learning languages</p>
                    <Link to="/courses" className={styles.button}>
                        Textbook →
                    </Link>
                </div>
                <div className={styles.image}>
                    <img src={knowledgeImage} alt="Increase knowledge" />
                </div>
            </section>

            <section className={styles.statisticSection}>
                <div className={styles.image}>
                    <img src={progressImage} alt="Progress tracking" />
                </div>
                <div className={styles.containerStatistics}>
                    <h2>Watch your progress every day</h2>
                    <p>Save statistics on your achievements and mistakes</p>
                    <Link to="/statistics" className={styles.button}>
                        Statistics →
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;