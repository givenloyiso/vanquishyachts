// IMPORT NEXT JS / THIRD PARTY
import { getApolloClient } from '@lib/apollo-client';
import { v4 as uuid_v4 } from 'uuid';

// IMPORT MIXED COMPONENTS
import styles from '@styles/pages/Models.module.scss';
import Seo from '@components/blocks/unique/Seo';

// IMPORT CUSTOM BLOCK COMPONENTS
import HeaderHero from '@components/blocks/basic/HeaderHero';
import SpecificationsHeader from '@components/blocks/basic/SpecificationsHeader';
import Specifications from '@components/blocks/basic/Specifications';
import VideoBlock from '@components/blocks/unique/VideoBlock';
import GradientBlock from '@components/blocks/basic/GradientBlock';
import MultiBlock from '@components/blocks/unique/MultiBlock';
import SoundQuote from '@components/blocks/unique/quote/SoundQuote';
// import Aluminium from '@components/blocks/unique/Aluminium';
// import CarouselSlider from '@components/blocks/slider/CarouselSlider';
import InfiniteSlider from '@components/blocks/slider/InfiniteSlider';
import InformationForm from '@components/blocks/form/InformationForm';

//* IMPORT QUERY DATA
// META
import { QUERY_SITE_DATA } from '@data/site';
// YACHTS
import { QUERY_ALL_ALUMINIUM_YACHTS } from '@data/yachts';
import { QUERY_ALUMINIUM_SLUG_YACHTS } from '@data/yachts';

export default function Post({ Site_Meta, Site_Seo, CF_Aluminium, CF_Form }) {
    return (
        <div className={styles.container}>
            <Seo meta={Site_Meta} seo={Site_Seo[0]} />

            {CF_Aluminium.map(({ section1 }) => {
                return (
                    <HeaderHero
                        key={uuid_v4()}
                        stripeTitle="discover our world"
                        mediaUrl={
                            section1.imageOrVideo.video &&
                            section1.imageOrVideo.fileType === 'video'
                                ? section1.imageOrVideo.video.mediaItemUrl
                                : section1.imageOrVideo.image
                                    ? section1.imageOrVideo.image.sourceUrl
                                    : 'background'
                        }
                        title={section1.header ? section1.header : null}
                        content={section1.paragraph ? section1.paragraph : null}
                        btnTitle="Explore more"
                        btnUrl="/why-aluminium"
                        btnStyle="1"
                        positionContent="left"
                        videoAutoPlay={true}
                    />
                );
            })}
            {CF_Aluminium.map(({ specifications }) => {
                return (
                    // prettier-ignore
                    <SpecificationsHeader
                        key={uuid_v4()}
                        speed={specifications.maxSpeed ? specifications.maxSpeed[0].knots + '+ knots' : null}
                        people={specifications.people ? specifications.people + ' seats' : null}
                        length={`${specifications.length.meters ? specifications.length.meters : null} m / ${specifications.length.feet ? specifications.length.feet : null} ft`}
                        beam={`${specifications.beam.meters ? specifications.beam.meters : null} m / ${specifications.beam.feet ? specifications.beam.feet : null} ft`}
                    />
                );
            })}
            {CF_Aluminium.map(({ section2 }) => {
                return (
                    <GradientBlock
                        key={uuid_v4()}
                        textBlock={
                            section2.textBlock ? section2.textBlock : null
                        }
                        title={section2.header ? section2.header : null}
                        text={section2.paragraph ? section2.paragraph : null}
                        mediaUrl={
                            section2.image.sourceUrl
                                ? section2.image.sourceUrl
                                : null
                        }
                    />
                );
            })}
            {CF_Aluminium.map(({ section3 }) => {
                return (
                    <MultiBlock
                        key={uuid_v4()}
                        title={section3.header}
                        btnStyle="2"
                        dataArray={
                            section3.multiBlock &&
                            section3.multiBlock.length > 0
                                ? section3.multiBlock.map((data) => data)
                                : [{}]
                        }
                    />
                );
            })}
            {CF_Aluminium.map(({ section4 }) => {
                return (
                    <SoundQuote
                        key={uuid_v4()}
                        title={section4.header ? section4.header : null}
                        content={section4.quote ? section4.quote : null}
                        img={section4.image ? section4.image.sourceUrl : null}
                        audio={
                            section4.audio ? section4.audio.mediaItemUrl : null
                        }
                    />
                );
            })}

            {/* {CF_Aluminium.map(({ section5, uuid_v4() }) => {
                return (
                    <Aluminium
                        key={uuid_v4()}
                        title={section5.header}
                        yachtsArray={
                            section5.customizationGallery &&
                            section5.customizationGallery.length > 0
                                ? section5.customizationGallery
                                : [{}]
                        }
                    />
                );
            })} */}

            {CF_Aluminium.map(({ section6 }) => {
                return (
                    <InfiniteSlider
                        key={uuid_v4()}
                        dataArray={
                            section6.imageGallery &&
                            section6.imageGallery.length > 0
                                ? section6.imageGallery
                                : [{}]
                        }
                        title={section6.header ? section6.header : null}
                    />
                );
            })}

            {CF_Aluminium.map(({ specifications, section7 }) => {
                return (
                    // prettier-ignore
                    <Specifications
                        key={uuid_v4()}
                        title='Specs'
                        beamM={specifications.beam.meters ? specifications.beam.meters : null}
                        beamFt={specifications.beam.feet ? specifications.beam.feet : null}
                        people={specifications.people ? specifications.people : null}
                        lengthM={specifications.length.meters ? specifications.length.meters : null}
                        lengthFt={specifications.length.feet ? specifications.length.feet : null}
                        engineArray={specifications.engines && specifications.engines.length > 0 ? specifications.engines : [{}]}
                        draughtM={specifications.draught.meters ? specifications.draught.meters : null}
                        draughtFt={specifications.draught.feet ? specifications.draught.feet : null}
                        displacement={specifications.displacement ? specifications.displacement : null}
                        fuelL={specifications.fuel.liters ? specifications.fuel.liters : null}
                        fuelGal={specifications.fuel.usGallon ? specifications.fuel.usGallon : null}
                        speedArray={specifications.maxSpeed && specifications.maxSpeed.length > 0 ? specifications.maxSpeed : [{}]}
                        levelsArray={section7 && section7.length > 0 ? section7 : [{}]}
                    />
                );
            })}

            {CF_Aluminium.map(({ section8 }) => {
                return (
                    <VideoBlock
                        key={uuid_v4()}
                        title={section8.header ? section8.header : null}
                        textBlock={
                            section8.textBlock ? section8.textBlock : null
                        }
                        mediaUrl={
                            section8.imageOrVideo.video &&
                            section8.imageOrVideo.fileType === 'video'
                                ? section8.imageOrVideo.video.mediaItemUrl
                                : section8.imageOrVideo.image
                                    ? section8.imageOrVideo.image.sourceUrl
                                    : null
                        }
                        videoPlaceholder={
                            section8.placeholder
                                ? section8.placeholder.sourceUrl
                                : null
                        }
                        type={
                            section8.imageOrVideo.video &&
                            section8.imageOrVideo.fileType === 'video'
                                ? 'video'
                                : 'image'
                        }
                    />
                );
            })}

            {CF_Aluminium.map(({ section9 }) => {
                return (
                    <MultiBlock
                        key={uuid_v4()}
                        title={section9.header ? section9.header : null}
                        btnStyle="2"
                        dataArray={
                            section9.multiBlock &&
                            section9.multiBlock.length > 0
                                ? section9.multiBlock.map((data) => data)
                                : [{}]
                        }
                    />
                );
            })}

            {CF_Form.map(({ formImage }) => {
                return (
                    <InformationForm
                        key={uuid_v4()}
                        mediaUrl={formImage ? formImage.sourceUrl : 'cover'}
                        altText={
                            formImage ? formImage.altText : 'VQ Yachts on water'
                        }
                    />
                );
            })}
        </div>
    );
}

