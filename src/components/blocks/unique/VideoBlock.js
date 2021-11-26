// IMPORT NEXT JS / THIRD PARTY
import React, { useState } from 'react';
import { GiPlayButton } from 'react-icons/gi';

// IMPORT MIXED COMPONENTS
import styles from '@styles/components/Blocks.module.scss';
import MediaDetector from '@components/blocks/unique/MediaDetector';

export default function VideoBlock({
    mediaUrl,
    altText,
    title,
    textBlock,
    videoPlaceholder,
    type,
}) {
    const [clickPlay, setClickPlay] = useState(false);

    const play = () => {
        setClickPlay(true);
    };

    const pause = () => {
        setClickPlay(false);
    };

    if (!mediaUrl) {
        return null;
    }

    return (
        <div className={styles.video_block_section}>
            <div className={styles.video_wrap} onClick={pause}>
                <MediaDetector
                    mediaUrl={mediaUrl}
                    altText={altText}
                    title={title}
                    videoAutoPlay={false}
                    videoControls={clickPlay}
                    videoPlaceholder={videoPlaceholder}
                />
            </div>

            {type === 'video' && clickPlay === false && (
                <div className={styles.video_text_wrap}>
                    <div className={styles.playbutton} onClick={play}>
                        <GiPlayButton size={18} />
                    </div>
                    {title && (
                        <>
                            <h3>
                                {title}
                                <span>.</span>
                            </h3>
                            <span className="text-block">{textBlock}</span>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}
