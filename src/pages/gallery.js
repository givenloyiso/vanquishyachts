//* NEXT JS / THIRD PARTY IMPORT
import { useState } from 'react';
import { getApolloClient } from '@lib/apollo-client';
import { GiPlayButton } from 'react-icons/gi';
import { v4 as uuid_v4 } from 'uuid';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
//* IMPORT MIXED COMPONENTS
import styles from '@styles/pages/Gallery.module.scss';
import Seo from '@components/blocks/unique/Seo';
import MediaDetector from '@components/blocks/unique/MediaDetector';
import Navigation from '@components/blocks/unique/Navigation';

//* IMPORT CUSTOM BLOCK COMPONENTS
import SingleHero from '@components/blocks/basic/SingleHero';
import Newsletter from '@components/blocks/form/NewsletterForm';

//* IMPORT QUERY DATA
// META
import { QUERY_SITE_DATA } from '@data/site';
// PAGE
import { QUERY_GALLERY_PAGE } from '@data/pages';

export default function gallery({ Site_Meta, Site_Seo, CF_Gallery, CF_Form }) {
    const [clickPopup, setClickPopup] = useState(false);
    const [currentPage, SetCurrentPage] = useState(0);
    const galleryCount = CF_Gallery.gallery.length;
    const totalPages = Math.ceil(galleryCount / 9);

    const prev = () => {
        SetCurrentPage(currentPage === 0 ? 0 : currentPage - 1);
    };
    const next = () => {
        SetCurrentPage(
            currentPage === totalPages - 1 ? totalPages - 1 : currentPage + 1
        );
    };

    const closePopup = () => setClickPopup(false);

    const handleClick = (e) => {
        setClickPopup(e);
    };
    const prevPopup = (e) => {
        setClickPopup(`c${e - 1}`);
    };
    const nextPopup = (e) => {
        setClickPopup(`c${e + 1}`);
    };

    return (
        <div className={styles.gallery_section}>
            <Seo meta={Site_Meta} seo={Site_Seo} />

            <SingleHero
                stripeTitle="Discover our world"
                mediaUrl={
                    CF_Gallery.imageOrVideo.fileType === 'video' &&
                    CF_Gallery.imageOrVideo.video
                        ? CF_Gallery.imageOrVideo.video.mediaItemUrl
                        : CF_Gallery.imageOrVideo.image
                            ? CF_Gallery.imageOrVideo.image.sourceUrl
                            : null
                }
                title="Gallery"
                url=""
                title_second="News"
                url_second="/news"
                videoAutoPlay={true}
            />

            <div className={styles.gallery_container}>
                <div className={styles.info}>
                    <p className="text-block">Gallery</p>
                    {/* <h3>Gallery</h3> */}
                </div>
                <div className={styles.grid_box}>
                    {CF_Gallery.gallery &&
                        galleryCount > 0 &&
                        CF_Gallery.gallery
                            .slice(
                                currentPage === 0 ? 0 : currentPage * 1 * 9,
                                (currentPage + 1) * 9
                            )
                            .map((gallery, index) => {
                                return (
                                    <>
                                        <div
                                            key={uuid_v4()}
                                            className={styles.item}
                                            onClick={() =>
                                                handleClick(`c${index}`)
                                            }
                                        >
                                            <MediaDetector
                                                mediaUrl={
                                                    gallery.imageOrVideo
                                                        .fileType === 'video' &&
                                                    gallery.imageOrVideo.video
                                                        ? gallery.imageOrVideo
                                                            .video
                                                            .mediaItemUrl
                                                        : gallery.imageOrVideo
                                                            .image
                                                            ? gallery.imageOrVideo
                                                                .image.sourceUrl
                                                            : null
                                                }
                                                title={gallery.title}
                                                altText={
                                                    gallery.imageOrVideo
                                                        .fileType === 'video' &&
                                                    gallery.imageOrVideo.video
                                                        ? gallery.imageOrVideo
                                                            .video.title
                                                        : gallery.imageOrVideo
                                                            .image
                                                            ? gallery.imageOrVideo
                                                                .image.altText
                                                            : null
                                                }
                                            />
                                            {gallery.imageOrVideo.video &&
                                                gallery.imageOrVideo
                                                    .fileType === 'video' && (
                                                <div
                                                    className={
                                                        styles.playbutton
                                                    }
                                                >
                                                    <GiPlayButton
                                                        size={18}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                        {clickPopup !== false &&
                                            clickPopup === `c${index}` && (
                                            <div
                                                key={uuid_v4()}
                                                className={styles.popup}
                                            >
                                                {clickPopup === 'c0' ? (
                                                    <FiArrowLeftCircle
                                                        strokeWidth={0.1}
                                                        size={45}
                                                        className={
                                                            styles.left
                                                        }
                                                    />
                                                ) : (
                                                    <FiArrowLeftCircle
                                                        strokeWidth={0.5}
                                                        size={45}
                                                        onClick={() =>
                                                            prevPopup(index)
                                                        }
                                                        className={
                                                            styles.left
                                                        }
                                                    />
                                                )}
                                                <div
                                                    className={
                                                        styles.wrapper
                                                    }
                                                    onClick={closePopup}
                                                >
                                                    <AiOutlineClose
                                                        size={30}
                                                        onClick={closePopup}
                                                        className={
                                                            styles.close
                                                        }
                                                    />
                                                    <MediaDetector
                                                        mediaUrl={
                                                            gallery
                                                                .imageOrVideo
                                                                .fileType ===
                                                                    'video' &&
                                                                gallery
                                                                    .imageOrVideo
                                                                    .video
                                                                ? gallery
                                                                    .imageOrVideo
                                                                    .video
                                                                    .mediaItemUrl
                                                                : gallery
                                                                    .imageOrVideo
                                                                    .image
                                                                    ? gallery
                                                                        .imageOrVideo
                                                                        .image
                                                                        .sourceUrl
                                                                    : null
                                                        }
                                                        title={
                                                            gallery.title
                                                        }
                                                        altText={
                                                            gallery
                                                                .imageOrVideo
                                                                .fileType ===
                                                                    'video' &&
                                                                gallery
                                                                    .imageOrVideo
                                                                    .video
                                                                ? gallery
                                                                    .imageOrVideo
                                                                    .video
                                                                    .title
                                                                : gallery
                                                                    .imageOrVideo
                                                                    .image
                                                                    ? gallery
                                                                        .imageOrVideo
                                                                        .image
                                                                        .altText
                                                                    : null
                                                        }
                                                        videoAutoPlay={true}
                                                    />
                                                </div>
                                                {clickPopup === 'c8' ? (
                                                    <FiArrowRightCircle
                                                        strokeWidth={0.1}
                                                        size={45}
                                                        className={
                                                            styles.right
                                                        }
                                                    />
                                                ) : (
                                                    <FiArrowRightCircle
                                                        strokeWidth={0.5}
                                                        size={45}
                                                        onClick={() =>
                                                            nextPopup(index)
                                                        }
                                                        className={
                                                            styles.right
                                                        }
                                                    />
                                                )}
                                            </div>
                                        )}
                                    </>
                                );
                            })}
                </div>
            </div>

            {galleryCount > 9 && (
                <Navigation
                    current={currentPage}
                    pages={totalPages}
                    prev={prev}
                    next={next}
                />
            )}

            <Newsletter
                mediaUrl={
                    CF_Form.formImage ? CF_Form.formImage.sourceUrl : 'cover'
                }
            />
        </div>
    );
}

export async function getServerSideProps() {
    const apolloClient = getApolloClient();

    //* GET META DATA
    const DATA_SITE_DATA = await apolloClient.query({
        query: QUERY_SITE_DATA,
    });
    const Site_Meta = {
        ...DATA_SITE_DATA?.data.generalSettings,
    };

    //* GET GALLERY PAGE DATA
    const DATA_GALLERY_PAGE = await apolloClient.query({
        query: QUERY_GALLERY_PAGE,
    });
    const CF_Gallery = DATA_GALLERY_PAGE?.data.page.CF_Gallery;

    //* GET FORM DATA
    const CF_Form = DATA_GALLERY_PAGE?.data.page.CF_Form;

    //* GET SEO
    const Site_Seo = DATA_GALLERY_PAGE?.data.page.seo;

    //* RETURN DATA PAGE
    return {
        props: {
            Site_Meta,
            Site_Seo,
            CF_Gallery,
            CF_Form,
        },
    };
}
