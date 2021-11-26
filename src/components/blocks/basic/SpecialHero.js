// NEXT JS / THIRD PARTY IMPORT
import React, { useState, useEffect, useRef } from 'react';
import Pulse from 'react-reveal/Pulse';

// IMPORT MIXED COMPONENTS
import styles from '@styles/components/Blocks.module.scss';
import Button from '@components/blocks/button/Button';
import MediaDetector from '@components/blocks/unique/MediaDetector';
import CountryBrandSwitch from '@components/blocks/unique/ContinentBrandSwitch';

export default function SpecialHeader({
    textBlock,
    title,
    boatTitle,
    boatImg,
    boatContent,
    boatContent2,
    btnStyle,
    btnPosition,
    boatBtnTitle,
    boatBtnUrl,
}) {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [offsetposition, setOffsetposition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    const item = useRef(0);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        let itemPosition = item.current.offsetTop;
        setOffsetposition(itemPosition - scrollPosition);
    }, [scrollPosition]);

    if ((!title && !boatImg && !boatContent) || !boatContent2) {
        return null;
    }

    //currentposition boat
    //currentposition scroll

    return (
        <div className={styles.basic_block_special_hero_section}>
            <MediaDetector
                mediaUrl="cover"
                title={title ? title : null}
                alt={title ? title : null}
                imageLayout="fill"
                imageObjectFit="cover"
                imageObjectPosition="center"
            />

            <div className={styles.content_wrap}>
                <span className="text-block">{textBlock}</span>
                <h2>
                    {title}
                    <span>.</span>
                </h2>
                <div className={styles.boat_wrapper}>
                    <h3 className={styles.special_header}>{boatTitle}.</h3>
                    <div
                        className={styles.boat_img}
                        ref={item}
                        style={{
                            transform: `translateX(${
                                offsetposition * -0.2 - 100
                            }px)`,
                        }}
                    >
                        <MediaDetector
                            mediaUrl={boatImg ? boatImg : null}
                            title={title ? title : null}
                            alt={title ? title : null}
                            imageLayout="fill"
                            imageObjectFit="contain"
                            imageObjectPosition="center"
                        />
                    </div>
                </div>
                <p className="dark">
                    <CountryBrandSwitch
                        all={boatContent ? boatContent : null}
                        us={boatContent2 ? boatContent2 : null}
                    />
                </p>
                <Pulse>
                    <Button
                        title={boatBtnTitle}
                        url={boatBtnUrl}
                        style={btnStyle}
                        position={btnPosition}
                    />
                </Pulse>
            </div>
        </div>
    );
}
