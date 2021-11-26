// IMPORT NEXT JS / THIRD PARTY
import { useEffect } from 'react';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';

// IMPORT MIXED COMPONENTS
import styles from '@styles/components/Blocks.module.scss';

// IMPORT CUSTOM BLOCK COMPONENTS

export default function Navigation({ current, pages, prev, next }) {
    useEffect(() => {
        // some browsers (like safari) may require a timeout to delay calling this
        // function after a page has loaded; otherwise, it may not update the position
        window.scrollTo({
            top: 750,
            behavior: 'smooth',
        });
    }, [next]);
    return (
        <div className={styles.navigation_section}>
            {current === 0 ? (
                <FiArrowLeftCircle strokeWidth={0.1} size={45} />
            ) : (
                <FiArrowLeftCircle strokeWidth={0.5} size={45} onClick={prev} />
            )}

            <div className={styles.counter}>
                <div className={styles.current}>{current + 1}</div>
                <span>/</span>
                {pages}
            </div>

            {current + 1 === pages ? (
                <FiArrowRightCircle strokeWidth={0.1} size={45} />
            ) : (
                <FiArrowRightCircle
                    strokeWidth={0.5}
                    size={45}
                    onClick={next}
                />
            )}
        </div>
    );
}
