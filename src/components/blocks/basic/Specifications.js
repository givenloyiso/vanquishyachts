// IMPORT NEXT JS / THIRD PARTY IMPORT
import { useState } from 'react';

// IMPORT MIXED COMPONENTS
import styles from '@styles/components/Blocks.module.scss';
import MediaDetector from '@components/blocks/unique/MediaDetector';

export default function Specifications({
    title,
    beamM,
    beamFt,
    people,
    lengthM,
    lengthFt,
    engineArray,
    draughtM,
    draughtFt,
    displacement,
    fuelL,
    fuelGal,
    speedArray,
    levelsArray,
}) {
    const [currentSlider, setCurrentSlider] = useState(0);
    const count = levelsArray.length;

    const prevClick = () => {
        setCurrentSlider(currentSlider === 0 ? count - 1 : currentSlider - 1);
    };

    const nextClick = () => {
        setCurrentSlider(currentSlider === count - 1 ? 0 : currentSlider + 1);
    };

    if (!Array.isArray(levelsArray) || count <= 0) {
        return null;
    }

    return (
        <div className={styles.specifications_section}>
            <h3>{title}</h3>
            <div className={styles.specifications_wrapper}>
                <div className={styles.specifications_wrapper_left}>
                    <dl>
                        <dt>Beam</dt>
                        <dd>
                            {beamM} m / {beamFt} ft
                        </dd>

                        <dt>People</dt>
                        <dd>{people} Seats</dd>

                        <dt>Length</dt>
                        <dd>
                            {lengthM} m / {lengthFt} ft
                        </dd>

                        <dt>Engines</dt>
                        {engineArray &&
                            engineArray.length > 0 &&
                            engineArray.map((a, key) => (
                                <dd key={key}>{a.engineType}</dd>
                            ))}
                    </dl>
                </div>
                <div className={styles.specifications_wrapper_right}>
                    <dl>
                        <dt>Draught</dt>
                        <dd>
                            {draughtM} m / {draughtFt} ft
                        </dd>

                        <dt>Displacement</dt>
                        <dd>{displacement} Tons</dd>

                        <dt>Fuel</dt>
                        <dd>
                            {fuelL} m / {fuelGal} ft
                        </dd>

                        <dt>Max Speed</dt>
                        {speedArray &&
                            speedArray.length > 0 &&
                            speedArray.map((a, key) => (
                                <dd key={key}>{`${
                                    a.knots ? a.knots + '+ knots' : null
                                } ${a.version ? `(${a.version})` : ''}`}</dd>
                            ))}
                    </dl>
                </div>
                {levelsArray.length > 1 && (
                    <div className={styles.specifications_levels_nav}>
                        <div
                            className={styles.specifications_levels_nav_counter}
                        >
                            <span>{currentSlider + 1}</span>
                            <span>/</span>
                            <span>{count}</span>
                        </div>

                        <div
                            className={styles.specifications_levels_nav_buttons}
                        >
                            <span onClick={prevClick}>Prev</span>
                            <div>
                                <span
                                    style={{
                                        width: `${
                                            (currentSlider + 1) * 33.33
                                        }%`,
                                    }}
                                ></span>
                            </div>
                            <span onClick={nextClick}>Next</span>
                        </div>
                    </div>
                )}

                <div className={styles.specifications_levels_yacht}>
                    {levelsArray &&
                        levelsArray.length > 0 &&
                        levelsArray.map((item, index) => {
                            // prettier-ignore
                            return (
                                currentSlider === index && (
                                    <div
                                        className={
                                            styles.specifications_single_level
                                        }
                                        key={index}
                                    >
                                        <h4>
                                            {item.viewText
                                                ? item.viewText
                                                : `Level ${index + 1}`}
                                        </h4>
                                        <div
                                            className={
                                                styles.specifications_single_image
                                            }
                                        >
                                            <MediaDetector
                                                mediaUrl={
                                                    item.viewImage
                                                        ? item.viewImage
                                                            .sourceUrl
                                                        : null
                                                }
                                                title={
                                                    item.viewText
                                                        ? item.viewText
                                                        : `Level ${
                                                            index + 1
                                                        }`
                                                }
                                                altText={
                                                    item.viewImage
                                                        ? item.viewImage
                                                            .altText
                                                        : null
                                                }
                                                imageLayout="fill"
                                                imageObjectFit="contain"
                                                imageObjectPosition="center"
                                            />
                                            <div
                                                className={
                                                    styles.specifications_levels_yacht_beam
                                                }
                                            >
                                                <p>{beamM} m</p>
                                            </div>
                                            <div
                                                className={
                                                    styles.specifications_levels_yacht_length
                                                }
                                            >
                                                <p>{lengthM} m</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            );
                        })}
                </div>
            </div>
        </div>
    );
}
