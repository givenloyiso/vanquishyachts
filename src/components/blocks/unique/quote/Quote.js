// NEXT JS / THIRD PARTY IMPORT
import React from 'react';

// CUSTOM IMPORT
import styles from '@styles/components/Blocks.module.scss';

// NEXT JS / THIRD PARTY IMPORT
import { GoQuote } from 'react-icons/go';

function Quote({ title, content, author, noIcon }) {
    if (!title && !content) {
        return null;
    }

    return (
        <div className={styles.quote_section}>
            <div className={styles.quote_wrapper}>
                {!noIcon && <GoQuote size={40} />}
                <h3>
                    {title}
                    <span>.</span>
                </h3>

                <q
                    className={styles.quote}
                    dangerouslySetInnerHTML={{ __html: content }}
                ></q>

                <p className="text-block">{author}</p>
            </div>
        </div>
    );
}

export default Quote;
