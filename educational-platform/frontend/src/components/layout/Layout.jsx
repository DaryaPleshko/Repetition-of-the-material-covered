import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import styles from './Layout.module.scss'; 

const Layout = ({ children }) => {
    const [key, setKey] = React.useState(Date.now());
    
    React.useEffect(() => {
        const handleStorageChange = () =>  setKey(Date.now());
        window.addEventListener('storage', handleStorageChange);
        
        const originalSetItem = localStorage.setItem;
        localStorage.setItem = function() {
            originalSetItem.apply(this, arguments);
            handleStorageChange();
        };
        
        return () => {
            window.removeEventListener('storage', handleStorageChange);
            localStorage.setItem = originalSetItem;
        };
    }, []);

    return (
        <div className={styles.layout}>
            <Header key={key} />
            <main className={styles.main}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;