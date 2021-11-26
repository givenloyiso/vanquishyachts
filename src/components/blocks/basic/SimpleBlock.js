// IMPORT NEXT JS / THIRD PARTY IMPORT
import { useState } from 'react';
import { FiMail, FiPhone } from 'react-icons/fi';
import Link from 'next/link';

// IMPORT MIXED COMPONENTS
import styles from '@styles/components/Blocks.module.scss';
import MediaDetector from '@components/blocks/unique/MediaDetector';
import Button from '@components/blocks/button/Button';
import VideoBlock from '../unique/VideoBlock';

export default function SimpleBlock({
    mediaUrl,
    altText,
    title,
    textBlock,
    dataArray,
    style,
    type,
}) {
    if (title === null) {
        return null;
    }

    const [accordion, SetAccordion] = useState(0);

    const handleAccordion = (e) => {
        SetAccordion(e);
    };

    return (
        <>
            {style === 'super' ? (
                <div className={styles.super_simple}>
                    <div className={styles.simple_block_wrap}>
                        <h2>{title}.</h2>
                        <div className={styles.content_grid}>
                            {dataArray.map((item, key) => {
                                return (
                                    <p
                                        key={key}
                                        dangerouslySetInnerHTML={{
                                            __html: item.paragraph,
                                        }}
                                    ></p>
                                );
                            })}
                        </div>
                    </div>
                </div>
            ) : style === 'simple' ? (
                <div className={styles.simple_block}>
                    <div
                        className={styles.simple_block_wrap}
                        style={
                            mediaUrl && mediaUrl.length > 0
                                ? {
                                    display: 'grid',
                                    gridTemplateColumns: '2fr 1fr',
                                }
                                : {
                                    display: 'grid',
                                    gridTemplateColumns: '2fr',
                                }
                        }
                    >
                        <div className={styles.content_grid}>
                            {dataArray.map((item, key) => {
                                return (
                                    <>
                                        <h3>
                                            {item.header}
                                            <span>.</span>
                                        </h3>
                                        <p
                                            key={key}
                                            dangerouslySetInnerHTML={{
                                                __html: item.paragraph,
                                            }}
                                        ></p>
                                    </>
                                );
                            })}
                        </div>
                        {mediaUrl && mediaUrl.length > 0 && (
                            <div className={styles.profile_block_wrap}>
                                <MediaDetector
                                    mediaUrl={mediaUrl}
                                    altText={altText}
                                    title={title}
                                />
                            </div>
                        )}
                    </div>
                </div>
            ) : style === 'contact' ? (
                <div className={styles.simple_contact_block}>
                    <MediaDetector
                        mediaUrl={mediaUrl}
                        altText={altText}
                        title={title}
                    />
                    {dataArray.map((item) => {
                        return (
                            <>
                                <div className={styles.simple_block_wrap}>
                                    <h2>
                                        {title}
                                        <span>.</span>
                                    </h2>
                                    <div className={styles.content_grid}>
                                        <div className={styles.content_block}>
                                            <span className="text-block">
                                                {item.textBlock}
                                            </span>

                                            {item.paragraph && (
                                                <p
                                                    dangerouslySetInnerHTML={{
                                                        __html: item.paragraph,
                                                    }}
                                                ></p>
                                            )}
                                            {item.dropdown &&
                                                item.dropdown.map(
                                                    (items, index) => {
                                                        return (
                                                            <div
                                                                className={
                                                                    styles.accordion
                                                                }
                                                                key={index}
                                                            >
                                                                <Button
                                                                    onClick={() =>
                                                                        handleAccordion(
                                                                            index
                                                                        )
                                                                    }
                                                                    title={
                                                                        items.dropdownTitle
                                                                    }
                                                                    style="5"
                                                                />
                                                                {accordion ===
                                                                    index && (
                                                                    <p
                                                                        dangerouslySetInnerHTML={{
                                                                            __html: items.dropdownInfo,
                                                                        }}
                                                                    ></p>
                                                                )}
                                                            </div>
                                                        );
                                                    }
                                                )}
                                        </div>
                                        <div
                                            className={
                                                styles.contact_block_wrap
                                            }
                                        >
                                            <div className={styles.email}>
                                                <span className="text-block">
                                                    Email us
                                                </span>
                                                <span className={styles.icons}>
                                                    <FiMail size={20} />
                                                    <p>
                                                        <Link
                                                            href={`mailto:${
                                                                item.email
                                                                    ? item.email
                                                                    : item
                                                                        .contact
                                                                        .email
                                                                        ? item
                                                                            .contact
                                                                            .email
                                                                        : '#'
                                                            }`}
                                                        >
                                                            <a>
                                                                {item.email
                                                                    ? item.email
                                                                    : item
                                                                        .contact
                                                                        .email
                                                                        ? item
                                                                            .contact
                                                                            .email
                                                                        : null}
                                                            </a>
                                                        </Link>
                                                    </p>
                                                </span>
                                            </div>
                                            <div className={styles.call_us}>
                                                <span className="text-block">
                                                    Call us
                                                </span>
                                                <span className={styles.icons}>
                                                    <FiPhone size={20} />
                                                    <p>
                                                        <Link
                                                            href={`tel:${
                                                                item.phone
                                                                    ? item.phone
                                                                    : item
                                                                        .contact
                                                                        .phone
                                                                        ? item
                                                                            .contact
                                                                            .phone
                                                                        : '#'
                                                            }`}
                                                        >
                                                            <a>
                                                                {item.phone
                                                                    ? item.phone
                                                                    : item
                                                                        .contact
                                                                        .phone
                                                                        ? item
                                                                            .contact
                                                                            .phone
                                                                        : null}
                                                            </a>
                                                        </Link>
                                                    </p>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
            ) : style === 'events' ? (
                <div className={styles.simple_events_block}>
                    <div className={styles.left_wrap}>
                        <h2>{title}</h2>
                        <p className="text-block">{textBlock}</p>
                        <p>{dataArray}</p>
                    </div>
                    <div className={styles.video_wrap}>
                        <VideoBlock
                            mediaUrl={mediaUrl}
                            altText={altText}
                            type={type}
                        />
                    </div>
                </div>
            ) : (
                <div className={styles.simple_block_section}>
                    <MediaDetector
                        mediaUrl={mediaUrl}
                        altText={altText}
                        title={title}
                    />
                    <div className={styles.simple_block_wrap}>
                        <h2>
                            {title}
                            <span>.</span>
                        </h2>
                        <span className="text-block">{textBlock}</span>
                        <div className={styles.content_grid}>
                            {dataArray.map((item, key) => {
                                return (
                                    <p
                                        key={key}
                                        dangerouslySetInnerHTML={{
                                            __html: item.paragraph,
                                        }}
                                    ></p>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
