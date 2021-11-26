// IMPORT NEXT JS / THIRD PARTY
import { getApolloClient } from '@lib/apollo-client';

// IMPORT MIXED COMPONENTS
import styles from '@styles/pages/Home.module.scss';
import Seo from '@components/blocks/unique/Seo';

// IMPORT CUSTOM BLOCK COMPONENTS
import SliderLocationCharters from '@components/blocks/slider/SliderLocationCharters';
import SimpleBlock from '@components/blocks/basic/SimpleBlock';
import SliderCharterOverview from '@components/blocks/slider/SliderCharterOverview';
import Newsletter from '@components/blocks/form/NewsletterForm';

//* IMPORT QUERY DATA
// META
import { QUERY_SITE_DATA } from '@data/site';
// PAGE
import { QUERY_CHARTERS_OVERVIEW_PAGE } from '@data/pages';
// LOCATIONS
import { QUERY_ALL_CHARTERS_DATA } from '@data/locations';

export default function index({
    Site_Meta,
    Site_Seo,
    CF_ChartersOverview,
    CF_ChartersLocation,
    CF_Form,
}) {
    return (
        <div className={styles.container_charter}>
            <Seo meta={Site_Meta} seo={Site_Seo} />

            <SliderLocationCharters
                mediaUrl={
                    CF_ChartersOverview.section1.imageOrVideo.fileType ===
                        'video' &&
                    CF_ChartersOverview.section1.imageOrVideo.video
                        ? CF_ChartersOverview.section1.imageOrVideo.video
                            .mediaItemUrl
                        : CF_ChartersOverview.section1.imageOrVideo.image
                            ? CF_ChartersOverview.section1.imageOrVideo.image
                                .sourceUrl
                            : null
                }
                stripeTitle={
                    CF_ChartersOverview.section1.textBlock
                        ? CF_ChartersOverview.section1.textBlock
                        : 'Charters'
                }
                dataArray={CF_ChartersLocation ? CF_ChartersLocation : [{}]}
                title={
                    CF_ChartersOverview.section1.header
                        ? CF_ChartersOverview.section1.header
                        : null
                }
                content={
                    CF_ChartersOverview.section1.paragraph
                        ? CF_ChartersOverview.section1.paragraph
                        : null
                }
            />
            <SimpleBlock
                dataArray={CF_ChartersOverview.section2.content}
                title={CF_ChartersOverview.section2.content.header}
                style="simple"
            />
            <SimpleBlock
                title={CF_ChartersOverview.section3.header}
                mediaUrl={
                    CF_ChartersOverview.section3.imageOrVideo.fileType ===
                        'video' &&
                    CF_ChartersOverview.section3.imageOrVideo.video
                        ? CF_ChartersOverview.section3.imageOrVideo.video
                            .mediaItemUrl
                        : CF_ChartersOverview.section3.imageOrVideo.image
                            ? CF_ChartersOverview.section3.imageOrVideo.image
                                .sourceUrl
                            : 'cover'
                }
                dataArray={[CF_ChartersOverview.section3]}
                style="contact"
            />

            <SliderCharterOverview
                title={CF_ChartersOverview.section4.header}
                textBlock={CF_ChartersOverview.section4.textBlock}
                paragraph={CF_ChartersOverview.section4.paragraph}
                dataArray={CF_ChartersLocation ? CF_ChartersLocation : [{}]}
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

    //* GET CHARTERS DATA PAGE
    const DATA_CHARTERS_OVERVIEW_PAGE = await apolloClient.query({
        query: QUERY_CHARTERS_OVERVIEW_PAGE,
    });
    const CF_ChartersOverview =
        DATA_CHARTERS_OVERVIEW_PAGE?.data.page.CF_ChartersOverview;

    //* GET CHARTERS LOCATIONS DATA
    const DATA_ALL_CHARTERS_DATA = await apolloClient.query({
        query: QUERY_ALL_CHARTERS_DATA,
    });
    const CF_ChartersLocation =
        DATA_ALL_CHARTERS_DATA?.data.locations.edges.map(({ node }) => node);

    //* GET FORM DATA
    const CF_Form = DATA_CHARTERS_OVERVIEW_PAGE?.data.page.CF_Form;

    //* GET SEO
    const Site_Seo = DATA_CHARTERS_OVERVIEW_PAGE?.data.page.seo;

    //* RETURN DATA PAGE
    return {
        props: {
            Site_Meta,
            Site_Seo,
            CF_ChartersOverview,
            CF_ChartersLocation,
            CF_Form,
        },
    };
}
