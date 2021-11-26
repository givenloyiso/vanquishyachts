// IMPORT NEXT JS / THIRD PARTY
import Head from 'next/head';
import { getApolloClient } from '@lib/apollo-client';

// IMPORT MIXED COMPONENTS
import styles from '@styles/pages/Service.module.scss';

// IMPORT CUSTOM BLOCK COMPONENTS
import HeaderHero from '@components/blocks/basic/HeaderHero';
import AboutBlock from '@components/blocks/basic/AboutBlock';
import Locations from '@components/blocks/unique/Locations';
import MultiBlock from '@components/blocks/unique/MultiBlock';
import Newsletter from '@components/blocks/form/NewsletterForm';
import MediaDetector from '@components/blocks/unique/MediaDetector';

//* IMPORT QUERY DATA
// META
import { QUERY_SITE_DATA } from '@data/site';
// PAGE
import { QUERY_SERVICE_PAGE } from '@data/pages';
// LOCATIONS
import { QUERY_ALL_LOCATIONS_DATA } from '@data/locations';

export default function service({ CF_Locations, CF_Form, CF_Service }) {
    return (
        <div className={styles.container_service}>
            <Head>
                <title>Service - Vanquish Yachts</title>
                <meta
                    name="description"
                    content="Yacht that matches your demands and desires."
                />
            </Head>
            <HeaderHero
                stripeTitle="discover our world"
                mediaUrl={
                    CF_Service.section1.imageOrVideo.fileType === 'video' &&
                    CF_Service.section1.imageOrVideo.video
                        ? CF_Service.section1.imageOrVideo.video.mediaItemUrl
                        : CF_Service.section1.imageOrVideo.image
                            ? CF_Service.section1.imageOrVideo.image.sourceUrl
                            : 'background'
                }
                title={
                    CF_Service.section1.header
                        ? CF_Service.section1.header
                        : null
                }
                content={
                    CF_Service.section1.paragraph
                        ? CF_Service.section1.paragraph
                        : null
                }
                btnTitle={
                    CF_Service.section1.button.title
                        ? CF_Service.section1.button.title
                        : null
                }
                btnUrl={
                    CF_Service.section1.button.url
                        ? CF_Service.section1.button.url
                        : null
                }
                btnStyle="1"
                positionContent="left"
                videoAutoPlay={true}
                size="big"
            />

            <MultiBlock
                title={
                    CF_Service.section3.header
                        ? CF_Service.section3.header
                        : null
                }
                btnStyle="2"
                dataArray={
                    CF_Service.section3.multiBlock &&
                    CF_Service.section3.multiBlock.length > 0
                        ? CF_Service.section3.multiBlock.map((data) => data)
                        : [{}]
                }
            />
            <Locations dataArray={CF_Locations} topPosition={'3rem'} />

            <div className={styles.service_section4}>
                <div className={styles.service_section4_wrapper}>
                    <h2>
                        {CF_Service.section4.header
                            ? CF_Service.section4.header
                            : null}
                    </h2>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: CF_Service.section4.paragraph,
                        }}
                    ></div>
                </div>

                <div className={styles.service_section4_image}>
                    <MediaDetector
                        mediaUrl={
                            CF_Service.section4.image
                                ? CF_Service.section4.image.sourceUrl
                                : null
                        }
                        altText={
                            CF_Service.section4.image
                                ? CF_Service.section4.image.altText
                                : null
                        }
                        title={
                            CF_Service.section4.header
                                ? CF_Service.section4.header
                                : null
                        }
                        imageLayout="fill"
                        imageObjectFit="cover"
                        imageObjectPosition="center"
                    />
                </div>
            </div>

            <AboutBlock
                textBlock={
                    CF_Service.section2.textBlock
                        ? CF_Service.section2.textBlock
                        : 'About'
                }
                dataArray={
                    CF_Service.section2.repeater &&
                    CF_Service.section2.repeater.length > 0
                        ? CF_Service.section2.repeater
                        : [{}]
                }
            />

            <Newsletter
                mediaUrl={
                    CF_Form.formImage ? CF_Form.formImage.sourceUrl : 'cover'
                }
            />
        </div>
    );
}

//* GET GRAPHQL DATA
export async function getServerSideProps() {
    const apolloClient = getApolloClient();

    //* GET META DATA
    const DATA_SITE_DATA = await apolloClient.query({
        query: QUERY_SITE_DATA,
    });
    const Site_Meta = {
        ...DATA_SITE_DATA?.data.generalSettings,
    };

    //* GET SERVICE PAGE DATA
    const DATA_SERVICE_PAGE = await apolloClient.query({
        query: QUERY_SERVICE_PAGE,
    });
    const CF_Service = DATA_SERVICE_PAGE?.data.page.CF_Service;

    //* GET LOCATIONS DATA
    const DATA_ALL_LOCATIONS_DATA = await apolloClient.query({
        query: QUERY_ALL_LOCATIONS_DATA,
    });
    const CF_Locations = DATA_ALL_LOCATIONS_DATA?.data.locations.edges.map(
        ({ node }) => node
    );
    //* GET FORM DATA
    const CF_Form = DATA_SERVICE_PAGE?.data.page.CF_Form;

    //* GET SEO
    const Site_Seo = DATA_SERVICE_PAGE?.data.page.seo;

    //* RETURN DATA PAGE
    return {
        props: {
            Site_Meta,
            Site_Seo,
            CF_Locations,
            CF_Form,
            CF_Service,
        },
    };
}
