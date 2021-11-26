// NEXT JS / THIRD PARTY IMPORT
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';

// IMPORT MIXED COMPONENTS
import styles from '@styles/pages/Lifestyle.module.scss';
import MediaDetector from '@components/blocks/unique/MediaDetector';

export default function Magazine({ title, textBlock, dataArray }) {
    const [clickSlider, setClickSlider] = useState(0);
    const count = dataArray ? dataArray.length : false;
    const eventsRef = useRef(0);
    const cn = (...classNames) => classNames.join(' ');

    const prev = () => {
        setClickSlider(clickSlider === 0 ? 0 : clickSlider - 1);
    };

    const next = () => {
        setClickSlider(clickSlider === count - 1 ? count - 1 : clickSlider + 1);
    };

    const handleClickYear = (e) => {
        setClickSlider(e);
    };

    const sliderResize = () => {
        let widthEvents = eventsRef.current.offsetWidth;
        const [width, setWidth] = useState(widthEvents ? widthEvents : 0); // default width, detect on server.
        // eslint-disable-next-line react-hooks/exhaustive-deps
        const handleResize = () => setWidth(window.innerWidth);
        useEffect(() => {
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, [handleResize]);

        if (width === 0) {
            if (widthEvents < 767) {
                var eventCount = 3;
            } else if (widthEvents > 766 && widthEvents < 1400) {
                var eventCount = 4;
            } else {
                var eventCount = count;
            }
        } else {
            if (width < 767) {
                var eventCount = 3;
            } else if (width > 766 && width < 1400) {
                var eventCount = 4;
            } else {
                var eventCount = count;
            }
        }

        return eventCount;
    };

    if (!Array.isArray(dataArray) || count <= 0) {
        return null;
    }

    return (
        <div
            id={`Slider_${title ? title.split(' ').join('_') : 'Magazine'}`}
            ref={eventsRef}
            className={styles.magazine_Slider_section}
        >
            <p className="text-block">{textBlock}</p>
            <h1>
                {title}
                <span>.</span>
            </h1>

            <div className={styles.wrap}>
                <div className={styles.navigation}>
                    {count <= 0 === false && (
                        <>
                            {clickSlider === 0 ? (
                                <FiArrowLeftCircle
                                    size={45}
                                    strokeWidth={0.1}
                                />
                            ) : (
                                <FiArrowLeftCircle
                                    id={`Button_Prev_${
                                        title
                                            ? title.split(' ').join('_')
                                            : 'Magazine'
                                    }`}
                                    size={45}
                                    strokeWidth={0.5}
                                    onClick={() => prev()}
                                />
                            )}
                            {clickSlider === count - 1 ? (
                                <FiArrowRightCircle
                                    strokeWidth={0.1}
                                    size={45}
                                />
                            ) : (
                                <FiArrowRightCircle
                                    id={`Button_Prev_${
                                        title
                                            ? title.split(' ').join('_')
                                            : 'Magazine'
                                    }`}
                                    strokeWidth={0.5}
                                    size={45}
                                    onClick={() => next()}
                                />
                            )}
                        </>
                    )}
                </div>

                <div className={styles.magazine}>
                    <div className={styles.slider}>
                        {dataArray
                            .slice(0, clickSlider + sliderResize())
                            .map((slider, key) => {
                                return (
                                    <>
                                        <div
                                            className={
                                                clickSlider === key
                                                    ? cn(
                                                        styles.items,
                                                        styles.active
                                                    )
                                                    : styles.items
                                            }
                                            key={key}
                                        >
                                            {clickSlider === key ? (
                                                <Link
                                                    href={slider.url}
                                                    passHref
                                                >
                                                    <a target="_blank">
                                                        <MediaDetector
                                                            mediaUrl={
                                                                slider.image
                                                                    ? slider
                                                                        .image
                                                                        .sourceUrl
                                                                    : null
                                                            }
                                                            title={title}
                                                            altText={
                                                                slider.image
                                                                    ? slider
                                                                        .image
                                                                        .altText
                                                                    : null
                                                            }
                                                            imageObjectFit="contain"
                                                        />
                                                    </a>
                                                </Link>
                                            ) : (
                                                <MediaDetector
                                                    mediaUrl={
                                                        slider.image
                                                            ? slider.image
                                                                .sourceUrl
                                                            : null
                                                    }
                                                    title={title}
                                                    altText={
                                                        slider.image
                                                            ? slider.image
                                                                .altText
                                                            : null
                                                    }
                                                    imageObjectFit="contain"
                                                />
                                            )}
                                        </div>
                                    </>
                                );
                            })}
                    </div>
                </div>
                <div className={styles.year}>
                    {dataArray.map((slider, key) => {
                        return (
                            <div
                                key={key}
                                className={
                                    clickSlider === key
                                        ? cn(styles.item, styles.active)
                                        : styles.item
                                }
                                onClick={() => handleClickYear(key)}
                            >
                                <span>{slider.year}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
