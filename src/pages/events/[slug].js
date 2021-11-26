// IMPORT NEXT JS / THIRD PARTY
import { getApolloClient } from '@lib/apollo-client';
import { v4 as uuid_v4 } from 'uuid';

// IMPORT MIXED COMPONENTS
import styles from '@styles/pages/Events.module.scss';
import Seo from '@components/blocks/unique/Seo';

import HeaderHero from '@components/blocks/basic/HeaderHero';
import MultiBlock from '@components/blocks/unique/MultiBlock';
import Quote from '@components/blocks/unique/quote/Quote';
import SimpleBlock from '@components/blocks/basic/SimpleBlock';
import ContactForm from '@components/blocks/form/ContactForm';

//* IMPORT QUERY DATA
// META
import { QUERY_SITE_DATA } from '@data/site';
// EVENTS
import { QUERY_ALL_EVENTS } from '@data/events';
import { QUERY_EVENTS_BY_SLUG } from '@data/events';

export default function slug({ Site_Meta, Site_Seo, CF_SingleEvent, CF_Form }) {
    return (
        <div className={styles.container_events}>
            <Seo meta={Site_Meta} seo={Site_Seo[0]} />
            {CF_SingleEvent.map(({ eventInformation }) => {
                return (
                    <HeaderHero
                        key={uuid_v4()}
                        stripeTitle="Events"
                        mediaUrl={
                            eventInformation.imageOrVideo.video &&
                            eventInformation.imageOrVideo.fileType === 'video'
                                ? eventInformation.imageOrVideo.video
                                    .mediaItemUrl
                                : eventInformation.imageOrVideo.image
                                    ? eventInformation.imageOrVideo.image.sourceUrl
                                    : 'background'
                        }
                        altText={
                            eventInformation.imageOrVideo.video &&
                            eventInformation.imageOrVideo.fileType === 'video'
                                ? eventInformation.imageOrVideo.video.title
                                : eventInformation.imageOrVideo.image
                                    ? eventInformation.imageOrVideo.image.altText
                                    : null
                        }
                        title={Site_Seo[0].title}
                        content={
                            eventInformation.paragraph
                                ? eventInformation.paragraph
                                : null
                        }
                        btnStyle="1"
                        positionContent="left"
                        videoAutoPlay={true}
                    />
                );
            })}
            {CF_SingleEvent.map(({ section2 }) => {
                return (
                    <MultiBlock
                        key={uuid_v4()}
                        title={section2.header}
                        btnStyle="2"
                        dataArray={
                            section2.multiBlock &&
                            section2.multiBlock.length > 0
                                ? section2.multiBlock.map((data) => data)
                                : [{}]
                        }
                    />
                );
            })}
            {CF_SingleEvent.map(({ section3 }) => {
                return (
                    <Quote
                        key={uuid_v4()}
                        title={section3.header ? section3.header : 'Quote'}
                        content={section3.quote ? section3.quote : null}
                        author={
                            section3.quotationFrom
                                ? section3.quotationFrom
                                : null
                        }
                        noIcon={true}
                    />
                );
            })}
            {CF_SingleEvent.map(({ section4 }) => {
                return (
                    <SimpleBlock
                        key={uuid_v4()}
                        mediaUrl={
                            section4.image ? section4.image.sourceUrl : null
                        }
                        title={section4.header ? section4.header : null}
                        textBlock={
                            section4.textBlock ? section4.textBlock : null
                        }
                        dataArray={
                            section4.paragraphRepeater &&
                            section4.paragraphRepeater.length > 0
                                ? section4.paragraphRepeater
                                : [{}]
                        }
                    />
                );
            })}

            {CF_Form.map((CF_Form) => {
                return (
                    <ContactForm
                        key={uuid_v4()}
                        mediaUrl={
                            CF_Form.formImage
                                ? CF_Form.formImage.sourceUrl
                                : 'cover'
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

    //* GET CHARTER LOCATION BY SLUG DATA
    const DATA_EVENTS_BY_SLUG = await apolloClient.query({
        query: QUERY_EVENTS_BY_SLUG,
        variables: {
            slug: slug,
        },
    });
    const CF_SingleEvent = DATA_EVENTS_BY_SLUG?.data.events.edges
        .map(({ node }) => node)
        .map(({ CF_SingleEvent }) => CF_SingleEvent);

    //* GET FORM DATA
    const CF_Form = DATA_EVENTS_BY_SLUG?.data.events.edges
        .map(({ node }) => node)
        .map(({ CF_Form }) => CF_Form);

    //* GET SEO
    const Site_Seo = DATA_EVENTS_BY_SLUG?.data.events.edges
        .map(({ node }) => node)
        .map(({ seo }) => seo);

    //* RETURN DATA PAGE
    return {
        props: {
            Site_Meta,
            Site_Seo,
            CF_SingleEvent,
            CF_Form,
        },
        revalidate: 60,
    };
}

// * TELL NEXT JS THE EXISTENT PAGES
export async function getStaticPaths() {
    const apolloClient = getApolloClient();

    //* GET NEWS ARTICLES POST
    const DATA_ALL_EVENTS = await apolloClient.query({
        query: QUERY_ALL_EVENTS,
        variables: {
            maxCount: 1000,
        },
    });
    const CF_SingleEvent = DATA_ALL_EVENTS?.data.events.edges.map(
        ({ node }) => node
    );

    return {
        paths: CF_SingleEvent.map(({ slug }) => {
            return {
                params: {
                    slug: slug,
                },
            };
        }),
        fallback: 'blocking',
    };
}
