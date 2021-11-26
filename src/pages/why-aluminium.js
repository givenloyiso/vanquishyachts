// IMPORT NEXT JS / THIRD PARTY IMPORT
import { getApolloClient } from '@lib/apollo-client';

// IMPORT MIXED COMPONENTS
import styles from '@styles/pages/Home.module.scss';
import Seo from '@components/blocks/unique/Seo';

// IMPORT CUSTOM BLOCK COMPONENTS
import HeaderHero from '@components/blocks/basic/HeaderHero';
import SimpleBlock from '@components/blocks/basic/SimpleBlock';
import VideoBlock from '@components/blocks/unique/VideoBlock';
import MultiBlock from '@components/blocks/unique/MultiBlock';
import SliderYachts from '@components/blocks/slider/SliderYachts';
import ContactForm from '@components/blocks/form/ContactForm';

//* IMPORT QUERY DATA
// META
import { QUERY_SITE_DATA } from '@data/site';
// PAGE
import { QUERY_ALUMINIUM_PAGE } from '@data/pages';
// YACHTS
import { QUERY_ALL_ALUMINIUM_YACHTS } from '@data/yachts';

export default function WhyAluminium({
    Site_Meta,
    Site_Seo,
    CF_WhyAluminium,
    Yachts_Aluminium,
    CF_Form,
}) {
    return (
        <div className={styles.container}>
            <Seo meta={Site_Meta} seo={Site_Seo} />

            <HeaderHero
                stripeTitle="discover our world"
                mediaUrl={
                    CF_WhyAluminium.section1.imageOrVideo.fileType ===
                        'video' && CF_WhyAluminium.section1.imageOrVideo.video
                        ? CF_WhyAluminium.section1.imageOrVideo.video
                            .mediaItemUrl
                        : CF_WhyAluminium.section1.imageOrVideo.image
                            ? CF_WhyAluminium.section1.imageOrVideo.image.sourceUrl
                            : null
                }
                title={CF_WhyAluminium.section1.header}
                content={CF_WhyAluminium.section1.paragraph}
                btnTitle={CF_WhyAluminium.section1.button.title}
                btnUrl={CF_WhyAluminium.section1.button.url}
                btnStyle="1"
                btnPosition="center"
                videoAutoPlay={true}
                size="big"
            />

            <MultiBlock
                title={
                    CF_WhyAluminium.section2.header
                        ? CF_WhyAluminium.section2.header
                        : 'Discover'
                }
                btnStyle="2"
                dataArray={
                    CF_WhyAluminium.section2.multiBlock &&
                    CF_WhyAluminium.section2.multiBlock.length > 0
                        ? CF_WhyAluminium.section2.multiBlock
                        : [{}]
                }
            />

            <VideoBlock
                mediaUrl={
                    CF_WhyAluminium.section3.video
                        ? CF_WhyAluminium.section3.video.mediaItemUrl
                        : null
                }
                altText={
                    CF_WhyAluminium.section3.header
                        ? CF_WhyAluminium.section3.header
                        : null
                }
                videoPlaceholder={
                    CF_WhyAluminium.section3.placeholder
                        ? CF_WhyAluminium.section3.placeholder.sourceUrl
                        : null
                }
                type={'video'}
            />

            <SimpleBlock
                title={CF_WhyAluminium.section3.header}
                dataArray={CF_WhyAluminium.section3.paragraphRepeater}
                style="super"
            />

            <SliderYachts
                title="Our aluminium custom models"
                aluminiumArray={Yachts_Aluminium}
                btnTitle="Discover all"
                btnUrl="/models"
                btnStyle="2"
                btnPosition=""
                background="transparant"
            />

            <ContactForm
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
    //* GET WHY ALUMINIUM PAGE DATA
    const DATA_ALUMINIUM_PAGE = await apolloClient.query({
        query: QUERY_ALUMINIUM_PAGE,
    });
    const CF_WhyAluminium = DATA_ALUMINIUM_PAGE?.data.page.CF_WhyAluminium;

    //* GET YACHT ALUMINIUM
    const DATA_ALL_ALUMINIUM_YACHTS = await apolloClient.query({
        query: QUERY_ALL_ALUMINIUM_YACHTS,
    });
    const Yachts_Aluminium = DATA_ALL_ALUMINIUM_YACHTS?.data.yachts.edges
        .map(({ node }) => node)
        .map((CF_Aluminium) => CF_Aluminium);

    //* GET FORM DATA
    const CF_Form = DATA_ALUMINIUM_PAGE?.data.page.CF_Form;

    //* GET SEO
    const Site_Seo = DATA_ALUMINIUM_PAGE?.data.page.seo;

    return {
        props: {
            Site_Meta,
            Site_Seo,
            CF_WhyAluminium,
            Yachts_Aluminium,
            CF_Form,
        },
    };
}
