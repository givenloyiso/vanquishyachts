// NEXT JS / THIRD PARTY IMPORT
import React, { useEffect, useRef, useState } from 'react';
import MediaDetector from '@components/blocks/unique/MediaDetector';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';

//IMPORT MIXED COMPONENTS
import styles from '@styles/pages/News.module.scss';
import Button from '@components/blocks/button/Button';

export default function SliderRelatedArticles({ dataArray }) {
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
            let sliderWidth = slider.current.clientWidth + 22;
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
        <div id="Slider_Related_Articles" className={styles.related_articles}>
            <div className={styles.navigation}>
                {count === 1 ? (
                    <FiArrowLeftCircle size={45} strokeWidth={0.1} />
                ) : (
                    <FiArrowLeftCircle
                        id="Button_Prev_Related_Articles"
                        size={45}
                        strokeWidth={0.6}
                        onClick={prev}
                    />
                )}

                {count === max - 2 ? (
                    <FiArrowRightCircle strokeWidth={0.1} size={45} />
                ) : (
                    <FiArrowRightCircle
                        id="Button_Next_Related_Articles"
                        strokeWidth={0.6}
                        size={45}
                        onClick={next}
                    />
                )}
            </div>
            <div className={styles.news_related_grid}>
                <h2>
                    Related Articles<span>.</span>
                </h2>
                <div className={styles.wrapper}>
                    {dataArray &&
                        dataArray.length > 0 &&
                        dataArray.map((article) => {
                            return (
                                <div
                                    className={styles.grid_box}
                                    key={article.postId}
                                    style={{
                                        transform: `translateX(-${tranform}px)`,
                                    }}
                                    ref={slider}
                                >
                                    <div className={styles.top_img}>
                                        <MediaDetector
                                            mediaUrl={
                                                article.CF_Article.imageOrVideo
                                                    .fileType === 'video' &&
                                                article.CF_Article.imageOrVideo
                                                    .video
                                                    ? article.CF_Article
                                                        .imageOrVideo.video
                                                        .mediaItemUrl
                                                    : article.CF_Article
                                                        .imageOrVideo.image
                                                        ? article.CF_Article
                                                            .imageOrVideo.image
                                                            .sourceUrl
                                                        : null
                                            }
                                            title={article.title}
                                            altText={
                                                article.CF_Article.imageOrVideo
                                                    .fileType === 'video' &&
                                                article.CF_Article.imageOrVideo
                                                    .video
                                                    ? article.CF_Article
                                                        .imageOrVideo.video
                                                        .title
                                                    : article.CF_Article
                                                        .imageOrVideo.image
                                                        ? article.CF_Article
                                                            .imageOrVideo.image
                                                            .altText
                                                        : null
                                            }
                                            imageLayout="fill"
                                            imageObjectFit="cover"
                                            imageObjectPosition="center"
                                        />
                                    </div>
                                    <div className={styles.bottom_content}>
                                        <div className={styles.content}>
                                            <h3>{article.title}</h3>

                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: article.excerpt,
                                                }}
                                            />
                                        </div>
                                        <Button
                                            title="read article"
                                            url={`/news/${encodeURIComponent(
                                                article.slug
                                            )}`}
                                            style="4"
                                        />
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}
