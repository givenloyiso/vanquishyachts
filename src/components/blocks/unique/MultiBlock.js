// NEXT JS / THIRD PARTY IMPORT
import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

//IMPORT MIXED COMPONENT§S
import styles from '@styles/components/Blocks.module.scss';
import Button from '@components/blocks/button/Button';
import MediaDetector from '@components/blocks/unique/MediaDetector';
import CountryBrandSwitch from '@components/blocks/unique/ContinentBrandSwitch';

gsap.registerPlugin(ScrollTrigger);

export default function MultiBlock({
    title,
    dataArray,
    btnStyle,
    btnPosition,
    BGcolor,
    color,
}) {
    if (title === null) {
        return null;
    }

    const cn = (...classNames) => classNames.join(' ');

    // useEffect(() => {
    //     gsap.fromTo(
    //         '.multi_block_animation',
    //         {
    //             autoAlpha: 0,
    //         },
    //         {
    //             duration: 1,
    //             autoAlpha: 1,
    //             ease: 'none',
    //             scrollTrigger: {
    //                 trigger: '.multi_block_animation',
    //                 start: 'top center+50%',
    //                 toggleActions: 'play none none reverse',
    //                 markers: true,
    //                 scrub: 0.25,
    //             },
    //         }
    //     );
    // }, []);

    return (
        <div
            className={cn(
                styles.multi_block_array_section,
                'multi_block_animation'
            )}
            style={{ backgroundColor: BGcolor }}
        >
            <h2 style={{ color: color }}>{title}</h2>

            {dataArray &&
                dataArray.map((data, key) => (
                    <div className={styles.multi_block_array} key={key}>
                        <div className={styles.multi_block_array_text}>
                            <h3 className={styles.multi_block_array_title}>
                                {data.header}
                                <span>.</span>
                            </h3>
                            <p className={styles.multi_block_array_paragraph}>
                                <CountryBrandSwitch
                                    all={data.paragraph ? data.paragraph : null}
                                    us={
                                        data.paragraphVanquish
                                            ? data.paragraphVanquish
                                            : null
                                    }
                                />
                            </p>

                            {data.button && (
                                <Button
                                    title={
                                        data.button.title
                                            ? data.button.title
                                            : null
                                    }
                                    url={
                                        data.button.url ? data.button.url : null
                                    }
                                    target={
                                        data.button.target
                                            ? data.button.target
                                            : null
                                    }
                                    style={btnStyle}
                                    position={btnPosition}
                                />
                            )}
                        </div>

                        <div className={styles.multi_block_array_image}>
                            <MediaDetector
                                mediaUrl={
                                    data.image ? data.image.sourceUrl : null
                                }
                                altText={data.image ? data.image.altText : null}
                                title={data.header ? data.header : null}
                                imageLayout="fill"
                                imageObjectFit="cover"
                                imageObjectPosition="center"
                            />
                        </div>
                    </div>
                ))}
        </div>
    );
}
