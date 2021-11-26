//* IMPORT NEXT JS / THIRD PARTY
import React from 'react';

import { getApolloClient } from '@lib/apollo-client';

//* IMPORT MIXED COMPONENTS
import styles from '@styles/pages/Models.module.scss';
import Seo from '@components/blocks/unique/Seo';

//* IMPORT CUSTOM BLOCK COMPONENTS
import SliderYachts from '@components/blocks/slider/SliderYachts';
import SliderConcept from '@components/blocks/slider/SliderConcept';
import MultiBlock from '@components/blocks/unique/MultiBlock';
import SliderHeritageAndCharters from '@components/blocks/slider/SliderHeritageAndCharters';
import VideoBlock from '@components/blocks/unique/VideoBlock';
import Locations from '@components/blocks/unique/Locations';
import Newsletter from '@components/blocks/form/NewsletterForm';

//* IMPORT QUERY DATA
// META
import { QUERY_SITE_DATA } from '@data/site';
// PAGE
import { QUERY_MODELS_PAGE } from '@data/pages';
import { QUERY_ALL_LOCATIONS_DATA } from '@data/locations';
// YACHTS
// YACHTS
import { QUERY_ALL_ALUMINIUM_YACHTS } from '@data/yachts';
import { QUERY_ALL_COMPOSITE_YACHTS } from '@data/yachts';
import { QUERY_ALL_CONCEPT_YACHTS } from '@data/yachts';
import { QUERY_ALL_HERITAGE_YACHTS } from '@data/yachts';

