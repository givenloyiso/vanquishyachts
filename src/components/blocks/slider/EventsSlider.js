// NEXT JS / THIRD PARTY IMPORT
import { useState, useEffect, useRef } from 'react';

// import Carousel from 'react-elastic-carousel';
import MediaDetector from '@components/blocks/unique/MediaDetector';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';

//IMPORT MIXED COMPONENTS
import styles from '@styles/pages/Events.module.scss';
import Button from '@components/blocks/button/Button';

export default function EventsSlider({ title, dataArray }) {
    const event = useRef(0);
    const start = 1;
    const min = 1;
    const max = dataArray.length;

    const [count, setCount] = useState(start);
    const [tranform, setTransform] = useState(start - 1);

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

    //CHECK SIZE AND change when counter hits
    useEffect(() => {
        //change when resize
        window.addEventListener('resize', slide);
        //What happens with the slider
        const slide = () => {
            let sliderWidth = event.current.clientWidth + 22;
            setTransform((count - 1) * sliderWidth);
        };
        //change when counter hits
        slide();
        return () => {
            window.removeEventListener('resize', slide);
        };
    }, [count]);

    if (!Array.isArray(dataArray) || max <= 0) {
        return null;
    }

    return (
        <div
            id={`Slider_${title ? title.split(' ').join('_') : 'Event'}`}
            className={styles.events_slider_section}
        >
            <div className={styles.navigation}>
                {count === 1 ? (
                    <FiArrowLeftCircle size={45} strokeWidth={0.1} />
                ) : (
                    <FiArrowLeftCircle
                        id={`Button_Prev_${
                            title ? title.split(' ').join('_') : 'Event'
                        }`}
                        size={45}
                        strokeWidth={0.6}
                        onClick={prev}
                    />
                )}

                {count === max - 1 ? (
                    <FiArrowRightCircle strokeWidth={0.1} size={45} />
                ) : (
                    <FiArrowRightCircle
                        id={`Button_Next_${
                            title ? title.split(' ').join('_') : 'Event'
                        }`}
                        strokeWidth={0.6}
                        size={45}
                        onClick={next}
                    />
                )}
            </div>
            <div className={styles.events_related_grid}>
                <h3>
                    {title}
                    <span>.</span>
                </h3>
                <div className={styles.wrapper}>
                    {dataArray &&
                        dataArray.length > 0 &&
                        dataArray.map((slider) => {
                            return (
                                <>
                                    <div
                                        className={styles.grid_box}
                                        key={slider.id}
                                        style={{
                                            transform: `translateX(-${tranform}px)`,
                                        }}
                                        ref={event}
                                    >
                                        <div className={styles.top_img}>
                                            <MediaDetector
                                                mediaUrl={
                                                    slider.CF_SingleEvent
                                                        .eventInformation
                                                        .imageOrVideo
                                                        .fileType === 'video' &&
                                                    slider.CF_SingleEvent
                                                        .eventInformation
                                                        .imageOrVideo.video
                                                        ? slider.CF_SingleEvent
                                                            .eventInformation
                                                            .imageOrVideo
                                                            .video
                                                            .mediaItemUrl
                                                        : slider.CF_SingleEvent
                                                            .eventInformation
                                                            .imageOrVideo
                                                            .image
                                                            ? slider.CF_SingleEvent
                                                                .eventInformation
                                                                .imageOrVideo
                                                                .image.sourceUrl
                                                            : null
                                                }
                                                title={slider.title}
                                                altText={
                                                    slider.CF_SingleEvent
                                                        .eventInformation
                                                        .imageOrVideo
                                                        .fileType === 'video' &&
                                                    slider.CF_SingleEvent
                                                        .eventInformation
                                                        .imageOrVideo.video
                                                        ? slider.CF_SingleEvent
                                                            .eventInformation
                                                            .imageOrVideo
                                                            .video.title
                                                        : slider.CF_SingleEvent
                                                            .eventInformation
                                                            .imageOrVideo
                                                            .image
                                                            ? slider.CF_SingleEvent
                                                                .eventInformation
                                                                .imageOrVideo
                                                                .image.altText
                                                            : null
                                                }
                                                imageLayout="fill"
                                                imageObjectFit="cover"
                                                imageObjectPosition="center"
                                            />
                                        </div>
                                        <div className={styles.bottom_content}>
                                            <div className={styles.date}>
                                                <p className="text-block">
                                                    {new Date(
                                                        slider.CF_SingleEvent.eventInformation.date
                                                    ).toLocaleDateString(
                                                        'nl-NL',
                                                        {
                                                            month: 'short',
                                                        }
                                                    )}
                                                </p>
                                                <p className={styles.day}>
                                                    {new Date(
                                                        slider.CF_SingleEvent.eventInformation.date
                                                    ).toLocaleDateString(
                                                        'nl-NL',
                                                        {
                                                            day: '2-digit',
                                                        }
                                                    )}
                                                </p>
                                            </div>
                                            <div className={styles.info}>
                                                <h3>{slider.title}</h3>
                                                <p
                                                    className={styles.info_text}
                                                    dangerouslySetInnerHTML={{
                                                        __html: slider
                                                            .CF_SingleEvent
                                                            .eventInformation
                                                            .paragraph,
                                                    }}
                                                />
                                                <Button
                                                    title="read event"
                                                    url={`/events/${encodeURIComponent(
                                                        slider.slug
                                                    )}`}
                                                    style="4"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}
