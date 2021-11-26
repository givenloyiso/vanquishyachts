// NEXT JS / THIRD PARTY IMPORT
import { React } from 'react';

//IMPORT MIXED COMPONENTS
import styles from '@styles/components/Blocks.module.scss';

export default function Counter({ number, prev, next, max }) {
    const progress = (100 / max) * number;
    return (
        <div className={styles.counter}>
            <div className={styles.nav_counter}>
                <span>0{number}</span>
                <span></span>
                <span>0{max}</span>
            </div>
            <div className={styles.nav_buttons}>
                <span
                    id='Button_Prev'
                    onClick={prev}
                >
                    Prev
                </span>
                <span className={styles.counter_bar}>
                    <span
                        className={styles.progress_bar}
                        style={{ width: `${progress}%` }}
                    ></span>
                </span>

                <span
                    id='Button_Next'
                    onClick={next}
                >
                    Next
                </span>
            </div>
        </div>
    );
}
