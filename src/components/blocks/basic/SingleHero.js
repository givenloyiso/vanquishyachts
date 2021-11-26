// IMPORT NEXT JS / THIRD PARTY
import Link from 'next/link';

// IMPORT MIXED COMPONENTS
import styles from '@styles/components/Blocks.module.scss';
import MediaDetector from '@components/blocks/unique/MediaDetector';

export default function SingleHero({
    mediaUrl,
    altText,
    title,
    title_second,
    url_second,
    stripeTitle,
    videoAutoPlay,
}) {
    if (!title && !title_second && !mediaUrl) {
        return null;
    }

    return (
        <div className={styles.basic_block_single_hero_section}>
            <div className={styles.left_vertical_style_line}>
                <div></div>
                <span>{stripeTitle}</span>
            </div>

            <MediaDetector
                videoAutoPlay={videoAutoPlay}
                mediaUrl={mediaUrl}
                altText={altText}
                title={title}
            />

            <div className={styles.content_wrap}>
                <h1>{title}</h1>
                <Link href={url_second}>{title_second}</Link>
            </div>
        </div>
    );
}
