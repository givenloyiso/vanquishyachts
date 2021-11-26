//IMPORT NEXT JS / THIRD PARTY
import React from 'react';

// IMPORT CUSTOM COMPONENTS
import styles from '@styles/components/Blocks.module.scss';
import MediaDetector from '@components/blocks/unique/MediaDetector';

function GradientBlock({ textBlock, title, text, mediaUrl, altText }) {
    if (!mediaUrl && !title) {
        return null;
    }

    return (
        <div
            className={styles.gradient_block_section}
            style={mediaUrl === null ? { minHeight: '0' } : {}}
        >
            <div className={styles.gradient_block_wrapper}>
                <span className="text-block">{textBlock}</span>
                <h3>{title}.</h3>
                <p dangerouslySetInnerHTML={{ __html: text }}></p>
            </div>
            {mediaUrl && (
                <MediaDetector
                    mediaUrl={mediaUrl}
                    altText={altText}
                    title={title}
                />
            )}
        </div>
    );
}

export default GradientBlock;
