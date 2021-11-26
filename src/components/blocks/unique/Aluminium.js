// NEXT JS / THIRD PARTY IMPORT
import React, { useState } from 'react';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';

//IMPORT MIXED COMPONENTS
import styles from '@styles/components/Blocks.module.scss';
import Button from '@components/blocks/button/Button';
import MediaDetector from '@components/blocks/unique/MediaDetector';

export default function Aluminium({ title, yachtsArray }) {
    const cn = (...classNames) => classNames.join(' ');
    const [toggleState, setToggleState] = useState(0);
    const [clickSlider, setClickSlider] = useState(0);
    const count = yachtsArray.length;

    const previous = () => {
        setClickSlider(clickSlider === 0 ? 0 : clickSlider - 1);
    };

    const next = () => {
        setClickSlider(clickSlider === count - 1 ? count - 1 : clickSlider + 1);
    };
    const handleClick = (e) => {
        setToggleState(e);
    };

    if (!Array.isArray(yachtsArray) || count <= 0) {
        return null;
    }
    return (
        <div className={styles.aluminium_section}>
            <h3>
                {title}
                <span>.</span>
            </h3>
            <div className={styles.wrapper}>
                <div className={styles.models_wrapper}>
                    <div className={styles.yachts_information}>
                        {yachtsArray &&
                            yachtsArray.length > 0 &&
                            yachtsArray.map((yacht, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={
                                            toggleState === index
                                                ? cn(
                                                    styles.wrap,
                                                    styles.wrap_active
                                                )
                                                : styles.wrap
                                        }
                                        onClick={() => handleClick(index)}
                                    >
                                        {toggleState === index ? (
                                            <>
                                                <Button
                                                    title={yacht.title}
                                                    style="5"
                                                />
                                                <div className={styles.icon}>
                                                    <MediaDetector
                                                        title={yacht.title}
                                                        mediaUrl={
                                                            yacht.icon
                                                                ? yacht.icon
                                                                    .sourceUrl
                                                                : null
                                                        }
                                                        altText={
                                                            yacht.icon
                                                                ? yacht.icon
                                                                    .altText
                                                                : null
                                                        }
                                                        objectFit="contain"
                                                    />
                                                </div>
                                            </>
                                        ) : (
                                            <Button
                                                title={yacht.title}
                                                style="4"
                                            />
                                        )}
                                    </div>
                                );
                            })}
                    </div>
                </div>
                {/* RIGHT ILLUSTRATION OF YACHTS WITH PICTURES OR VIDEOS */}
                {yachtsArray &&
                    yachtsArray.length > 0 &&
                    yachtsArray.map((yacht, index) => {
                        return (
                            <div
                                className={
                                    toggleState === index
                                        ? cn(
                                            styles.yachts_illustration,
                                            styles.switch_active
                                        )
                                        : cn(
                                            styles.yachts_illustration,
                                            styles.switch_hide
                                        )
                                }
                                key={index}
                            >
                                {yacht.image && yacht.image.length > 1 && (
                                    <div className={styles.top_information}>
                                        <div className={styles.navigation}>
                                            {yachtsArray &&
                                                yachtsArray.length > 2 && (
                                                <>
                                                    {clickSlider === 0 ? (
                                                        <FiArrowLeftCircle
                                                            size={60}
                                                            strokeWidth={
                                                                0.1
                                                            }
                                                        />
                                                    ) : (
                                                        <FiArrowLeftCircle
                                                            size={60}
                                                            strokeWidth={
                                                                0.5
                                                            }
                                                            onClick={() =>
                                                                previous()
                                                            }
                                                        />
                                                    )}

                                                    {clickSlider === 2 ? (
                                                        <FiArrowRightCircle
                                                            strokeWidth={
                                                                0.1
                                                            }
                                                            size={60}
                                                        />
                                                    ) : (
                                                        <FiArrowRightCircle
                                                            strokeWidth={
                                                                0.5
                                                            }
                                                            size={60}
                                                            onClick={() =>
                                                                next()
                                                            }
                                                        />
                                                    )}
                                                </>
                                            )}
                                        </div>
                                    </div>
                                )}
                                {yacht.image ? (
                                    yacht.image
                                        .slice(0, 3)
                                        .map((image, count) => {
                                            return (
                                                <div
                                                    key={count}
                                                    className={
                                                        styles.carousel_yacht_slider
                                                    }
                                                    style={
                                                        yacht.image.length > 1
                                                            ? clickSlider ===
                                                              count
                                                                ? {
                                                                    width: '75%',
                                                                }
                                                                : {
                                                                    width: '25%',
                                                                }
                                                            : { width: '100%' }
                                                    }
                                                >
                                                    <MediaDetector
                                                        mediaUrl={
                                                            image.sourceUrl
                                                                ? image.sourceUrl
                                                                : null
                                                        }
                                                        altText={
                                                            image.sourceUrl
                                                                ? image.altText
                                                                : image.title
                                                        }
                                                        title={image.title}
                                                        imageLayout="fill"
                                                        imageObjectFit="cover"
                                                        imageObjectPosition="center"
                                                    />

                                                    {yacht.image.length > 1 && (
                                                        <div
                                                            className={
                                                                styles.bottom_information
                                                            }
                                                        >
                                                            <div
                                                                className={
                                                                    styles.count_title
                                                                }
                                                            >
                                                                {clickSlider ===
                                                                    count && (
                                                                    <p>
                                                                        {clickSlider +
                                                                            1}{' '}
                                                                        /{' '}
                                                                        <span>
                                                                            3
                                                                        </span>
                                                                    </p>
                                                                )}
                                                                <h3>
                                                                    THE{' '}
                                                                    {
                                                                        yacht.title
                                                                    }
                                                                    :{' '}
                                                                    {
                                                                        image.yachtType
                                                                    }
                                                                </h3>
                                                            </div>

                                                            {clickSlider ===
                                                                count && (
                                                                <div
                                                                    className={
                                                                        styles.bar
                                                                    }
                                                                >
                                                                    <div
                                                                        className={
                                                                            styles.prev
                                                                        }
                                                                    >
                                                                        {clickSlider ===
                                                                        0 ? (
                                                                                <p>
                                                                                PREV
                                                                                </p>
                                                                            ) : (
                                                                                <p
                                                                                    onClick={() =>
                                                                                        previous()
                                                                                    }
                                                                                >
                                                                                PREV
                                                                                </p>
                                                                            )}
                                                                    </div>
                                                                    <div
                                                                        className={
                                                                            styles.progress
                                                                        }
                                                                    >
                                                                        <span
                                                                            style={
                                                                                clickSlider ===
                                                                                index
                                                                                    ? {
                                                                                        width: `${
                                                                                            (clickSlider +
                                                                                                  1) *
                                                                                              33.33
                                                                                        }%`,
                                                                                    }
                                                                                    : {
                                                                                        width: '0',
                                                                                    }
                                                                            }
                                                                        ></span>
                                                                    </div>
                                                                    <div
                                                                        className={
                                                                            styles.next
                                                                        }
                                                                    >
                                                                        {clickSlider ===
                                                                        2 ? (
                                                                                <p>
                                                                                NEXT
                                                                                </p>
                                                                            ) : (
                                                                                <p
                                                                                    onClick={() =>
                                                                                        next()
                                                                                    }
                                                                                >
                                                                                NEXT
                                                                                </p>
                                                                            )}
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })
                                ) : (
                                    <div
                                        className={styles.carousel_yacht_slider}
                                        style={{ width: '100%' }}
                                    >
                                        <MediaDetector
                                            mediaUrl={'background'}
                                            title={yacht.title}
                                            altText={yacht.title}
                                            imageLayout="fill"
                                            imageObjectFit="cover"
                                            imageObjectPosition="center"
                                        />
                                    </div>
                                )}
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}
