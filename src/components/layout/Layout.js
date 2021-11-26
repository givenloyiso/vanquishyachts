// IMPORT MIXED COMPONENTS
import styles from '@styles/components/Layout.module.scss';
import Header from '@components/header/Header';
import Cookie from '@components/blocks/unique/Cookie';
import Footer from '@components/footer/Footer';

export default function Layout({ children }) {
    return (
        <div className={styles.page_container}>
            <Header />
            <main className={styles.main}>{children}</main>
            <Cookie />
            <Footer />
        </div>
    );
}
