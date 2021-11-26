//* IMPORT NEXT JS / THIRD PARTY
import { getApolloClient } from '@lib/apollo-client';

//* IMPORT MIXED COMPONENTS
import styles from '@styles/pages/Home.module.scss';
import Seo from '@components/blocks/unique/Seo';

//* IMPORT CUSTOM BLOCK COMPONENTS
import HeaderHero from '@components/blocks/basic/HeaderHero';
import SpecialHero from '@components/blocks/basic/SpecialHero';
import MultiBlock from '@components/blocks/unique/MultiBlock';
import Quote from '@components/blocks/unique/quote/Quote';
import SliderYachts from '@components/blocks/slider/SliderYachts';
import Locations from '@components/blocks/unique/Locations';
import SliderLocationCharters from '@components/blocks/slider/SliderLocationCharters';
import News from '@components/blocks/unique/News';
import Newsletter from '@components/blocks/form/NewsletterForm';

//* IMPORT QUERY DATA
// META
import { QUERY_SITE_DATA } from '@data/site';
// PAGE
import { QUERY_HOME_PAGE } from '@data/pages';
// LOCATIONS
import { QUERY_ALL_LOCATIONS_DATA } from '@data/locations';
import { QUERY_ALL_CHARTERS_DATA } from '@data/locations';
// NEWS
import { QUERY_ALL_ARTICLES } from '@data/news';
// YACHTS
import { QUERY_ALL_ALUMINIUM_YACHTS } from '@data/yachts';
import { QUERY_ALL_COMPOSITE_YACHTS } from '@data/yachts';

