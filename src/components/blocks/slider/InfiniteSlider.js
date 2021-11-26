// NEXT JS / THIRD PARTY IMPORT
import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';

//IMPORT MIXED COMPONENTS
import styles from '@styles/components/Blocks.module.scss';
import Image from 'next/image';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';

export default function InfiniteSlider({ dataArray, title }) {
    //moet gevuld worden met dataArray
    const [orderArray, setOrderArray] = useState([]);
    const [transitionArray, setTransitionArray] = useState([]);
    const length = dataArray ? dataArray.length : false;
    if (!Array.isArray(dataArray) || length <= 0) {
        return null;
    }
    useEffect(() => {
        const newArray = [];

        dataArray.map((data, index) => {
            newArray.push(index);
        });

        setOrderArray(newArray);
    }, [dataArray]);

    const prev = () => {
        const newArray = orderArray.map((x) =>
            x === dataArray.length - 1 ? (x = 0) : x + 1
        );
        setOrderArray(newArray);
        checkOrderPrev();
    };

    const next = () => {
        const newArray = orderArray.map((x) =>
            x === 0 ? (x = dataArray.length - 1) : x - 1
        );
        setOrderArray(newArray);
        checkOrderNext();
    };

    const checkOrderNext = () => {
        const newArray = orderArray.map((x) =>
            x === 0 ? (x = 'unset') : (x = 'left 0.5s')
        );
        setTransitionArray(newArray);
    };

    const checkOrderPrev = () => {
        const newArray = orderArray.map((x) =>
            x === dataArray.length - 1 ? (x = 'unset') : (x = 'left 0.5s')
        );
        setTransitionArray(newArray);
    };

    let number = 120;

    return (
        <div
            id={`Slider_${title ? title.split(' ').join('_') : 'Infinite'}`}
            className={styles.infinite_slider}
        >
            <div className={styles.infinite_slider_nav}>
                <FiArrowLeftCircle
                    id={`Button_Prev_${title ? title.split(' ').join('_') : 'Infinite'}`}
                    size={45}
                    strokeWidth={0.6}
                    onClick={prev}
                />
                <h3>
                    {title ? title : 'Gallery'}
                    <span>.</span>
                </h3>
                <FiArrowRightCircle
                    id={`Button_Next_${title ? title.split(' ').join('_') : 'Infinite'}`}
                    size={45}
                    strokeWidth={0.6}
                    onClick={next}
                />
            </div>
            <Fade left>
                <div>
                    <div
                        className={styles.infinite_slider_wrapper}
                        style={{
                            transform: `translateX(-${number}vw)`,
                        }}
                    >
                        {dataArray.map((image, index, key) => {
                            return (
                                <div
                                    key={key}
                                    className={styles.infinite_slider_item}
                                    style={{
                                        left: ` ${orderArray[index] * 70}vw`,
                                        transition: `${transitionArray[index]}`,
                                    }}
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
                            );
                        })}
                    </div>
                </div>
            </Fade>
        </div>
    );
}
