// NEXT JS / THIRD PARTY IMPORT
import { useState, useEffect, useRef } from 'react';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';

//IMPORT MIXED COMPONENTS
import styles from '@styles/components/Blocks.module.scss';
import Button from '@components/blocks/button/Button';
import MediaDetector from '@components/blocks/unique/MediaDetector';

export default function SliderConcept({
    mediaUrl,
    altText,
    stripeTitle,
    textBlock,
    title,
    dataArray,
    btnTitle,
    btnUrl,
    btnStyle,
    btnPosition,
    content,
    gradient_textBlock,
    gradient_title,
    gradient_paragraph,
}) {
    const cn = (...classNames) => classNames.join(' ');
    const [clickSlider, setClickSlider] = useState(0);
    const count = dataArray.length;
    const eventsRef = useRef(0);

    const previous = () => {
        setClickSlider(clickSlider === 0 ? 1 : clickSlider - 1);
    };

    const next = () => {
        setClickSlider(clickSlider === count - 1 ? 0 : clickSlider + 1);
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
                var eventCount = 1;
            } else if (widthEvents > 766 && widthEvents < 1400) {
                var eventCount = 2;
            } else {
                var eventCount = 3;
            }
        } else {
            if (width < 767) {
                var eventCount = 1;
            } else if (width > 766 && width < 1400) {
                var eventCount = 2;
            } else {
                var eventCount = 3;
            }
        }

        return eventCount;
    };

    if (!Array.isArray(dataArray) || count <= 0) {
        return null;
    }

    return (
        <div
            id={`Slider_${title ? title.split(' ').join('_') : 'Concept'}`}
            ref={eventsRef}
            className={styles.unique_slider_concept_section}
        >
            <div className={styles.left_vertical_style_line}>
                <div></div>
                <span>{stripeTitle ? stripeTitle : 'Discover our World'}</span>
            </div>

            <MediaDetector
                title={title}
                mediaUrl={mediaUrl}
                altText={altText}
            />

            <div className={styles.gradient_block_wrapper}>
                <span className="text-block">{gradient_textBlock}</span>
                <h3>{gradient_title}.</h3>
                <p dangerouslySetInnerHTML={{ __html: gradient_paragraph }}></p>
            </div>
            <div className={styles.slider_wrapper}>
                <div className={styles.top_slider_wrapper}>
                    <div className={styles.card_container}>
                        {dataArray &&
                            dataArray.length > 0 &&
                            dataArray
                                .slice(0, clickSlider + sliderResize())
                                .map((concept, index) => {
                                    return (
                                        <div
                                            key={concept.id}
                                            className={
                                                clickSlider === index
                                                    ? cn(
                                                        styles.card,
                                                        styles.cardActive
                                                    )
                                                    : styles.card
                                            }
                                        >
                                            <div className={styles.image}>
                                                <MediaDetector
                                                    title={concept.title}
                                                    mediaUrl={
                                                        concept.CF_Concept
                                                            .section1
                                                            .imageOrVideo
                                                            .fileType ===
                                                            'video' &&
                                                        concept.CF_Concept
                                                            .section1
                                                            .imageOrVideo.video
                                                            ? concept.CF_Concept
                                                                .section1
                                                                .imageOrVideo
                                                                .video
                                                                .mediaItemUrl
                                                            : concept.CF_Concept
                                                                .section1
                                                                .imageOrVideo
                                                                .image
                                                                ? concept.CF_Concept
                                                                    .section1
                                                                    .imageOrVideo
                                                                    .image
                                                                    .sourceUrl
                                                                : null
                                                    }
                                                    altText={
                                                        concept.CF_Concept
                                                            .section1
                                                            .imageOrVideo
                                                            .fileType ===
                                                            'video' &&
                                                        concept.CF_Concept
                                                            .section1
                                                            .imageOrVideo.video
                                                            ? concept.CF_Concept
                                                                .section1
                                                                .imageOrVideo
                                                                .video.title
                                                            : concept.CF_Concept
                                                                .section1
                                                                .imageOrVideo
                                                                .image
                                                                ? concept.CF_Concept
                                                                    .section1
                                                                    .imageOrVideo
                                                                    .image.altText
                                                                : null
                                                    }
                                                    imageLayout="fill"
                                                    imageObjectFit="cover"
                                                    imageObjectPosition="center"
                                                />
                                            </div>
                                            <div className={styles.button}>
                                                <Button
                                                    title={concept.title}
                                                    url={`/models/concept/${concept.slug}`}
                                                    style="3"
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                    </div>
                </div>
                <div className={styles.bottom_information_wrapper}>
                    <div className={styles.left_content}>
                        <div className={styles.title_wrap}>
                            <span className="text-block">{textBlock}</span>
                            <h2>
                                {title}
                                <span>.</span>
                            </h2>
                        </div>
                    </div>
                    <div className={styles.right_content}>
                        <div className={styles.wrap}>
                            <div className={styles.icons}>
                                {dataArray && dataArray.length > 2 && (
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
                                                        ? title
                                                            .split(' ')
                                                            .join('_')
                                                        : 'Concept'
                                                }`}
                                                size={45}
                                                strokeWidth={0.5}
                                                onClick={() => previous()}
                                            />
                                        )}

                                        {clickSlider === count - 1 ? (
                                            <FiArrowRightCircle
                                                strokeWidth={0.1}
                                                size={45}
                                            />
                                        ) : (
                                            <FiArrowRightCircle
                                                id={`Button_Next_${
                                                    title
                                                        ? title
                                                            .split(' ')
                                                            .join('_')
                                                        : 'Concept'
                                                }`}
                                                strokeWidth={0.5}
                                                size={45}
                                                onClick={() => next()}
                                            />
                                        )}
                                    </>
                                )}
                            </div>
                            <Button
                                title={btnTitle}
                                url={btnUrl}
                                style={btnStyle}
                                position={btnPosition}
                            />
                        </div>
                        <p dangerouslySetInnerHTML={{ __html: content }}></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
