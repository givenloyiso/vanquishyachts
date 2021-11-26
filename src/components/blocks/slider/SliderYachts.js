// NEXT JS / THIRD PARTY IMPORT
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';
// IMPORT MIXED COMPONENTS
import styles from '@styles/components/Blocks.module.scss';
import Button from '@components/blocks/button/Button';
import MediaDetector from '@components/blocks/unique/MediaDetector';

export default function SliderYachts({
    title,
    aluminiumArray,
    compositeArray,
    btnTitle,
    btnUrl,
    btnStyle,
    btnPosition,
    background,
}) {
    const router = useRouter();

    const cn = (...classNames) => classNames.join(' ');
    const [toggleState, setToggleState] = useState(
        router.asPath === '/models#aluminium'
            ? aluminiumArray
                ? 584
                : 584
            : compositeArray
                ? compositeArray[0].yachtId
                : 0
    );
    const [clickSlider, setClickSlider] = useState(0);
    const count = [
        aluminiumArray ? aluminiumArray.length : null,
        compositeArray ? compositeArray.length : null,
    ];

    const eventsRef = useRef(0);

    const previous = () => {
        setClickSlider(clickSlider === 0 ? 0 : clickSlider - 1);
    };
    const next = () => {
        setClickSlider(clickSlider === count - 1 ? count - 1 : clickSlider + 1);
    };
    const handleClick = (e) => {
        setClickSlider(0);
        setToggleState(e);
        console.log(e);
    };
    switch (background) {
    case 'transparant':
        var switch_background = styles.background_transparant;
        break;
    default:
        break;
    }

    if (
        !Array.isArray(aluminiumArray) ||
        (!Array.isArray(compositeArray) && count <= 0)
    ) {
        return null;
    }

    const sliderResize = () => {
        let widthEvents = eventsRef.current.offsetWidth;
        const [width, setWidth] = useState(widthEvents ? widthEvents : 0); // default width, detect on server.
        // eslint-disable-next-line react-hooks/exhaustive-deps
        const handleResize = () => setWidth(window.innerWidth);

        if (width === 0) {
            if (widthEvents < 769) {
                var responsive = true;
            } else {
                var responsive = false;
            }
        } else {
            if (widthEvents < 769) {
                var responsive = true;
            } else {
                var responsive = false;
            }
        }

        useEffect(() => {
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, [handleResize]);

        return responsive;
    };

    // if (
    //     !Array.isArray(aluminiumArray) ||
    //     !Array.isArray(compositeArray) ||
    //     count <= 0
    // ) {
    //     return null;
    // }

    return (
        // LEFT MODELS OF YACHT
        <div
            id={`Slider_${title ? title.split(' ').join('_') : 'Magazine'}`}
            className={cn(styles.unique_yachts_section, switch_background)}
            ref={eventsRef}
        >
            <div className={styles.models_wrapper}>
                <h3>
                    {title}
                    <span>.</span>
                </h3>
                <div className={styles.yachts_information}>
                    {/* //*COMPOSITE ARRAY */}
                    {compositeArray &&
                        compositeArray.length > 0 &&
                        compositeArray.map((yacht, key) => {
                            return sliderResize() ? (
                                <Link
                                    key={key}
                                    href={`models/${
                                        yacht.categories.edges.length > 0 &&
                                        yacht.categories.edges &&
                                        yacht.categories.edges
                                            .map(({ node }) => node)
                                            .map((index) => {
                                                return index.slug;
                                            })
                                    }/${yacht.slug}`}
                                >
                                    <a>
                                        <div
                                            key={yacht.yachtId}
                                            className={
                                                toggleState
                                                    ? toggleState ===
                                                      yacht.yachtId
                                                        ? cn(
                                                            styles.wrap,
                                                            styles.wrap_active
                                                        )
                                                        : styles.wrap
                                                    : compositeArray[0]
                                                        .yachtId ===
                                                      yacht.yachtId
                                                        ? cn(
                                                            styles.wrap,
                                                            styles.wrap_active
                                                        )
                                                        : styles.wrap
                                            }
                                            onClick={() =>
                                                handleClick(yacht.yachtId)
                                            }
                                        >
                                            <p>
                                                {yacht.title}
                                                <br />
                                                <span>
                                                    {yacht.categories.edges
                                                        .length > 0 &&
                                                        yacht.categories
                                                            .edges &&
                                                        yacht.categories.edges
                                                            .map(
                                                                ({ node }) =>
                                                                    node
                                                            )
                                                            .map((index) => {
                                                                return index.name;
                                                            })}
                                                </span>
                                            </p>
                                            <div className={styles.yacht_image}>
                                                <MediaDetector
                                                    mediaUrl={
                                                        yacht.CF_Composite &&
                                                        yacht.CF_Composite
                                                            .specifications
                                                            .yachtIcon
                                                            ? yacht.CF_Composite
                                                                .specifications
                                                                .yachtIcon
                                                                .sourceUrl
                                                            : null
                                                    }
                                                    altText={
                                                        yacht.CF_Composite &&
                                                        yacht.CF_Composite
                                                            .specifications
                                                            .yachtIcon
                                                            ? yacht.CF_Composite
                                                                .specifications
                                                                .yachtIcon
                                                                .altText
                                                            : title
                                                    }
                                                    title={yacht.title}
                                                    imageLayout="fill"
                                                    imageObjectFit="contain"
                                                    imageObjectPosition="right"
                                                />
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            ) : (
                                <div
                                    key={yacht.yachtId}
                                    className={
                                        toggleState
                                            ? toggleState === yacht.yachtId
                                                ? cn(
                                                    styles.wrap,
                                                    styles.wrap_active
                                                )
                                                : styles.wrap
                                            : compositeArray[0].yachtId ===
                                              yacht.yachtId
                                                ? cn(
                                                    styles.wrap,
                                                    styles.wrap_active
                                                )
                                                : styles.wrap
                                    }
                                    onClick={() => handleClick(yacht.yachtId)}
                                >
                                    <p>
                                        {yacht.title}
                                        <br />
                                        <span>
                                            {yacht.categories.edges.length >
                                                0 &&
                                                yacht.categories.edges &&
                                                yacht.categories.edges
                                                    .map(({ node }) => node)
                                                    .map((index) => {
                                                        return index.name;
                                                    })}
                                        </span>
                                    </p>
                                    <div className={styles.yacht_image}>
                                        <MediaDetector
                                            mediaUrl={
                                                yacht.CF_Composite &&
                                                yacht.CF_Composite
                                                    .specifications.yachtIcon
                                                    ? yacht.CF_Composite
                                                        .specifications
                                                        .yachtIcon.sourceUrl
                                                    : null
                                            }
                                            altText={
                                                yacht.CF_Composite &&
                                                yacht.CF_Composite
                                                    .specifications.yachtIcon
                                                    ? yacht.CF_Composite
                                                        .specifications
                                                        .yachtIcon.altText
                                                    : title
                                            }
                                            title={yacht.title}
                                            imageLayout="fill"
                                            imageObjectFit="contain"
                                            imageObjectPosition="right"
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    {/* //*ALUMINIUM ARRAY */}
                    {aluminiumArray &&
                        aluminiumArray.length > 0 &&
                        aluminiumArray.map((yacht, key) => {
                            return sliderResize() ? (
                                <Link
                                    key={key}
                                    href={`models/${
                                        yacht.categories.edges.length > 0 &&
                                        yacht.categories.edges &&
                                        yacht.categories.edges
                                            .map(({ node }) => node)
                                            .map((index) => {
                                                return index.slug;
                                            })
                                    }/${yacht.slug}`}
                                >
                                    <a>
                                        <div
                                            key={yacht.yachtId}
                                            className={
                                                toggleState === yacht.yachtId
                                                    ? cn(
                                                        styles.wrap,
                                                        styles.wrap_active
                                                    )
                                                    : styles.wrap
                                            }
                                            onClick={() =>
                                                handleClick(yacht.yachtId)
                                            }
                                        >
                                            <p>
                                                {yacht.title}
                                                <br />
                                                <span>
                                                    {yacht.categories.edges
                                                        .length > 0 &&
                                                        yacht.categories
                                                            .edges &&
                                                        yacht.categories.edges
                                                            .map(
                                                                ({ node }) =>
                                                                    node
                                                            )
                                                            .map((index) => {
                                                                return index.name;
                                                            })}
                                                </span>
                                            </p>
                                            <div className={styles.yacht_image}>
                                                <MediaDetector
                                                    mediaUrl={
                                                        yacht.CF_Aluminium &&
                                                        yacht.CF_Aluminium
                                                            .specifications
                                                            .yachtIcon
                                                            ? yacht.CF_Aluminium
                                                                .specifications
                                                                .yachtIcon
                                                                .sourceUrl
                                                            : null
                                                    }
                                                    altText={
                                                        yacht.CF_Aluminium &&
                                                        yacht.CF_Aluminium
                                                            .specifications
                                                            .yachtIcon
                                                            ? yacht.CF_Aluminium
                                                                .specifications
                                                                .yachtIcon
                                                                .altText
                                                            : title
                                                    }
                                                    title={yacht.title}
                                                    imageLayout="fill"
                                                    imageObjectFit="contain"
                                                    imageObjectPosition="right"
                                                />
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            ) : (
                                <div
                                    key={yacht.yachtId}
                                    className={
                                        toggleState === yacht.yachtId
                                            ? cn(
                                                styles.wrap,
                                                styles.wrap_active
                                            )
                                            : styles.wrap
                                    }
                                    onClick={() => handleClick(yacht.yachtId)}
                                >
                                    <p>
                                        {yacht.title}
                                        <br />
                                        <span>
                                            {yacht.categories.edges.length >
                                                0 &&
                                                yacht.categories.edges &&
                                                yacht.categories.edges
                                                    .map(({ node }) => node)
                                                    .map((index) => {
                                                        return index.name;
                                                    })}
                                        </span>
                                    </p>
                                    <div className={styles.yacht_image}>
                                        <MediaDetector
                                            mediaUrl={
                                                yacht.CF_Aluminium &&
                                                yacht.CF_Aluminium
                                                    .specifications.yachtIcon
                                                    ? yacht.CF_Aluminium
                                                        .specifications
                                                        .yachtIcon.sourceUrl
                                                    : null
                                            }
                                            altText={
                                                yacht.CF_Aluminium &&
                                                yacht.CF_Aluminium
                                                    .specifications.yachtIcon
                                                    ? yacht.CF_Aluminium
                                                        .specifications
                                                        .yachtIcon.altText
                                                    : title
                                            }
                                            title={yacht.title}
                                            imageLayout="fill"
                                            imageObjectFit="contain"
                                            imageObjectPosition="right"
                                        />
                                    </div>
                                </div>
                            );
                        })}
                </div>
                <Button
                    title={btnTitle}
                    url={btnUrl}
                    style={btnStyle}
                    position={btnPosition}
                />
            </div>
            {/* //* RIGHT ILLUSTRATION OF COMPOSITE WITH PICTURES OR VIDEOS */}
            {compositeArray &&
                compositeArray.length > 0 &&
                compositeArray.map((yacht) => {
                    return (
                        <div
                            className={
                                toggleState
                                    ? toggleState === yacht.yachtId
                                        ? cn(
                                            styles.yachts_illustration,
                                            styles.switch_active
                                        )
                                        : cn(
                                            styles.yachts_illustration,
                                            styles.switch_hide
                                        )
                                    : compositeArray[0].yachtId ===
                                      yacht.yachtId
                                        ? cn(
                                            styles.yachts_illustration,
                                            styles.switch_active
                                        )
                                        : cn(
                                            styles.yachts_illustration,
                                            styles.switch_hide
                                        )
                            }
                            key={yacht.yachtId}
                        >
                            {yacht.categories.edges.length > 0 &&
                                yacht.categories.edges &&
                                yacht.categories.edges
                                    .map(({ node }) => node)
                                    .map((category, key) => {
                                        return (
                                            <div
                                                className={
                                                    styles.top_information
                                                }
                                                key={key}
                                            >
                                                <div
                                                    className={
                                                        styles.navigation
                                                    }
                                                >
                                                    {compositeArray &&
                                                        compositeArray.length >
                                                            2 && (
                                                        <>
                                                            {clickSlider ===
                                                                0 ? (
                                                                    <FiArrowLeftCircle
                                                                        size={
                                                                            60
                                                                        }
                                                                        strokeWidth={
                                                                            0.1
                                                                        }
                                                                    />
                                                                ) : (
                                                                    <FiArrowLeftCircle
                                                                        id="Button_Prev_Models"
                                                                        size={
                                                                            60
                                                                        }
                                                                        strokeWidth={
                                                                            0.5
                                                                        }
                                                                        onClick={() =>
                                                                            previous()
                                                                        }
                                                                    />
                                                                )}
                                                            {clickSlider ===
                                                                2 ? (
                                                                    <FiArrowRightCircle
                                                                        strokeWidth={
                                                                            0.1
                                                                        }
                                                                        size={
                                                                            60
                                                                        }
                                                                    />
                                                                ) : (
                                                                    <FiArrowRightCircle
                                                                        id="Button_Next_Models"
                                                                        strokeWidth={
                                                                            0.5
                                                                        }
                                                                        size={
                                                                            60
                                                                        }
                                                                        onClick={() =>
                                                                            next()
                                                                        }
                                                                    />
                                                                )}
                                                        </>
                                                    )}
                                                </div>
                                                <Button
                                                    title={`Go to ${yacht.title}`}
                                                    url={`models/${category.slug}/${yacht.slug}`}
                                                    style="7"
                                                />
                                            </div>
                                        );
                                    })}
                            {yacht.CF_Composite &&
                            yacht.CF_Composite.yachtType ? (
                                    yacht.CF_Composite.yachtType
                                        .slice(0, 3)
                                        .map((image, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    className={
                                                        styles.carousel_yacht_slider
                                                    }
                                                    style={
                                                        clickSlider === index
                                                            ? { width: '75%' }
                                                            : { width: '25%' }
                                                    }
                                                >
                                                    <MediaDetector
                                                        mediaUrl={
                                                            image.yachtTypeFootage
                                                                ? image
                                                                    .yachtTypeFootage
                                                                    .sourceUrl
                                                                : null
                                                        }
                                                        altText={
                                                            image.yachtTypeFootage
                                                                ? image
                                                                    .yachtTypeFootage
                                                                    .altText
                                                                : title
                                                        }
                                                        title={image.title}
                                                        imageLayout="fill"
                                                        imageObjectFit="cover"
                                                        imageObjectPosition="center"
                                                    />
                                                    <div
                                                        className={
                                                            styles.bottom_information
                                                        }
                                                    >
                                                        <Link
                                                            href={`models/${yacht.categories.edges[0].node.slug}/${yacht.slug}`}
                                                        >
                                                            <a>
                                                                <MediaDetector
                                                                    mediaUrl={
                                                                        image.yachtTypeFootage
                                                                            ? image
                                                                                .yachtTypeFootage
                                                                                .sourceUrl
                                                                            : null
                                                                    }
                                                                    altText={
                                                                        image.yachtTypeFootage
                                                                            ? image
                                                                                .yachtTypeFootage
                                                                                .altText
                                                                            : title
                                                                    }
                                                                    title={
                                                                        image.title
                                                                    }
                                                                    imageLayout="fill"
                                                                    imageObjectFit="cover"
                                                                    imageObjectPosition="center"
                                                                />
                                                            </a>
                                                        </Link>

                                                        <div
                                                            className={
                                                                styles.count_title
                                                            }
                                                        >
                                                            {clickSlider ===
                                                            index && (
                                                                <p>
                                                                    {clickSlider +
                                                                    1}{' '}
                                                                / <span>3</span>
                                                                </p>
                                                            )}
                                                            <h3>
                                                            THE {yacht.title}:{' '}
                                                                {image.yachtType}
                                                            </h3>
                                                        </div>
                                                        {clickSlider === index && (
                                                            <div
                                                                className={
                                                                    styles.bar
                                                                }
                                                            >
                                                                <div
                                                                    className={
                                                                        styles.prev
                                                                    }
                                                                >
                                                                    {clickSlider ===
                                                                0 ? (
                                                                            <p></p>
                                                                        ) : (
                                                                            <p
                                                                                id={`Button_Prev_${title
                                                                                    .split(
                                                                                        ' '
                                                                                    )
                                                                                    .join(
                                                                                        '_'
                                                                                    )}`}
                                                                                onClick={() =>
                                                                                    previous()
                                                                                }
                                                                            >
                                                                        PREV
                                                                            </p>
                                                                        )}
                                                                </div>
                                                                <div
                                                                    className={
                                                                        styles.progress
                                                                    }
                                                                >
                                                                    <span
                                                                    //prettier-ignore
                                                                        style={clickSlider === index ? { width: `${(clickSlider + 1) * 33.33}%` } : { width: '0' }}
                                                                    ></span>
                                                                </div>
                                                                <div
                                                                    className={
                                                                        styles.next
                                                                    }
                                                                >
                                                                    {clickSlider ===
                                                                2 ? (
                                                                            <p></p>
                                                                        ) : (
                                                                            <p
                                                                                id={`Button_Next_${title
                                                                                    .split(
                                                                                        ' '
                                                                                    )
                                                                                    .join(
                                                                                        '_'
                                                                                    )}`}
                                                                                onClick={() =>
                                                                                    next()
                                                                                }
                                                                            >
                                                                        NEXT
                                                                            </p>
                                                                        )}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            );
                                        })
                                ) : (
                                    <div
                                        className={styles.carousel_yacht_slider}
                                        style={{ width: '100%' }}
                                    >
                                        <MediaDetector
                                            title={yacht.title}
                                            altText={yacht.title}
                                            mediaUrl="background"
                                            imageLayout="fill"
                                            imageObjectFit="cover"
                                            imageObjectPosition="center"
                                        />
                                        {yacht.categories.edges.length > 0 &&
                                        yacht.categories.edges &&
                                        yacht.categories.edges
                                            .map(({ node }) => node)
                                            .map((category, key) => {
                                                return (
                                                    <div
                                                        className={
                                                            styles.bottom_information
                                                        }
                                                        key={key}
                                                    >
                                                        <Button
                                                            title={`Go to ${yacht.title}`}
                                                            url={`models/${category.slug}/${yacht.slug}`}
                                                            style="button_3"
                                                        />
                                                    </div>
                                                );
                                            })}
                                    </div>
                                )}
                        </div>
                    );
                })}

            {/* //* RIGHT ILLUSTRATION OF ALUMINIUM WITH PICTURES OR VIDEOS */}
            {aluminiumArray &&
                aluminiumArray.length > 0 &&
                aluminiumArray.map((yacht) => {
                    return (
                        <div
                            className={
                                toggleState === yacht.yachtId
                                    ? cn(
                                        styles.yachts_illustration,
                                        styles.switch_active
                                    )
                                    : cn(
                                        styles.yachts_illustration,
                                        styles.switch_hide
                                    )
                            }
                            key={yacht.yachtId}
                        >
                            {yacht.categories.edges.length > 0 &&
                                yacht.categories.edges &&
                                yacht.categories.edges
                                    .map(({ node }) => node)
                                    .map((category, key) => {
                                        return (
                                            <div
                                                className={
                                                    styles.top_information
                                                }
                                                key={key}
                                            >
                                                <div
                                                    className={
                                                        styles.navigation
                                                    }
                                                >
                                                    {aluminiumArray &&
                                                        aluminiumArray.length >
                                                            2 && (
                                                        <>
                                                            {clickSlider ===
                                                                0 ? (
                                                                    <FiArrowLeftCircle
                                                                        size={
                                                                            60
                                                                        }
                                                                        strokeWidth={
                                                                            0.1
                                                                        }
                                                                    />
                                                                ) : (
                                                                    <FiArrowLeftCircle
                                                                        id={`Button_Prev_${title
                                                                            .split(
                                                                                ' '
                                                                            )
                                                                            .join(
                                                                                '_'
                                                                            )}`}
                                                                        size={
                                                                            60
                                                                        }
                                                                        strokeWidth={
                                                                            0.5
                                                                        }
                                                                        onClick={() =>
                                                                            previous()
                                                                        }
                                                                    />
                                                                )}
                                                            {clickSlider ===
                                                                2 ? (
                                                                    <FiArrowRightCircle
                                                                        strokeWidth={
                                                                            0.1
                                                                        }
                                                                        size={
                                                                            60
                                                                        }
                                                                    />
                                                                ) : (
                                                                    <FiArrowRightCircle
                                                                        strokeWidth={
                                                                            0.5
                                                                        }
                                                                        size={
                                                                            60
                                                                        }
                                                                        onClick={() =>
                                                                            next()
                                                                        }
                                                                    />
                                                                )}
                                                        </>
                                                    )}
                                                </div>
                                                <Button
                                                    title={`Go to ${yacht.title}`}
                                                    url={`models/${category.slug}/${yacht.slug}`}
                                                    style="3"
                                                />
                                            </div>
                                        );
                                    })}
                            {yacht.CF_Aluminium &&
                            yacht.CF_Aluminium.yachtType ? (
                                    yacht.CF_Aluminium.yachtType
                                        .slice(0, 3)
                                        .map((image, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    className={
                                                        styles.carousel_yacht_slider
                                                    }
                                                    style={
                                                        clickSlider === index
                                                            ? { width: '75%' }
                                                            : { width: '25%' }
                                                    }
                                                >
                                                    <MediaDetector
                                                        mediaUrl={
                                                            image.yachtTypeFootage
                                                                ? image
                                                                    .yachtTypeFootage
                                                                    .sourceUrl
                                                                : null
                                                        }
                                                        altText={
                                                            image.yachtTypeFootage
                                                                ? image
                                                                    .yachtTypeFootage
                                                                    .altText
                                                                : image.title
                                                        }
                                                        title={image.title}
                                                        imageLayout="fill"
                                                        imageObjectFit="cover"
                                                        imageObjectPosition="center"
                                                    />
                                                    <div
                                                        className={
                                                            styles.bottom_information
                                                        }
                                                    >
                                                        <Link
                                                            href={`models/${yacht.categories.edges[0].node.slug}/${yacht.slug}`}
                                                        >
                                                            <a>
                                                                <MediaDetector
                                                                    mediaUrl={
                                                                        image.yachtTypeFootage
                                                                            ? image
                                                                                .yachtTypeFootage
                                                                                .sourceUrl
                                                                            : null
                                                                    }
                                                                    altText={
                                                                        image.yachtTypeFootage
                                                                            ? image
                                                                                .yachtTypeFootage
                                                                                .altText
                                                                            : image.title
                                                                    }
                                                                    title={
                                                                        image.title
                                                                    }
                                                                    imageLayout="fill"
                                                                    imageObjectFit="cover"
                                                                    imageObjectPosition="center"
                                                                />
                                                            </a>
                                                        </Link>
                                                        <div
                                                            className={
                                                                styles.count_title
                                                            }
                                                        >
                                                            {clickSlider ===
                                                            index && (
                                                                <p>
                                                                    {clickSlider +
                                                                    1}{' '}
                                                                / <span>3</span>
                                                                </p>
                                                            )}
                                                            <h3>
                                                            THE {yacht.title}:{' '}
                                                                {image.yachtType}
                                                            </h3>
                                                        </div>
                                                        {clickSlider === index && (
                                                            <div
                                                                className={
                                                                    styles.bar
                                                                }
                                                            >
                                                                <div
                                                                    className={
                                                                        styles.prev
                                                                    }
                                                                >
                                                                    {clickSlider ===
                                                                0 ? (
                                                                            <p>PREV</p>
                                                                        ) : (
                                                                            <p
                                                                                onClick={() =>
                                                                                    previous()
                                                                                }
                                                                            >
                                                                        PREV
                                                                            </p>
                                                                        )}
                                                                </div>
                                                                <div
                                                                    className={
                                                                        styles.progress
                                                                    }
                                                                >
                                                                    <span
                                                                    //prettier-ignore
                                                                        style={clickSlider === index ? { width: `${(clickSlider + 1) * 33.33}%` } : { width: '0' }}
                                                                    ></span>
                                                                </div>
                                                                <div
                                                                    className={
                                                                        styles.next
                                                                    }
                                                                >
                                                                    {clickSlider ===
                                                                2 ? (
                                                                            <p>NEXT</p>
                                                                        ) : (
                                                                            <p
                                                                                onClick={() =>
                                                                                    next()
                                                                                }
                                                                            >
                                                                        NEXT
                                                                            </p>
                                                                        )}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            );
                                        })
                                ) : (
                                    <div
                                        className={styles.carousel_yacht_slider}
                                        style={{ width: '100%' }}
                                    >
                                        <MediaDetector
                                            mediaUrl="background"
                                            altText={yacht.title}
                                            title={yacht.title}
                                            imageLayout="fill"
                                            imageObjectFit="cover"
                                            imageObjectPosition="center"
                                        />
                                        {yacht.categories.edges.length > 0 &&
                                        yacht.categories.edges &&
                                        yacht.categories.edges
                                            .map(({ node }) => node)
                                            .map((category, key) => {
                                                return (
                                                    <div
                                                        className={
                                                            styles.bottom_information
                                                        }
                                                        key={key}
                                                    >
                                                        <Button
                                                            title={`Go to ${yacht.title}`}
                                                            url={`models/${category.slug}/${yacht.slug}`}
                                                            style="button_3"
                                                        />
                                                    </div>
                                                );
                                            })}
                                    </div>
                                )}
                        </div>
                    );
                })}
        </div>
    );
}
