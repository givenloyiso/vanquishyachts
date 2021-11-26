// NEXT JS / THIRD PARTY IMPORT
import { React, useState } from 'react';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';

//IMPORT MIXED COMPONENTS
import styles from '@styles/components/Blocks.module.scss';
import MediaDetector from '@components/blocks/unique/MediaDetector';

export default function AboutBlock({ textBlock, dataArray }) {
    const [clickSlider, setClickSlider] = useState(0);
    const count = dataArray.length;

    const previous = () => {
        setClickSlider(clickSlider === 0 ? 0 : clickSlider - 1);
    };

    const next = () => {
        setClickSlider(clickSlider === count - 1 ? 0 : clickSlider + 1);
    };

    if (!Array.isArray(dataArray) || count <= 0) {
        return null;
    }
    return (
        <div className={styles.about_block_section}>
            <span className="text-block">{textBlock}</span>
            <div className={styles.navigation}>
                {clickSlider === 0 ? (
                    <FiArrowLeftCircle size={60} strokeWidth={0.1} />
                ) : (
                    <FiArrowLeftCircle
                        size={60}
                        strokeWidth={0.5}
                        onClick={() => previous()}
                    />
                )}

                {clickSlider === count - 1 ? (
                    <FiArrowRightCircle strokeWidth={0.1} size={60} />
                ) : (
                    <FiArrowRightCircle
                        strokeWidth={0.5}
                        size={60}
                        onClick={() => next()}
                    />
                )}
            </div>
            {dataArray.map(
                (data, index) =>
                    clickSlider === index && (
                        <div className={styles.about_block_information}>
                            <div className={styles.about_block_text}>
                                <h3 className={styles.about_block_title}>
                                    {data.header}
                                </h3>

                                <div
                                    className={styles.about_block_content}
                                    dangerouslySetInnerHTML={{
                                        __html: data.paragraph,
                                    }}
                                ></div>
                            </div>
                            <div className={styles.about_block_image}>
                                <MediaDetector
                                    mediaUrl={
                                        data.image.sourceUrl
                                            ? data.image.sourceUrl
                                            : null
                                    }
                                    altText={
                                        data.image.sourceUrl
                                            ? data.image.altText
                                            : null
                                    }
                                    title={data.header ? data.header : null}
                                    imageLayout="fill"
                                    imageObjectFit="cover"
                                    imageObjectPosition="center"
                                />
                            </div>
                        </div>
                    )
            )}
            <div className={styles.about_block_nav}>
                {dataArray.map((data, index) => (
                    <span
                        key={index}
                        className={styles.about_block_nav_item}
                        style={
                            clickSlider === index
                                ? { fontFamily: 'AvenirBlack' }
                                : { fontFamily: '' }
                        }
                    >
                        {data.header}
                    </span>
                ))}
            </div>
        </div>
    );
}
