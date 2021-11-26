// IMPORT NEXT JS / THIRD PARTY
import Link from 'next/link';
import { getApolloClient } from '@lib/apollo-client';
// IMPORT MIXED COMPONENTS
import styles from '@styles/pages/Careers.module.scss';
import Seo from '@components/blocks/unique/Seo'; // BASIC SEO AND WP YOAST

// IMPORT CUSTOM BLOCK COMPONENTS
import HeaderHero from '@components/blocks/basic/HeaderHero';
import JobForm from '@components/blocks/form/JobForm';
import MediaDetector from '@components/blocks/unique/MediaDetector';

//* IMPORT QUERY DATA
import { QUERY_SITE_DATA } from '@data/site'; // META
import { QUERY_CAREERS_PAGE } from '@data/pages'; // PAGE
import { QUERY_ALL_CAREERS } from '@data/careers'; // CAREERS

export default function index({
    Site_Meta,
    Site_Seo,
    CF_Careers,
    CF_SingleCareer,
    CF_Form,
}) {
    return (
        <div className={styles.container_careers}>
            <Seo meta={Site_Meta} seo={Site_Seo} />

            <HeaderHero
                stripeTitle="discover our world"
                mediaUrl={
                    CF_Careers.section1.imageOrVideo.fileType === 'video' &&
                    CF_Careers.section1.imageOrVideo.video
                        ? CF_Careers.section1.imageOrVideo.video.mediaItemUrl
                        : CF_Careers.section1.imageOrVideo.image
                            ? CF_Careers.section1.imageOrVideo.image.sourceUrl
                            : 'background'
                }
                title={
                    CF_Careers.section1.header
                        ? CF_Careers.section1.header
                        : null
                }
                content={
                    CF_Careers.section1.paragraph
                        ? CF_Careers.section1.paragraph
                        : null
                }
                btnTitle={
                    CF_Careers.section1.button.title
                        ? CF_Careers.section1.button.title
                        : null
                }
                btnUrl={
                    CF_Careers.section1.button.url
                        ? CF_Careers.section1.button.url
                        : null
                }
                btnStyle="1"
                positionContent="left"
                videoAutoPlay={true}
            />
            <div className={styles.multi_block}>
                <div className={styles.careers_information}>
                    <h3>{CF_Careers.section2.header}</h3>
                    <span className="text-block">
                        {CF_Careers.section2.textBlock}
                    </span>
                    <p>{CF_Careers.section2.paragraph}</p>
                </div>

                {CF_SingleCareer &&
                    CF_SingleCareer.map((data, key) => (
                        <div className={styles.multi_block_wrapper} key={key}>
                            <Link href={`/careers/${data.slug}`} passHref locale="nl">
                                <a>
                                    <div className={styles.multi_block_array}>
                                        <div
                                            className={
                                                styles.multi_block_array_image
                                            }
                                        >
                                            <MediaDetector
                                                mediaUrl={
                                                    data.CF_SingleCareer
                                                        .featuredImage
                                                        ? data.CF_SingleCareer
                                                            .featuredImage
                                                            .sourceUrl
                                                        : null
                                                }
                                                altText={
                                                    data.CF_SingleCareer
                                                        .featuredImage
                                                        ? data.CF_SingleCareer
                                                            .featuredImage
                                                            .altText
                                                        : null
                                                }
                                                title={
                                                    data.CF_SingleCareer
                                                        .jobTitle
                                                        ? data.CF_SingleCareer
                                                            .jobTitle
                                                        : null
                                                }
                                                imageLayout="fill"
                                                imageObjectFit="cover"
                                                imageObjectPosition="center"
                                            />
                                        </div>
                                        <div
                                            className={
                                                styles.multi_block_array_text
                                            }
                                        >
                                            <span className="text-block">
                                                {
                                                    data.CF_SingleCareer
                                                        .location.CF_Location
                                                        .address.city
                                                }
                                            </span>
                                            <h3
                                                className={
                                                    styles.multi_block_array_title
                                                }
                                            >
                                                {data.title}
                                            </h3>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    ))}
            </div>

            <JobForm
                title="Free application"
                job="Free application"
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
    //* GET CAREERS PAGE DATA
    const DATA_CAREERS_PAGE = await apolloClient.query({
        query: QUERY_CAREERS_PAGE,
    });

    const CF_Careers = DATA_CAREERS_PAGE?.data.page.CF_Careers;

    //* GET SINGLE CAREERS POST
    const DATA_ALL_CAREERS = await apolloClient.query({
        query: QUERY_ALL_CAREERS,
        variables: {
            maxCount: 36,
        },
    });
    const CF_SingleCareer = DATA_ALL_CAREERS?.data.jobs.edges.map(
        ({ node }) => node
    );

    //* GET FORM DATA
    const CF_Form = DATA_CAREERS_PAGE?.data.page.CF_Form;

    //* GET SEO
    const Site_Seo = DATA_CAREERS_PAGE?.data.page.seo;

    //* RETURN DATA
    return {
        props: {
            Site_Meta,
            Site_Seo,
            CF_Careers,
            CF_SingleCareer,
            CF_Form,
        },
    };
}
