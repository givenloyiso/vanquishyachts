// NEXT JS / THIRD PARTY IMPORT
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

//IMPORT MIXED COMPONENTS
import styles from '@styles/components/Blocks.module.scss';
import MediaDetector from '@components/blocks/unique/MediaDetector';
import Counter from '@components/blocks/unique/Counter';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';

export default function SliderCharterOverview({
    title,
    textBlock,
    paragraph,
    dataArray,
}) {
    const slider = useRef(0);
    const start = 1;
    const min = 1;
    const max = dataArray.length;

    const [count, setCount] = useState(start);
    const [tranform, setTransform] = useState(start - 1);

    //CHECK SIZE AND change when counter hits
    useEffect(() => {
        //change when resize
        window.addEventListener('resize', slide);
        //What happens with the slider
        const slide = () => {
            let sliderWidth = slider.current.clientWidth + 42;
            setTransform((count - 1) * sliderWidth);
        };
        //change when counter hits
        slide();
        return () => {
            window.removeEventListener('resize', slide);
        };
    }, [count]);

    //When you press next this happens
    function next() {
        let i;
        count === max ? (i = 0) : (i = 1);
        setCount((prevCount) => prevCount + i);
    }

    //When you press back this happens
    function prev() {
        let i;
        count === min ? (i = 0) : (i = 1);
        setCount((prevCount) => prevCount - i);
    }

    if (!Array.isArray(dataArray) || max <= 0) {
        return null;
    }

    return (
        <div
            id={`Slider_${title ? title.split(' ').join('_') : 'Charters_Overview'}`}
            className={styles.slider_charter_locations_section}
        >
            <div className={styles.slider_charter_information}>
                <Counter number={count} prev={prev} next={next} max={max} />
                <h2>
                    {title}
                    <span>.</span>
                </h2>
                <p className="text-block">{textBlock}</p>
                <p>{paragraph}</p>
            </div>
            <div className={styles.slider_charter_locations}>
                <div className={styles.slider_charter_locations_wrapper}>
                    {count === 1 ? (
                        <FiArrowLeftCircle size={45} strokeWidth={0.1} />
                    ) : (
                        <FiArrowLeftCircle
                            id={`Button_Prev_${title ? title.split(' ').join('_') : 'Charters_Overview'}`}
                            size={45}
                            strokeWidth={0.6}
                            onClick={prev}
                        />
                    )}

                    {count === max ? (
                        <FiArrowRightCircle strokeWidth={0.1} size={45} />
                    ) : (
                        <FiArrowRightCircle
                            id={`Button_Next_${title ? title.split(' ').join('_') : 'Charters_Overview'}`}
                            strokeWidth={0.6}
                            size={45}
                            onClick={next}
                        />
                    )}
                    {dataArray.map((location, key) => {
                        return (
                            <Link
                                key={key}
                                href={`/charters/${location.slug}`}
                                passHref
                            >
                                <a>
                                    <div
                                        ref={slider}
                                        className={
                                            styles.slider_charter_location
                                        }
                                        style={{
                                            transform: `translateX(-${tranform}px)`,
                                        }}
                                    >
                                        <div
                                            className={
                                                styles.slider_charter_location_image
                                            }
                                        >
                                            <MediaDetector
                                                title={location.title}
                                                mediaUrl={
                                                    location.CF_Form.formImage
                                                        ? location.CF_Form
                                                            .formImage
                                                            .sourceUrl
                                                        : null
                                                }
                                                altText={
                                                    location.CF_Form.formImage
                                                        ? location.CF_Form
                                                            .formImage.altText
                                                        : null
                                                }
                                                objectFit="contain"
                                            />
                                        </div>
                                        <div
                                            className={
                                                styles.slider_charter_location_name
                                            }
                                        >
                                            <h3>{location.title}</h3>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
