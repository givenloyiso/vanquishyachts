// IMPORT NEXT JS / THIRD PARTY IMPORT
import { getApolloClient } from '@lib/apollo-client';

// IMPORT MIXED COMPONENTS
import styles from '@styles/pages/About.module.scss';
import Seo from '@components/blocks/unique/Seo';

// IMPORT CUSTOM BLOCK COMPONENTS
import HeaderHero from '@components/blocks/basic/HeaderHero';
// import SimpleBlock from '@components/blocks/basic/SimpleBlock';
// import AboutBlock from '@components/blocks/basic/AboutBlock';
import MultiBlock from '@components/blocks/unique/MultiBlock';
import Quote from '@components/blocks/unique/quote/Quote';
import ContactForm from '@components/blocks/form/ContactForm';

//* IMPORT QUERY DATA
// META
import { QUERY_SITE_DATA } from '@data/site';
// PAGE
import { QUERY_ABOUT_PAGE } from '@data/pages';

export default function About({ Site_Meta, Site_Seo, CF_About, CF_Form }) {
    return (
        <div className={styles.container}>
            <Seo meta={Site_Meta} seo={Site_Seo} />

            <HeaderHero
                stripeTitle="discover our world"
                mediaUrl={
                    CF_About.section1.imageOrVideo.fileType === 'video' &&
                    CF_About.section1.imageOrVideo.video
                        ? CF_About.section1.imageOrVideo.video.mediaItemUrl
                        : CF_About.section1.imageOrVideo.image
                            ? CF_About.section1.imageOrVideo.image.sourceUrl
                            : null
                }
                title={CF_About.section1.header}
                content={CF_About.section1.paragraph}
                btnTitle={CF_About.section1.button.title}
                btnUrl={CF_About.section1.button.url}
                btnStyle="1"
                btnPosition="center"
                videoAutoPlay={true}
                size="big"
            />

            <MultiBlock
                title={
                    CF_About.section2.header
                        ? CF_About.section2.header
                        : 'Discover'
                }
                btnStyle="2"
                dataArray={
                    CF_About.section2.multiBlock &&
                    CF_About.section2.multiBlock.length > 0
                        ? CF_About.section2.multiBlock
                        : [{}]
                }
            />

            <Quote
                title={
                    CF_About.section3.header
                        ? CF_About.section3.header
                        : 'Quote'
                }
                content={
                    CF_About.section3.quote ? CF_About.section3.quote : null
                }
                author={
                    CF_About.section3.quotationFrom
                        ? CF_About.section3.quotationFrom
                        : null
                }
            />

            {/* <SimpleBlock
                mediaUrl={
                    CF_About.section4.image.sourceUrl
                        ? CF_About.section4.image.sourceUrl
                        : null
                }
                title={
                    CF_About.section4.header ? CF_About.section4.header : null
                }
                textBlock={
                    CF_About.section4.textBlock
                        ? CF_About.section4.textBlock
                        : null
                }
                dataArray={
                    CF_About.section4.paragraphRepeater &&
                    CF_About.section4.paragraphRepeater.length > 0
                        ? CF_About.section4.paragraphRepeater
                        : [{}]
                }
            />

            <AboutBlock
                textBlock={
                    CF_About.section5.textBlock
                        ? CF_About.section5.textBlock
                        : 'About'
                }
                dataArray={
                    CF_About.section5.repeater &&
                    CF_About.section5.repeater.length > 0
                        ? CF_About.section5.repeater
                        : [{}]
                }
            /> */}

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
    //* GET ABOUT PAGE DATA
    const DATA_ABOUT_PAGE = await apolloClient.query({
        query: QUERY_ABOUT_PAGE,
    });
    const CF_About = DATA_ABOUT_PAGE?.data.page.CF_About;

    //* GET FORM DATA
    const CF_Form = DATA_ABOUT_PAGE?.data.page.CF_Form;

    //* GET SEO
    const Site_Seo = DATA_ABOUT_PAGE?.data.page.seo;

    //* RETURN DATA PAGE
    return {
        props: {
            Site_Meta,
            Site_Seo,
            CF_About,
            CF_Form,
        },
    };
}
