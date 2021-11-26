// IMPORT NEXT JS / THIRD PARTY
import { getApolloClient } from '@lib/apollo-client';
// IMPORT MIXED COMPONENTS
import styles from '@styles/pages/Events.module.scss';
import Seo from '@components/blocks/unique/Seo';

// IMPORT CUSTOM BLOCK COMPONENTS
import HeaderHero from '@components/blocks/basic/HeaderHero';
import ContactForm from '@components/blocks/form/ContactForm';
import EventsSlider from '@components/blocks/slider/EventsSlider';
import SimpleBlock from '@components/blocks/basic/SimpleBlock';

//* IMPORT QUERY DATA
// META
import { QUERY_SITE_DATA } from '@data/site';
// PAGE
import { QUERY_EVENTS_PAGE } from '@data/pages';
// EVENTS
import { QUERY_ALL_EVENTS } from '@data/events';

export default function index({
    Site_Meta,
    Site_Seo,
    CF_Events,
    CF_SingleEvent,
    CF_Form,
}) {
    return (
        <div className={styles.container_events}>
            <Seo meta={Site_Meta} seo={Site_Seo} />

            <HeaderHero
                stripeTitle="discover our world"
                mediaUrl={
                    CF_Events.section1.imageOrVideo.fileType === 'video' &&
                    CF_Events.section1.imageOrVideo.video
                        ? CF_Events.section1.imageOrVideo.video.mediaItemUrl
                        : CF_Events.section1.imageOrVideo.image
                            ? CF_Events.section1.imageOrVideo.image.sourceUrl
                            : 'background'
                }
                title={
                    CF_Events.section1.header ? CF_Events.section1.header : null
                }
                content={
                    CF_Events.section1.paragraph
                        ? CF_Events.section1.paragraph
                        : null
                }
                btnTitle={
                    CF_Events.section1.button.title
                        ? CF_Events.section1.button.title
                        : null
                }
                btnUrl={
                    CF_Events.section1.button.url
                        ? CF_Events.section1.button.url
                        : null
                }
                btnStyle="1"
                positionContent="left"
                videoAutoPlay={true}
            />

            <EventsSlider
                title="Upcoming Events"
                dataArray={CF_SingleEvent.filter(
                    (dates) =>
                        new Date(
                            dates.CF_SingleEvent.eventInformation.date
                        ).setHours(0, 0, 0) >
                            new Date().setHours(0, 0, 0, 0) ===
                        true
                )}
            />

            <SimpleBlock
                title={CF_Events.section2.header}
                textBlock={CF_Events.section2.textBlock}
                mediaUrl={
                    CF_Events.section2.imageOrVideo.fileType === 'video' &&
                    CF_Events.section2.imageOrVideo.video
                        ? CF_Events.section2.imageOrVideo.video.mediaItemUrl
                        : CF_Events.section2.imageOrVideo.image
                            ? CF_Events.section2.imageOrVideo.image.sourceUrl
                            : 'cover'
                }
                altText={
                    CF_Events.section2.imageOrVideo.fileType === 'video' &&
                    CF_Events.section2.imageOrVideo.video
                        ? CF_Events.section2.imageOrVideo.video.title
                        : CF_Events.section2.imageOrVideo.image
                            ? CF_Events.section2.imageOrVideo.image.altText
                            : null
                }
                type={
                    CF_Events.section2.imageOrVideo.fileType === 'video' &&
                    CF_Events.section2.imageOrVideo.video
                        ? 'video'
                        : null
                }
                dataArray={[CF_Events.section2.paragraph]}
                style="events"
            />
            
            <EventsSlider
                title="Memories"
                dataArray={CF_SingleEvent.filter(
                    (dates) =>
                        new Date(
                            dates.CF_SingleEvent.eventInformation.date
                        ).setHours(0, 0, 0) >
                            new Date().setHours(0, 0, 0, 0) ===
                        false
                )}
            />
            <ContactForm
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
    //* GET EVENTS PAGE DATA
    const DATA_EVENTS_PAGE = await apolloClient.query({
        query: QUERY_EVENTS_PAGE,
    });
    const CF_Events = DATA_EVENTS_PAGE?.data.page.CF_Events;

    //* GET SINGLE EVENTS POST
    const DATA_ALL_EVENTS = await apolloClient.query({
        query: QUERY_ALL_EVENTS,
        variables: {
            maxCount: 36,
        },
    });
    const CF_SingleEvent = DATA_ALL_EVENTS?.data.events.edges.map(
        ({ node }) => node
    );

    //* GET FORM DATA
    const CF_Form = DATA_EVENTS_PAGE?.data.page.CF_Form;

    //* GET SEO
    const Site_Seo = DATA_EVENTS_PAGE?.data.page.seo;

    //* RETURN DATA
    return {
        props: {
            Site_Meta,
            Site_Seo,
            CF_Events,
            CF_SingleEvent,
            CF_Form,
        },
    };
}
