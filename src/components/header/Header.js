// IMPORT MIXED COMPONENTS
import Navbar from '@components/header/navbar/index';
import styles from '@styles/components/Header.module.scss';

export default function Header() {
    return (
        <header className={styles.header}>
            <Navbar />
        </header>
    );
}