export default function Home({
    Site_Meta,
    Site_Seo,
    CF_Home,
    Yachts_Aluminium,
    Yachts_Composite,
    CF_News,
    CF_Locations,
    CF_ChartersLocation,
    CF_Form,
}) {
    return (
        <div className={styles.container_home}>
            <Seo meta={Site_Meta} seo={Site_Seo} />
            <HeaderHero
                stripeTitle="discover our world"
                mediaUrl={
                    CF_Home.section1.imageOrVideo.fileType === 'video' &&
                    CF_Home.section1.imageOrVideo.video
                        ? CF_Home.section1.imageOrVideo.video.mediaItemUrl
                        : CF_Home.section1.imageOrVideo.image
                            ? CF_Home.section1.imageOrVideo.image.sourceUrl
                            : null
                }
                altText={
                    CF_Home.section1.imageOrVideo.fileType === 'video' &&
                    CF_Home.section1.imageOrVideo.video
                        ? CF_Home.section1.imageOrVideo.video.title
                        : CF_Home.section1.imageOrVideo.image
                            ? CF_Home.section1.imageOrVideo.image.altText
                            : null
                }
                title={CF_Home.section1.header}
                content={CF_Home.section1.content}
                btnTitle={CF_Home.section1.button.title}
                btnUrl={CF_Home.section1.button.url}
                btnStyle="1"
                btnPosition="center"
                videoAutoPlay={true}
            />

            <SpecialHero
                textBlock={CF_Home.section2.textBlock}
                title={CF_Home.section2.header}
                boatTitle={CF_Home.section2.boatOption.title}
                boatImg={
                    CF_Home.section2.boatOption.CF_Aluminium.specifications
                        .yachtIcon
                        ? CF_Home.section2.boatOption.CF_Aluminium
                            .specifications.yachtIcon.sourceUrl
                        : CF_Home.section2.boatOption.CF_Composite
                            .specifications.yachtIcon
                            ? CF_Home.section2.boatOption.CF_Composite
                                .specifications.yachtIcon.sourceUrl
                            : null
                }
                boatContent={CF_Home.section2.paragraph}
                boatContent2={CF_Home.section2.paragraphVanquish}
                btnStyle="1"
                btnPosition="center"
                boatBtnTitle="discover"
                boatBtnUrl={`models/${CF_Home.section2.boatOption.categories.nodes[0].slug}/${CF_Home.section2.boatOption.slug}`}
            />

            <MultiBlock
                title={
                    CF_Home.section3.header
                        ? CF_Home.section3.header
                        : 'Discover'
                }
                btnStyle="2"
                dataArray={
                    CF_Home.section3.multiBlock &&
                    CF_Home.section3.multiBlock.length > 0
                        ? CF_Home.section3.multiBlock
                        : [{}]
                }
            />

            <Quote
                title={
                    CF_Home.section4.header ? CF_Home.section4.header : 'Quote'
                }
                content={CF_Home.section4.quote ? CF_Home.section4.quote : null}
                author={
                    CF_Home.section4.quotationFrom
                        ? CF_Home.section4.quotationFrom
                        : null
                }
            />

            <SliderYachts
                title="models"
                aluminiumArray={Yachts_Aluminium}
                compositeArray={Yachts_Composite}
                btnTitle="Discover all"
                btnUrl="/models"
                btnStyle="2"
                btnPosition=""
            />

            <Locations dataArray={CF_Locations} topPosition={'3rem'} />

            <SliderLocationCharters
                mediaUrl={
                    CF_Home.section5.image
                        ? CF_Home.section5.image.sourceUrl
                        : 'background'
                }
                altText={
                    CF_Home.section5.image
                        ? CF_Home.section5.image.altText
                        : null
                }
                stripeTitle={
                    CF_Home.section5.textBlock
                        ? CF_Home.section5.textBlock
                        : 'Charters'
                }
                dataArray={CF_ChartersLocation ? CF_ChartersLocation : null}
                title={CF_Home.section5.header ? CF_Home.section5.header : null}
                btnTitle={
                    CF_Home.section5.button.title
                        ? CF_Home.section5.button.title
                        : 'Discover all'
                }
                btnUrl="/charters"
                btnStyle="2"
                btnPosition="right"
                content={
                    CF_Home.section5.paragraph
                        ? CF_Home.section5.paragraph
                        : null
                }
            />

            <News
                title="news"
                textBlock="making memories"
                btnTitle="all news"
                btnUrl="/news"
                btnStyle="1"
                btnPosition="right"
                dataArray={CF_News}
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

    //* GET HOME PAGE DATA
    const DATA_HOME_PAGE = await apolloClient.query({
        query: QUERY_HOME_PAGE,
    });
    const CF_Home = DATA_HOME_PAGE?.data.page.CF_Home;

    //* GET YACHT ALUMINIUM
    const DATA_ALUMINIUM_YACHTS = await apolloClient.query({
        query: QUERY_ALL_ALUMINIUM_YACHTS,
    });
    const Yachts_Aluminium = DATA_ALUMINIUM_YACHTS?.data.yachts.edges
        .map(({ node }) => node)
        .map((CF_Aluminium) => CF_Aluminium);

    //* GET YACHT COMPOSITE
    const DATA_COMPOSITE_YACHTS = await apolloClient.query({
        query: QUERY_ALL_COMPOSITE_YACHTS,
    });
    const Yachts_Composite = DATA_COMPOSITE_YACHTS?.data.yachts.edges
        .map(({ node }) => node)
        .map((CF_Composite) => CF_Composite);

    //* GET LOCATIONS DATA
    const DATA_ALL_LOCATIONS_DATA = await apolloClient.query({
        query: QUERY_ALL_LOCATIONS_DATA,
    });
    const CF_Locations = DATA_ALL_LOCATIONS_DATA?.data.locations.edges.map(
        ({ node }) => node
    );

    //* GET CHARTERS LOCATIONS DATA
    const DATA_ALL_CHARTERS_DATA = await apolloClient.query({
        query: QUERY_ALL_CHARTERS_DATA,
    });
    const CF_ChartersLocation =
        DATA_ALL_CHARTERS_DATA?.data.locations.edges.map(({ node }) => node);

    //* GET NEWS POST
    const DATA_ALL_ARTICLES = await apolloClient.query({
        query: QUERY_ALL_ARTICLES,
        variables: {
            maxCount: 4,
        },
    });
    const CF_News = DATA_ALL_ARTICLES?.data.posts.edges.map(({ node }) => node);

    //* GET FORM DATA
    const CF_Form = DATA_HOME_PAGE?.data.page.CF_Form;

    //* GET SEO
    const Site_Seo = DATA_HOME_PAGE?.data.page.seo;

    //* RETURN DATA PAGE
    return {
        props: {
            Site_Meta,
            Site_Seo,
            CF_Home,
            Yachts_Aluminium,
            Yachts_Composite,
            CF_Locations,
            CF_ChartersLocation,
            CF_News,
            CF_Form,
        },
    };
}