export default function index({
    Site_Meta,
    Site_Seo,
    Yachts_Aluminium,
    Yachts_Composite,
    Yachts_Concept,
    Yachts_Heritage,
    CF_Models,
    CF_Locations,
    CF_Form,
}) {
    return (
        <div className={styles.container_models}>
            <Seo meta={Site_Meta} seo={Site_Seo} />

            <SliderYachts
                title="models"
                aluminiumArray={Yachts_Aluminium}
                compositeArray={Yachts_Composite}
                btnTitle="Discover all"
                btnUrl="/models"
                btnStyle="2"
                btnPosition=""
                background="transparant"
            />

            <div id="concept">
                <SliderConcept
                    gradient_textBlock={
                        CF_Models.section1.textBlock
                            ? CF_Models.section1.textBlock
                            : null
                    }
                    gradient_title={
                        CF_Models.section1.header
                            ? CF_Models.section1.header
                            : null
                    }
                    gradient_paragraph={
                        CF_Models.section1.paragraph
                            ? CF_Models.section1.paragraph
                            : null
                    }
                    mediaUrl={
                        CF_Models.section2.imageOrVideo.fileType === 'video' &&
                        CF_Models.section2.imageOrVideo.video
                            ? CF_Models.section2.imageOrVideo.video.mediaItemUrl
                            : CF_Models.section2.imageOrVideo.image
                                ? CF_Models.section2.imageOrVideo.image.sourceUrl
                                : null
                    }
                    altText={
                        CF_Models.section2.imageOrVideo.fileType === 'video' &&
                        CF_Models.section2.imageOrVideo.video
                            ? CF_Models.section2.imageOrVideo.video.title
                            : CF_Models.section2.imageOrVideo.image
                                ? CF_Models.section2.imageOrVideo.image.altText
                                : null
                    }
                    dataArray={Yachts_Concept}
                    title={
                        CF_Models.section2.header
                            ? CF_Models.section2.header
                            : null
                    }
                    content={
                        CF_Models.section2.paragraph
                            ? CF_Models.section2.paragraph
                            : null
                    }
                />
            </div>

            <div id="heritage">
                <SliderHeritageAndCharters
                    title="HERITAGE MODELS"
                    dataArray={Yachts_Heritage}
                />
            </div>

            <MultiBlock
                btnStyle="2"
                dataArray={
                    CF_Models.section3.multiBlock &&
                    CF_Models.section3.multiBlock.length > 0
                        ? CF_Models.section3.multiBlock.map((data) => data)
                        : [{}]
                }
            />

            <VideoBlock
                mediaUrl={
                    CF_Models.section4.imageOrVideo.fileType === 'video' &&
                    CF_Models.section4.imageOrVideo.video
                        ? CF_Models.section4.imageOrVideo.video.mediaItemUrl
                        : CF_Models.section4.imageOrVideo.image
                            ? CF_Models.section4.imageOrVideo.image.sourceUrl
                            : null
                }
                altText={
                    CF_Models.section4.imageOrVideo.fileType === 'video' &&
                    CF_Models.section4.imageOrVideo.video
                        ? CF_Models.section4.imageOrVideo.video.title
                        : CF_Models.section4.imageOrVideo.image
                            ? CF_Models.section4.imageOrVideo.image.altText
                            : null
                }
                title={
                    CF_Models.section4.header ? CF_Models.section4.header : null
                }
                textBlock={
                    CF_Models.section4.textBlock
                        ? CF_Models.section4.textBlock
                        : null
                }
                videoPlaceholder={
                    CF_Models.section4.placeholder
                        ? CF_Models.section4.placeholder.sourceUrl
                        : null
                }
                type={
                    CF_Models.section4.imageOrVideo.video &&
                    CF_Models.section4.imageOrVideo.fileType === 'video'
                        ? 'video'
                        : 'image'
                }
            />

            <MultiBlock
                BGcolor="white"
                title={
                    CF_Models.section5.header ? CF_Models.section5.header : null
                }
                btnStyle="2"
                dataArray={
                    CF_Models.section5.multiBlock &&
                    CF_Models.section5.multiBlock.length > 0
                        ? CF_Models.section5.multiBlock.map((data) => data)
                        : [{}]
                }
            />

            <Locations dataArray={CF_Locations} topPosition={'3rem'} />

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

    //* GET MODELS PAGE DATA
    const DATA_MODELS_PAGE = await apolloClient.query({
        query: QUERY_MODELS_PAGE,
    });
    const CF_Models = DATA_MODELS_PAGE?.data.page.CF_Models;

    //* GET LOCATIONS DATA
    const DATA_ALL_LOCATIONS_DATA = await apolloClient.query({
        query: QUERY_ALL_LOCATIONS_DATA,
    });
    const CF_Locations = DATA_ALL_LOCATIONS_DATA?.data.locations.edges.map(
        ({ node }) => node
    );

    //* GET ALUMINIUM
    const DATA_ALL_ALUMINIUM_YACHTS = await apolloClient.query({
        query: QUERY_ALL_ALUMINIUM_YACHTS,
    });
    const Yachts_Aluminium = DATA_ALL_ALUMINIUM_YACHTS?.data.yachts.edges
        .map(({ node }) => node)
        .map((CF_Aluminium) => CF_Aluminium);

    //* GET COMPOSITE
    const DATA_ALL_COMPOSITE_YACHTS = await apolloClient.query({
        query: QUERY_ALL_COMPOSITE_YACHTS,
    });
    const Yachts_Composite = DATA_ALL_COMPOSITE_YACHTS?.data.yachts.edges
        .map(({ node }) => node)
        .map((CF_Composite) => CF_Composite);

    //* GET CONCEPT
    const DATA_ALL_CONCEPT_YACHTS = await apolloClient.query({
        query: QUERY_ALL_CONCEPT_YACHTS,
    });
    const Yachts_Concept = DATA_ALL_CONCEPT_YACHTS?.data.yachts.edges
        .map(({ node }) => node)
        .map((CF_Concept) => CF_Concept);

    //* GET HERITAGE
    const DATA_ALL_HERITAGE_YACHTS = await apolloClient.query({
        query: QUERY_ALL_HERITAGE_YACHTS,
    });
    const Yachts_Heritage = DATA_ALL_HERITAGE_YACHTS?.data.yachts.edges
        .map(({ node }) => node)
        .map((CF_Heritage) => CF_Heritage);

    //* GET FORM DATA
    const CF_Form = DATA_MODELS_PAGE?.data.page.CF_Form;

    //* GET SEO
    const Site_Seo = DATA_MODELS_PAGE?.data.page.seo;

    //* RETURN DATA
    return {
        props: {
            Site_Meta,
            Site_Seo,
            Yachts_Aluminium,
            Yachts_Composite,
            Yachts_Concept,
            Yachts_Heritage,
            CF_Models,
            CF_Locations,
            CF_Form,
        },
    };
}
