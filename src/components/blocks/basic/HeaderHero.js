// NEXT JS / THIRD PARTY IMPORT
import React, { useEffect } from 'react';
import gsap from 'gsap';

// IMPORT MIXED COMPONENTS
import styles from '@styles/components/Blocks.module.scss';
import Button from '@components/blocks/button/Button';
import MediaDetector from '@components/blocks/unique/MediaDetector';

export default function HeaderHero({
    mediaUrl,
    altText,
    title,
    content,
    btnTitle,
    btnUrl,
    btnStyle,
    btnPosition,
    stripeTitle,
    size,
    positionContent,
    videoAutoPlay,
}) {
    if (!title && !content && !mediaUrl) {
        return null;
    }

    const cn = (...classNames) => classNames.join(' ');

    switch (size) {
    case 'big':
        var switch_size = styles.hero_big;
        break;
    default:
        break;
    }

    switch (positionContent) {
    case 'left':
        var switch_content = styles.content_left;
        break;
    default:
        break;
    }

    useEffect(() => {
        gsap.from('.hero_animation', {
            duration: 1,
            opacity: 0,
            y: 100,
            ease: 'power4Out',
            delay: 0,
            stagger: {
                amount: 0.5,
            },
        });

        gsap.from('.hero_animation_stripe', {
            duration: 1,
            opacity: 0,
            height: 0,
            ease: 'power4Out',
            delay: 0,
        });

        gsap.from('.hero_animation_media', {
            duration: 1,
            ease: 'power4Out',
            delay: 0,
        });

        
    }, []);

    return (
        <div
            className={cn(styles.basic_block_header_hero_section, switch_size)}
        >
            <div className={styles.left_vertical_style_line}>
                <div className="hero_animation_stripe"></div>
                <span>{stripeTitle}</span>
            </div>

            <MediaDetector
                mediaUrl={mediaUrl}
                altText={altText}
                title={title}
                videoAutoPlay={videoAutoPlay}
                animationName="hero_animation_media"
            />

            <div className={cn(styles.content_wrap, switch_content)}>
                <h1 className="hero_animation">
                    {title}
                    <span>.</span>
                </h1>
                <p
                    className="hero_animation"
                    dangerouslySetInnerHTML={{ __html: content }}
                ></p>
                <div className="hero_animation">
                    <Button
                        title={btnTitle}
                        url={btnUrl}
                        style={btnStyle}
                        position={btnPosition}
                    />
                </div>
            </div>
        </div>
    );
}
