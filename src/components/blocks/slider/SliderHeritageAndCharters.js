// NEXT JS / THIRD PARTY IMPORT
import React, { useState } from 'react';
import Link from 'next/link';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';

//IMPORT MIXED COMPONENTS
import styles from '@styles/components/Blocks.module.scss';
import MediaDetector from '@components/blocks/unique/MediaDetector';
import Button from '@components/blocks/button/Button';

export default function SliderHeritageAndCharters({ title, dataArray, style }) {
    const [clickSlider, setClickSlider] = useState(0);
    const count = dataArray ? dataArray.length : false;

    const prev = () => {
        setClickSlider(clickSlider === 0 ? 0 : clickSlider - 1);
    };

    const next = () => {
        setClickSlider(clickSlider === count - 1 ? count - 1 : clickSlider + 1);
    };

    const handleClickName = (e) => {
        setClickSlider(e);
    };

    if (!Array.isArray(dataArray) || count <= 0) {
        return null;
    }
    return (
        <div
            id={`Slider_${
                title ? title.split(' ').join('_') : 'For_Heritage_Charters'
            }`}
            className={styles.slider_heritage_charter_yachts_section}
        >
            <div className={styles.slider_yachts_head}>
                {count <= 0 === false && (
                    <>
                        {clickSlider === 0 ? (
                            <FiArrowLeftCircle size={45} strokeWidth={0.1} />
                        ) : (
                            <FiArrowLeftCircle
                                id={`Button_Prev_${
                                    title
                                        ? title.split(' ').join('_')
                                        : 'For_Heritage_Charters'
                                }`}
                                size={45}
                                strokeWidth={0.5}
                                onClick={prev}
                            />
                        )}
                    </>
                )}
                <span>
                    <h2>
                        {title}
                        <span>.</span>
                    </h2>
                    <br />

                    {style === 'charters' && (
                        <Link href="/charters">
                            OR GO BACK TO ALL CHARTER PLACES
                        </Link>
                    )}
                </span>

                {count <= 0 === false && (
                    <>
                        {clickSlider === count - 1 ? (
                            <FiArrowRightCircle strokeWidth={0.1} size={45} />
                        ) : (
                            <FiArrowRightCircle
                                id={`Button_Next_${
                                    title
                                        ? title.split(' ').join('_')
                                        : 'For_Heritage_Charters'
                                }`}
                                strokeWidth={0.5}
                                size={45}
                                onClick={next}
                            />
                        )}
                    </>
                )}
            </div>
            <div className={styles.slider_yachts_names}>
                {dataArray.map((yacht, key) => {
                    return (
                        <>
                            <h3
                                key={yacht.yachtId}
                                onClick={() => handleClickName(key)}
                                className={
                                    clickSlider === key ? styles.active : ''
                                }
                            >
                                {yacht.title}
                            </h3>
                        </>
                    );
                })}
            </div>
            <div className={styles.slider_yachts_carousel}>
                <div
                    className={styles.slider_yachts_slider}
                    style={{
                        transform: `translateX(-${clickSlider * 72.3}vw)`,
                    }}
                >
                    {dataArray.map((yacht) => {
                        return (
                            <div
                                key={yacht.id}
                                className={styles.slider_single_yacht}
                            >
                                <div className={styles.slider_yacht_image}>
                                    {style === 'charters' && (
                                        <Button
                                            title="Charter"
                                            url="#charter"
                                        />
                                    )}

                                    <MediaDetector
                                        title={yacht.title}
                                        mediaUrl={
                                            style === 'charters'
                                                ? yacht.CF_Charter
                                                    .specifications.image
                                                    ? yacht.CF_Charter
                                                        .specifications.image
                                                        .sourceUrl
                                                    : null
                                                : yacht.CF_Heritage.section1
                                                    .imageOrVideo.fileType ===
                                                      'video' &&
                                                  yacht.CF_Heritage.section1
                                                      .imageOrVideo.video
                                                    ? yacht.CF_Heritage.section1
                                                        .imageOrVideo.video
                                                        .mediaItemUrl
                                                    : yacht.CF_Heritage.section1
                                                        .imageOrVideo.image
                                                        ? yacht.CF_Heritage.section1
                                                            .imageOrVideo.image
                                                            .sourceUrl
                                                        : null
                                        }
                                        altText={
                                            style === 'charters'
                                                ? yacht.CF_Charter
                                                    .specifications.image
                                                    ? yacht.CF_Charter
                                                        .specifications.image
                                                        .altText
                                                    : null
                                                : yacht.CF_Heritage.section1
                                                    .imageOrVideo.fileType ===
                                                      'video' &&
                                                  yacht.CF_Heritage.section1
                                                      .imageOrVideo.video
                                                    ? yacht.CF_Heritage.section1
                                                        .imageOrVideo.video.title
                                                    : yacht.CF_Heritage.section1
                                                        .imageOrVideo.image
                                                        ? yacht.CF_Heritage.section1
                                                            .imageOrVideo.image
                                                            .altText
                                                        : null
                                        }
                                        objectFit="contain"
                                    />
                                </div>
                                <div className={styles.slider_yacht_content}>
                                    <div className={styles.slider_yacht_title}>
                                        {style === 'charters' ? (
                                            <h3>{yacht.title}</h3>
                                        ) : (
                                            <Link
                                                href={`/models/heritage/${yacht.slug}`}
                                                passHref
                                            >
                                                <h3
                                                    style={{
                                                        cursor: 'pointer',
                                                    }}
                                                >
                                                    {yacht.title}
                                                </h3>
                                            </Link>
                                        )}
                                    </div>

                                    {style === 'charters' ? (
                                        <div className={styles.wrap}>
                                            <div className={styles.speed}>
                                                <h4>Speed</h4>
                                                {`${yacht.CF_Charter.specifications.speed} + knots(in)`}
                                            </div>
                                            <div className={styles.guest}>
                                                <h4>Guests</h4>
                                                {
                                                    yacht.CF_Charter
                                                        .specifications.guests
                                                }
                                            </div>
                                            <div className={styles.length}>
                                                <h4>Length</h4>
                                                {`${yacht.CF_Charter.specifications.length.meters} m / ${yacht.CF_Charter.specifications.length.feet} ft`}
                                            </div>
                                            <div className={styles.beam}>
                                                <h4>Beam</h4>
                                                {`${yacht.CF_Charter.specifications.beam.meters} m / ${yacht.CF_Charter.specifications.beam.feet} ft`}
                                            </div>
                                            <div className={styles.price}>
                                                <h4>Price Include Vat</h4>
                                                <ul>
                                                    {yacht.CF_Charter.pricing.map(
                                                        (price, key) => (
                                                            <li
                                                                key={key}
                                                                dangerouslySetInnerHTML={{
                                                                    __html: `${price.timePeriod} ${price.price}`,
                                                                }}
                                                            />
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    ) : (
                                        <p>
                                            {
                                                yacht.CF_Heritage.section1
                                                    .paragraph
                                            }
                                        </p>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
