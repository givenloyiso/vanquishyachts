// NEXT JS / THIRD PARTY IMPORT
import React, { useState, useRef } from 'react';
import Fade from 'react-reveal/Fade';

// CUSTOM IMPORT
import styles from '@styles/components/Blocks.module.scss';
import MediaDetector from '@components/blocks/unique/MediaDetector';

function SoundQuote({ title, content, img, altText, audio }) {
    const [playSound, setPlaySound] = useState(true);

    const icon = useRef(null);
    const down = useRef(null);
    const up = useRef(null);
    const play = useRef(null);

    const onIconClick = () => {
        icon.current.style.animation = 'unset';
        play.current.style.animation = 'unset';

        if (playSound) {
            icon.current.style.transform = 'rotateZ(90deg)';
            play.current.style.transform = 'translateX(15%)';
            down.current.style.transform = 'rotateZ(17.556deg)';
            up.current.style.transform = 'rotateZ(-17.556deg)';
        } else {
            icon.current.style.transform = 'rotateZ(0deg)';
            down.current.style.transform = 'rotateZ(0deg)';
            up.current.style.transform = 'rotateZ(0deg)';
        }
    };

    function playAudio() {
        const audioEl = document.getElementsByClassName('audio-element')[0];
        setPlaySound(!playSound);
        if (playSound) {
            audioEl.play();
        } else {
            audioEl.pause();
        }
    }

    return (
        <div id={`Sound_Quote_${title ? title.split(' ').join('_') : 'Magazine'}`} className={styles.sound_quote_section}>
            <Fade left>
                <div className={styles.quote_wrapper}>
                    <p className="text-block">{title}</p>
                    <q
                        className="quote"
                        dangerouslySetInnerHTML={{ __html: content }}
                    ></q>
                </div>
            </Fade>
            <Fade right>
                <div className={styles.quote_img_wrapper} onClick={playAudio}>
                    <div className={styles.quote_img}>
                        <MediaDetector
                            title={title}
                            mediaUrl={img ? img : null}
                            altText={altText ? altText : null}
                            objectFit="contain"
                        />
                    </div>

                    <svg
                        id={`Button_Click_${title ? title.split(' ').join('_') : 'Magazine'}`}
                        onClick={onIconClick}
                        ref={icon}
                        version="1.1"
                        className={styles.audio_logo}
                        x="0px"
                        y="0px"
                        viewBox="0 0 300 300"
                    >
                        <g id="play" ref={play} className={styles.play}>
                            <path
                                ref={down}
                                className={styles.down}
                                d="M207.4,147.9L207.4,147.9c0.2,0.6,0.3,1.3,0.3,2.1c0,0.6-0.1,1.2-0.2,1.7c-0.1,0.3-0.2,0.5-0.3,0.7
                            l0,0c-0.1,0.3-0.2,0.5-0.4,0.8c-0.1,0.1-0.2,0.2-0.2,0.4c-0.4,0.6-0.9,1-1.4,1.3c-0.6,0.4-1.2,0.7-1.9,0.9c0,0-40.9,12.9-54.5,17.2
                            c-22.2,7-78.2,24.8-103.4,32.7c-4,1.3-6.6,2.1-6.6,2.1l-0.1,0c-0.6,0.2-1.3,0.3-2,0.4c-1.5,0-3.4-0.5-4.9-2.6
                            c-0.5-0.6-0.8-1.3-0.9-1.9c-1-3.3-1.4-4.5-1.4-4.5c-0.8-2.5-0.3-0.9-1.2-3.8c-0.1-0.4-0.4-1.1-0.6-1.9l-1.8-5.8
                            c-0.1-0.2-0.1-0.4-0.2-0.6c-0.2-0.6-0.3-1.3-0.3-2.1c0-2.6,1.3-4.1,2.5-4.9c0.6-0.4,1.2-0.7,1.9-0.9c0,0,10.2-3.2,22.1-7l88.6-28
                            c12.6-3.9,25.8-5.4,38.8-4.4c1.5,0.1,3,0.2,4.4,0.4c1.3,0.1,2.6,0.3,3.8,0.5c1.6,0.2,3.1,0.5,4.6,0.8c3.6,0.7,7.1,1.6,10.7,2.7
                            C202.9,144.1,206.4,144.6,207.4,147.9z"
                            />
                            <path
                                ref={up}
                                className={styles.up}
                                d="M207.4,152.1L207.4,152.1c0.2-0.6,0.3-1.3,0.3-2.1c0-0.6-0.1-1.2-0.2-1.7c-0.1-0.3-0.2-0.5-0.3-0.7l0,0
                            c-0.1-0.3-0.2-0.5-0.4-0.8c-0.1-0.1-0.2-0.2-0.2-0.4c-0.4-0.6-0.9-1-1.4-1.3c-0.6-0.4-1.2-0.7-1.9-0.9c0,0-40.9-12.9-54.5-17.2
                            c-22.2-7-78.2-24.7-103.4-32.7c-4-1.3-6.6-2.1-6.6-2.1l-0.1,0c-0.6-0.2-1.3-0.3-2-0.4c-1.5,0-3.4,0.5-4.9,2.6
                            c-0.5,0.6-0.8,1.3-0.9,1.9c-1,3.3-1.4,4.5-1.4,4.5c-0.8,2.5-0.3,0.9-1.2,3.8c-0.1,0.4-0.4,1.1-0.6,1.9l-1.8,5.8
                            c-0.1,0.2-0.1,0.4-0.2,0.6c-0.2,0.6-0.3,1.3-0.3,2.1c0,2.6,1.3,4.1,2.5,4.9c0.6,0.4,1.2,0.7,1.9,0.9c0,0,10.2,3.2,22.1,7l88.6,28
                            c12.6,3.9,25.8,5.4,38.8,4.4c1.5-0.1,3-0.2,4.4-0.4c1.3-0.2,2.6-0.3,3.8-0.5c1.6-0.2,3.1-0.5,4.6-0.8c3.6-0.7,7.1-1.6,10.7-2.7
                            C202.9,155.9,206.4,155.4,207.4,152.1z"
                            />
                        </g>

                        <path
                            id="circle"
                            d="M30,150c0-32.1,12.5-62.2,35.1-84.9C87.8,42.5,117.9,30,150,30s62.2,12.5,84.9,35.1
                        C257.5,87.8,270,117.9,270,150s-12.5,62.2-35.1,84.9C212.2,257.5,182.1,270,150,270s-62.2-12.5-84.9-35.1
                        C42.5,212.2,30,182.1,30,150 M10,150c0,77.3,62.7,140,140,140s140-62.7,140-140S227.3,10,150,10S10,72.7,10,150L10,150z"
                        />
                    </svg>
                </div>
            </Fade>

            <audio className="audio-element">
                <source src={audio}></source>
            </audio>
        </div>
    );
}

export default SoundQuote;
