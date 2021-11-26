// IMPORT NEXT JS / THIRD PARTY
import { getApolloClient } from '@lib/apollo-client';
import { v4 as uuid_v4 } from 'uuid';

// IMPORT MIXED COMPONENTS
import styles from '@styles/pages/Models.module.scss';
import Seo from '@components/blocks/unique/Seo';

// IMPORT CUSTOM BLOCK COMPONENTS
import HeaderHero from '@components/blocks/basic/HeaderHero';
import SpecificationsHeader from '@components/blocks/basic/SpecificationsHeader';
import GradientBlock from '@components/blocks/basic/GradientBlock';
import MultiBlock from '@components/blocks/unique/MultiBlock';
import InformationForm from '@components/blocks/form/InformationForm';

//* IMPORT QUERY DATA
// META
import { QUERY_SITE_DATA } from '@data/site';
// YACHTS
import { QUERY_ALL_CONCEPT_YACHTS } from '@data/yachts';
import { QUERY_CONCEPT_SLUG_YACHTS } from '@data/yachts';

export default function Post({ Site_Meta, Site_Seo, CF_Concept, CF_Form }) {
    return (
        <div className={styles.container}>
            <Seo meta={Site_Meta} seo={Site_Seo[0]} />

            {CF_Concept.map(({ section1 }) => {
                return (
                    <HeaderHero
                        key={uuid_v4()}
                        stripeTitle="discover our world"
                        mediaUrl={
                            section1.imageOrVideo.fileType === 'video' &&
                            section1.imageOrVideo.video
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

            {CF_Concept.map(({ specifications }) => {
                return (
                    <SpecificationsHeader
                        key={uuid_v4()}
                        speed={
                            specifications.speed
                                ? specifications.speed + '+ knots'
                                : null
                        }
                        people={
                            specifications.people
                                ? specifications.people + ' seats'
                                : null
                        }
                        length={`${
                            specifications.length.meters
                                ? specifications.length.meters
                                : null
                        } m / ${
                            specifications.length.feet
                                ? specifications.length.feet
                                : null
                        } ft`}
                        beam={`${
                            specifications.beam.meters
                                ? specifications.beam.meters
                                : null
                        } m / ${
                            specifications.beam.feet
                                ? specifications.beam.feet
                                : null
                        } ft`}
                    />
                );
            })}

            {CF_Concept.map(({ section2 }) => {
                return (
                    <GradientBlock
                        key={uuid_v4()}
                        textBlock={
                            section2.textBlock ? section2.textBlock : null
                        }
                        title={section2.header ? section2.header : null}
                        text={section2.paragraph ? section2.paragraph : null}
                        mediaUrl={
                            section2.image ? section2.image.sourceUrl : null
                        }
                    />
                );
            })}

            {CF_Concept.map(({ section3 }) => {
                return (
                    <MultiBlock
                        key={uuid_v4()}
                        title={section3.header ? section3.header : null}
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

            {CF_Form.map(({ formImage }) => {
                return (
                    <InformationForm
                        key={uuid_v4()}
                        title="Information request"
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

    //* GET CONCEPT
    const DATA_CONCEPT_SLUG_YACHTS = await apolloClient.query({
        query: QUERY_CONCEPT_SLUG_YACHTS,
        variables: {
            slug: slug,
        },
    });

    const CF_Concept = DATA_CONCEPT_SLUG_YACHTS?.data.yachts.edges
        .map(({ node }) => node)
        .map(({ CF_Concept }) => CF_Concept);

    //* GET FORM DATA
    const CF_Form = DATA_CONCEPT_SLUG_YACHTS?.data.yachts.edges
        .map(({ node }) => node)
        .map(({CF_Form}) => CF_Form);

    //* GET SEO
    const Site_Seo = DATA_CONCEPT_SLUG_YACHTS?.data.yachts.edges
        .map(({ node }) => node)
        .map(({ seo }) => seo);

    //* RETURN DATA PAGE
    return {
        props: {
            Site_Meta,
            Site_Seo,
            CF_Concept,
            CF_Form,
        },
        revalidate: 60,
    };
}

// * TELL NEXT JS THE EXISTENT PAGES
export async function getStaticPaths() {
    const apolloClient = getApolloClient();

    //* GET CONCEPT
    const DATA_ALL_CONCEPT_YACHTS = await apolloClient.query({
        query: QUERY_ALL_CONCEPT_YACHTS,
    });

    const CF_Concept = DATA_ALL_CONCEPT_YACHTS?.data.yachts.edges.map(
        ({ node }) => node
    );

    return {
        paths: CF_Concept.map(({ slug }) => {
            return {
                params: {
                    slug: slug,
                },
            };
        }),
        fallback: false,
    };
}
