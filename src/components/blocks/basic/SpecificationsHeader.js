import React, { useEffect, useRef, useLayoutEffect } from 'react';
import Fade from 'react-reveal/Fade';

// IMPORT MIXED COMPONENTS
import styles from '@styles/components/Blocks.module.scss';

export default function SpecificationsHeader({
    speed,
    people,
    length,
    beam,
    form,
}) {
    const header = useRef(0);

    useLayoutEffect(() => {
        sticky();
    });

    useEffect(() => {
        window.addEventListener('scroll', sticky);
        window.addEventListener('resize', sticky);

        return () => {
            window.removeEventListener('scroll', sticky);
            window.removeEventListener('resize', sticky);
        };
    });

    if (!speed && !people && !length && !beam && !form) {
        return null;
    }
    function sticky() {
        let height = window.innerHeight - header.current.offsetHeight;
        header.current.offsetTop < window.scrollY &&
        height < window.scrollY &&
        window.innerWidth > 768 ? (
                <>
                    {(header.current.style.position = 'fixed')}
                    {(header.current.style.top = '6rem')}
                </>
            ) : (
                <>
                    {(header.current.style.position = 'relative')}
                    {(header.current.style.top = '0rem')}
                </>
            );
    }

    return (
        <div className={styles.specifications_header_section} ref={header}>
            <Fade bottom>
                <div className={styles.specifications_wrapper}>
                    <p>
                        <span>speed</span> <span>{speed}</span>
                    </p>
                    <p>
                        <span>people</span> <span>{people}</span>
                    </p>
                    <p>
                        <span>length</span> <span>{length}</span>
                    </p>
                    <p>
                        <span>beam</span> <span>{beam}</span>
                    </p>
                </div>

                <div className={styles.specifications_more_info}>
                    <a href={form ? `#${form}` : '#information'}>more info</a>
                </div>
            </Fade>
        </div>
    );
}
