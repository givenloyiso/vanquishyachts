//IMPORT NEXT JS / THIRD PARTY
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';

//IMPORT MIXED COMPONENTS
import styles from '@styles/components/Blocks.module.scss';
import placeholder_image from 'public/static/images/placeholder.jpg';
import background_image from 'public/static/images/background.jpg';
import cover_image from 'public/static/images/cover.jpg';

// HOW TO USE
// <MediaDetector
// mediaUrl='media'
// title='title'
// altText={null}
// imageLayout='fill'
// imageObjectFit='contain'
// imageObjectPosition='center'
// videoAutoPlay='false'
// videoControls='false'
// videoPlaceholder=''
// />

export default function MediaDetector({
    mediaUrl,
    altText,
    title,
    imageLayout,
    imageObjectFit,
    imageObjectPosition,
    videoAutoPlay,
    videoControls,
    videoPlaceholder,
    animationName,
}) {
    const vidRef = useRef(null);

    if (mediaUrl && mediaUrl.length > 0 && mediaUrl.includes('vimeo')) {
        var bgVimeoVideo = mediaUrl;
    } else {
        switch (
            mediaUrl && mediaUrl.length > 0 ? mediaUrl.split('.').pop() : ''
        ) {
        case 'cover':
            var bgImg = cover_image;
            break;
        case 'background':
            var bgImg = background_image;
            break;
        case 'placeholder':
            var bgImg = placeholder_image;
            break;
        case 'png':
        case 'jpg':
        case 'jpeg':
            var bgImg = mediaUrl;
            break;
        case 'mp4':
            var bgVideo = mediaUrl;
            useEffect(() => {
                if (videoControls === true) {
                    vidRef.current.play();
                }

                if (videoControls === false) {
                    vidRef.current.pause();
                }
            }, [videoControls]);
            break;
        default:
            var bgImg = placeholder_image;
            break;
        }
    }

    return (
        <>
            {bgImg && (
                <Image
                    className={animationName}
                    src={bgImg}
                    alt={
                        altText
                            ? altText
                            : title
                                ? title
                                : 'Vanquish Yachts Image'
                    }
                    layout={imageLayout ? imageLayout : 'fill'}
                    objectFit={imageObjectFit ? imageObjectFit : 'cover'}
                    objectPosition={
                        imageObjectPosition ? imageObjectPosition : 'center'
                    }
                    // quality={100}
                    loading="eager"
                    priority
                />
            )}

            {bgVimeoVideo && (
                <div className={styles.vimeo_wrapper}>
                    <iframe
                        title={
                            altText
                                ? altText
                                : title
                                    ? title
                                    : 'Vanquish Yachts Video'
                        }
                        src={`${bgVimeoVideo}/?background=1&autoplay=1&loop=1&byline=0&title=0`}
                        frameBorder="0"
                        webkitallowfullscreen
                        mozallowfullscreen
                        allowFullScreen
                    ></iframe>
                </div>
            )}

            {bgVideo &&
                (videoAutoPlay === true ? (
                    <video
                        autoPlay="autoplay"
                        playsinline
                        webkit-playsinline
                        muted
                        loop
                        defaultMuted
                        preload="metadata"
                        className={styles.video}
                        poster={videoPlaceholder}
                        style={{ pointerEvent: 'none' }}
                        title={
                            altText
                                ? altText
                                : title
                                    ? title
                                    : 'Vanquish Yachts Video'
                        }
                    >
                        <source src={bgVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <video
                        preload="metadata"
                        className={styles.video}
                        title={
                            altText
                                ? altText
                                : title
                                    ? title
                                    : 'Vanquish Yachts Video'
                        }
                        ref={vidRef}
                        poster={videoPlaceholder}
                        controls="false"
                    >
                        <source src={bgVideo} type="video/mp4" />
                        Your browser does not support the video tag...
                    </video>
                ))}
        </>
    );
}
