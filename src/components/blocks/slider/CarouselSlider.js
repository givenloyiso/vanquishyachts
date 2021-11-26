//IMPORT NEXT JS / THIRD PARTY
import { useState } from 'react';
import Image from 'next/image';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';

// IMPORT CUSTOM BLOCK COMPONENTS
import styles from '@styles/components/Blocks.module.scss';

export default function CarouselSlider({ dataArray, title }) {
    const cn = (...classNames) => classNames.join(' ');
    const [sliderClick, setSliderClick] = useState(0);
    const [animationSlide, setAnimationSlide] = useState(false);
    const length = dataArray ? dataArray.length : false;

    const previous = () => {
        setSliderClick(sliderClick === 0 ? length - 1 : sliderClick - 1);
        setAnimationSlide(0);
    };
    const next = () => {
        setSliderClick(sliderClick === length - 1 ? 0 : sliderClick + 1);
        setAnimationSlide(1);
    };

    if (!Array.isArray(dataArray) || length <= 0) {
        return null;
    }

    return (
        <div id={`slider_${title}`} className={styles.carousel_slider_section}>
            <div className={styles.top_details}>
                <FiArrowLeftCircle
                    size={45}
                    strokeWidth={0.5}
                    onClick={previous}
                />
                <h3>
                    {title ? title : 'Gallery'}
                    <span>.</span>
                </h3>
                <FiArrowRightCircle
                    className="btnClick"
                    strokeWidth={0.5}
                    size={45}
                    onClick={next}
                />
                <span className={styles.counter}>
                    {sliderClick + 1}/{length}
                </span>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.inner}>
                    {dataArray.map((image, key) => {
                        return (
                            <>
                                {sliderClick === key ? (
                                    <div
                                        className={
                                            animationSlide === 1
                                                ? cn(
                                                    styles.slider,
                                                    styles.next_slide_first
                                                )
                                                : styles.slider ||
                                                  animationSlide === 0
                                                    ? cn(
                                                        styles.slider,
                                                        styles.previous_slide_first
                                                    )
                                                    : styles.slider
                                        }
                                        style={{
                                            transform: 'translateX(12.5%)',
                                        }}
                                        key={key}
                                        id={key}
                                    >
                                        <Image
                                            src={
                                                image.sourceUrl
                                                    ? image.sourceUrl
                                                    : null
                                            }
                                            alt=""
                                            layout="fill"
                                            objectFit="cover"
                                            objectPosition="center"
                                        />
                                    </div>
                                ) : sliderClick + 1 === key ? (
                                    <div
                                        className={
                                            animationSlide === 1
                                                ? cn(
                                                    styles.slider,
                                                    styles.next_slide_second
                                                )
                                                : styles.slider ||
                                                  animationSlide === 0
                                                    ? cn(
                                                        styles.slider,
                                                        styles.previous_slide_second
                                                    )
                                                    : styles.slider
                                        }
                                        style={{
                                            transform: 'translateX(115.5%)',
                                        }}
                                        key={key}
                                        id={key}
                                    >
                                        <Image
                                            src={
                                                image.sourceUrl
                                                    ? image.sourceUrl
                                                    : null
                                            }
                                            alt={
                                                image.sourceUrl
                                                    ? image.altText
                                                    : title
                                            }
                                            layout="fill"
                                            objectFit="cover"
                                            objectPosition="center"
                                        />
                                    </div>
                                ) : sliderClick - 1 === key ? (
                                    <div
                                        className={
                                            animationSlide === 1
                                                ? cn(
                                                    styles.slider,
                                                    styles.next_slide_last
                                                )
                                                : styles.slider ||
                                                  animationSlide === 0
                                                    ? cn(
                                                        styles.slider,
                                                        styles.previous_slide_first
                                                    )
                                                    : styles.slider
                                        }
                                        style={{
                                            transform: 'translateX(-90.5%)',
                                        }}
                                        key={key}
                                        id={key}
                                    >
                                        <Image
                                            src={
                                                image.sourceUrl
                                                    ? image.sourceUrl
                                                    : null
                                            }
                                            alt={
                                                image.sourceUrl
                                                    ? image.altText
                                                    : title
                                            }
                                            layout="fill"
                                            objectFit="cover"
                                            objectPosition="center"
                                        />
                                    </div>
                                ) : (
                                    ''
                                )}
                            </>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
