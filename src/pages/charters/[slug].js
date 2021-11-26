//* IMPORT NEXT JS / THIRD PARTY
import { gql } from '@apollo/client';
import { getApolloClient } from '@lib/apollo-client';
import { v4 as uuid_v4 } from 'uuid';

//* IMPORT MIXED COMPONENTS
import styles from '@styles/pages/Home.module.scss';
import Seo from '@components/blocks/unique/Seo';

//* IMPORT CUSTOM BLOCK COMPONENTS
import HeaderHero from '@components/blocks/basic/HeaderHero';

//* import SliderLocationCharters from '@components/blocks/slider/SliderLocationCharters';
import SimpleBlock from '@components/blocks/basic/SimpleBlock';
import SliderHeritageAndCharters from '@components/blocks/slider/SliderHeritageAndCharters';
import Charterform from '@components/blocks/form/CharterForm';

//* IMPORT QUERY DATA
// META
import { QUERY_SITE_DATA } from '@data/site';
// PAGE
import { QUERY_ALL_CHARTER_BY_SLUG_DATA } from '@data/locations';

export default function slug({
    Site_Meta,
    Site_Seo,
    CF_CharterLocation,
    CF_Form,
    LocationInfo,
}) {
    return (
        <div className={styles.container_charter_single}>
            <Seo meta={Site_Meta} seo={Site_Seo} />

            <HeaderHero
                key={uuid_v4()}
                mediaUrl={
                    CF_CharterLocation.section1.imageOrVideo.fileType ===
                        'video' &&
                    CF_CharterLocation.section1.imageOrVideo.video
                        ? CF_CharterLocation.section1.imageOrVideo.video
                            .mediaItemUrl
                        : CF_CharterLocation.section1.imageOrVideo.image
                            ? CF_CharterLocation.section1.imageOrVideo.image
                                .sourceUrl
                            : null
                }
                stripeTitle={
                    CF_CharterLocation.section1.textBlock
                        ? CF_CharterLocation.section1.textBlock
                        : 'Charters'
                }
                title={
                    CF_CharterLocation.section1.header
                        ? CF_CharterLocation.section1.header
                        : null
                }
                content={
                    CF_CharterLocation.section1.paragraph
                        ? CF_CharterLocation.section1.paragraph
                        : null
                }
                videoAutoPlay={true}
                positionContent="left"
            />

            <SimpleBlock
                key={uuid_v4()}
                dataArray={
                    CF_CharterLocation.section2.repeater
                        ? CF_CharterLocation.section2.repeater
                        : [{}]
                }
                style="simple"
                mediaUrl={
                    CF_CharterLocation.section2.image
                        ? CF_CharterLocation.section2.image.sourceUrl
                        : null
                }
            />
            <SimpleBlock
                key={uuid_v4()}
                title={CF_CharterLocation.section3.header}
                mediaUrl={
                    CF_CharterLocation.section3.imageOrVideo.fileType ===
                        'video' && CF_Charters.section3.imageOrVideo.video
                        ? CF_CharterLocation.section3.imageOrVideo.video
                            .mediaItemUrl
                        : CF_CharterLocation.section3.imageOrVideo.image
                            ? CF_CharterLocation.section3.imageOrVideo.image
                                .sourceUrl
                            : 'cover'
                }
                dataArray={[CF_CharterLocation.section3]}
                style="contact"
            />

            {
                <SliderHeritageAndCharters
                    key={uuid_v4()}
                    title="SELECT YOUR YACHT"
                    dataArray={CF_CharterLocation.section4.charters}
                    style="charters"
                />
            }

            <Charterform
                key={uuid_v4()}
                title="Charter"
                mediaUrl={
                    CF_Form.formImage ? CF_Form.formImage.sourceUrl : 'cover'
                }
                altText={CF_Form.formImage ? CF_Form.formImage.altText : null}
                dataArray={CF_CharterLocation.section4.charters}
                location={LocationInfo}
            />
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
    const DATA_CHARTER_LOCATION_DATA = await apolloClient.query({
        query: QUERY_ALL_CHARTER_BY_SLUG_DATA,
        variables: {
            slug: slug,
        },
    });
    const CF_CharterLocation =
        DATA_CHARTER_LOCATION_DATA?.data.locationBy.CF_Charters;

    //* GET LOCATION
    const LocationInfo = DATA_CHARTER_LOCATION_DATA?.data.locationBy;

    //* GET FORM DATA
    const CF_Form = DATA_CHARTER_LOCATION_DATA?.data.locationBy.CF_Form;

    //* GET SEO
    const Site_Seo = DATA_CHARTER_LOCATION_DATA?.data.locationBy.seo;

    //* RETURN DATA PAGE
    return {
        props: {
            Site_Meta,
            Site_Seo,
            CF_CharterLocation,
            CF_Form,
            LocationInfo,
        },
        revalidate: 60,
    };
}

// * TELL NEXT JS THE EXISTENT PAGES
export async function getStaticPaths() {
    const apolloClient = getApolloClient();

    const data = await apolloClient.query({
        query: gql`
            {
                locations(
                    first: 150
                    where: { categoryName: "charter-locations" }
                ) {
                    edges {
                        node {
                            id
                            title
                            slug
                        }
                    }
                }
            }
        `,
    });

    //* GET NEWS PATHS
    const locations = data?.data.locations.edges.map(({ node }) => node);

    return {
        paths: locations.map(({ slug }) => {
            return {
                params: {
                    slug: slug,
                },
            };
        }),
        fallback: 'blocking',
    };
}
