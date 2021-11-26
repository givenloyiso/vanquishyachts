// NEXT JS / THIRD PARTY IMPORT
import { useState } from 'react';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';

//IMPORT MIXED COMPONENTS
import styles from '@styles/components/Blocks.module.scss';
import Button from '@components/blocks/button/Button';
import MediaDetector from '@components/blocks/unique/MediaDetector';

export default function SliderLocationCharters({
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
}) {
    const [clickSlider, setClickSlider] = useState(1);
    const count = dataArray.length;

    const previous = () => {
        setClickSlider(clickSlider === 0 ? 1 : clickSlider - 1);
    };

    const next = () => {
        setClickSlider(clickSlider === count - 1 ? 0 : clickSlider + 1);
    };

    if (!Array.isArray(dataArray) || count <= 0) {
        return null;
    }

    return (
        <div
            id={`Slider_${
                title ? title.split(' ').join('_') : 'Charters_Locations'
            }`}
            className={styles.unique_slider_charter_section}
        >
            <div className={styles.left_vertical_style_line}>
                <div></div>
                <span>{stripeTitle ? stripeTitle : 'Discover our World'}</span>
            </div>

            <MediaDetector
                mediaUrl={mediaUrl}
                title={title}
                altText={altText}
            />
            <div className={styles.slider_wrapper}>
                <div className={styles.top_slider_wrapper}>
                    <div className={styles.card_container}>
                        {dataArray &&
                            dataArray.length > 0 &&
                            dataArray
                                .slice(0, clickSlider + 2)
                                .map((location) => {
                                    return (
                                        <div
                                            key={location.id}
                                            className={styles.card}
                                        >
                                            <div className={styles.image}>
                                                <MediaDetector
                                                    title={title}
                                                    mediaUrl={
                                                        location.CF_Location &&
                                                        location.CF_Location
                                                            .featuredImage
                                                            ? location
                                                                .CF_Location
                                                                .featuredImage
                                                                .sourceUrl
                                                            : null
                                                    }
                                                    altText={
                                                        location.CF_Location &&
                                                        location.CF_Location
                                                            .featuredImage
                                                            ? location
                                                                .CF_Location
                                                                .featuredImage
                                                                .altText
                                                            : title
                                                    }
                                                    imageLayout="fill"
                                                    imageObjectFit="cover"
                                                    imageObjectPosition="center"
                                                />
                                            </div>
                                            <div className={styles.button}>
                                                <Button
                                                    title={location.title}
                                                    url={`/charters/${location.slug}`}
                                                    position={btnPosition}
                                                    style="6"
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
                            <span className="text-block">
                                {textBlock ? textBlock : 'Charter'}
                            </span>
                            <h2>
                                {title}
                                <span>.</span>
                            </h2>
                        </div>
                    </div>
                    <div className={styles.right_content}>
                        <div className={styles.wrap}>
                            <div className={styles.icons}>
                                {dataArray && dataArray.length > 3 && (
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
                                                        : 'Charters_Location'
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
                                                        : 'Charters_Location'
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