//* GET GRAPHQL DATA
export async function getStaticProps({ params = {} } = {}) {
    const { slug } = params;

    const apolloClient = getApolloClient();

    //* GET META DATA
    const DATA_SITE_DATA = await apolloClient.query({
        query: QUERY_SITE_DATA,
    });
    const Site_Meta = {
        ...DATA_SITE_DATA?.data.generalSettings,
    };

    //* GET ALUMINIUM DATA
    const DATA_ALUMINIUM_SLUG_YACHTS = await apolloClient.query({
        query: QUERY_ALUMINIUM_SLUG_YACHTS,
        variables: {
            slug: slug,
        },
    });

    const CF_Aluminium = DATA_ALUMINIUM_SLUG_YACHTS?.data.yachts.edges
        .map(({ node }) => node)
        .map(({ CF_Aluminium }) => CF_Aluminium);

    //* GET FORM DATA
    const CF_Form = DATA_ALUMINIUM_SLUG_YACHTS?.data.yachts.edges
        .map(({ node }) => node)
        .map(({ CF_Form }) => CF_Form);

    //* GET SEO
    const Site_Seo = DATA_ALUMINIUM_SLUG_YACHTS?.data.yachts.edges
        .map(({ node }) => node)
        .map(({ seo }) => seo);

    //* RETURN DATA PAGE
    return {
        props: {
            Site_Meta,
            Site_Seo,
            CF_Aluminium,
            CF_Form,
        },
        revalidate: 60,
    };
}

// * TELL NEXT JS THE EXISTENT PAGES
export async function getStaticPaths() {
    const apolloClient = getApolloClient();

    //* GET ALUMINIUM
    const DATA_ALL_ALUMINIUM_YACHTS = await apolloClient.query({
        query: QUERY_ALL_ALUMINIUM_YACHTS,
    });

    const CF_Aluminium = DATA_ALL_ALUMINIUM_YACHTS?.data.yachts.edges.map(
        ({ node }) => node
    );

    return {
        paths: CF_Aluminium.map(({ slug }) => {
            return {
                params: {
                    slug: slug,
                },
            };
        }),
        fallback: false,
    };
}
