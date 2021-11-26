// NEXT JS / THIRD PARTY IMPORT
import Link from 'next/link';
import { getApolloClient } from '@lib/apollo-client';
import { RiFacebookFill, RiInstagramLine, RiYoutubeFill } from 'react-icons/ri';
import { v4 as uuid_v4 } from 'uuid';

//IMPORT MIXED COMPONENTS
import styles from '@styles/pages/News.module.scss';
import Seo from '@components/blocks/unique/Seo';
import MediaDetector from '@components/blocks/unique/MediaDetector';
import Button from '@components/blocks/button/Button';
import JobForm from '@components/blocks/form/JobForm';

//* IMPORT QUERY DATA
import { QUERY_SITE_DATA } from '@data/site'; // META
import { QUERY_ALL_CAREERS } from '@data/careers'; // ALL JOBS
import { QUERY_CAREERS_BY_SLUG } from '@data/careers'; //SINGLE JOB PAGE

export default function slug({
    Site_Meta,
    Site_Seo,
    CF_SingleCareer,
    CF_Form,
}) {
    return (
        <div className={styles.single_news_section}>
            <Seo meta={Site_Meta} seo={Site_Seo[0]} />

            <div className={styles.left_vertical_style_line}>
                <div></div>
                <span>Discover our world</span>
            </div>

            {CF_SingleCareer.map((section1) => {
                return (
                    <div key={uuid_v4()} className={styles.hero_single_news}>
                        <div className={styles.header_content}>
                            <p className="text-block">
                                {section1.CF_SingleCareer.category}
                            </p>
                            <h1 className={styles.title}>{section1.title}</h1>
                            <p className={styles.date}>
                                {`published ${section1.CF_SingleCareer.publishedDate}`}
                            </p>

                            <Button
                                title={'go back'}
                                url={'/careers'}
                                style={1}
                                position={'right'}
                            />
                        </div>
                    </div>
                );
            })}
            {CF_SingleCareer.map((section2) => {
                return (
                    <div key={uuid_v4()} className={styles.articel_content}>
                        <div className={styles.image_banner}>
                            <MediaDetector
                                mediaUrl={
                                    section2.CF_SingleCareer.featuredImage
                                        .sourceUrl
                                }
                            />
                        </div>
                        <div className={styles.content}>
                            <div
                                className={styles.articel_text}
                                dangerouslySetInnerHTML={{
                                    __html: section2.content,
                                }}
                            />

                            <div className={styles.follow_us}>
                                <p className="slash-text">
                                    <span>/</span> FOLLOW US
                                </p>
                                <ul>
                                    <li>
                                        <Link
                                            href="https://www.facebook.com/VanquishYachts/"
                                            passHref
                                        >
                                            <a
                                                target="_blank"
                                                aria-label="Link to Vanquish Yachts Facebook"
                                                rel="noopener"
                                            >
                                                <RiFacebookFill size={30} />
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="https://www.instagram.com/vanquishyachts/"
                                            passHref
                                            aria-label="Link to Vanquish Yachts Instagram"
                                            rel="noopener"
                                        >
                                            <a target="_blank">
                                                <RiInstagramLine size={30} />
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="https://www.youtube.com/channel/UCscWkaZiSTE7kufY1Sx_YjQ"
                                            passHref
                                            aria-label="Link to Vanquish Yachts Youtube"
                                            rel="noopener"
                                        >
                                            <a target="_blank">
                                                <RiYoutubeFill size={30} />
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                );
            })}

            <JobForm
                title={CF_SingleCareer[0].title}
                job={CF_SingleCareer[0].title}
                mediaUrl={
                    CF_Form.formImage ? CF_Form.formImage.sourceUrl : 'cover'
                }
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

    //* GET CAREERS BY SLUG DATA
    const DATA_CAREERS_BY_SLUG = await apolloClient.query({
        query: QUERY_CAREERS_BY_SLUG,
        variables: {
            slug: slug,
        },
    });
    const CF_SingleCareer = DATA_CAREERS_BY_SLUG?.data.jobs.edges.map(
        ({ node }) => node
    );

    //* GET FORM DATA
    const CF_Form = DATA_CAREERS_BY_SLUG?.data.jobs.edges
        .map(({ node }) => node)
        .map(({ CF_Form }) => CF_Form);

    //* GET SEO
    const Site_Seo = DATA_CAREERS_BY_SLUG?.data.jobs.edges
        .map(({ node }) => node)
        .map(({ seo }) => seo);

    //* RETURN DATA PAGE
    return {
        props: {
            Site_Meta,
            Site_Seo,
            CF_SingleCareer,
            CF_Form,
        },
        revalidate: 60,
    };
}

// * TELL NEXT JS THE EXISTENT PAGES
export async function getStaticPaths() {
    const apolloClient = getApolloClient();

    //* GET NEWS ARTICLES POST
    const DATA_ALL_CAREERS = await apolloClient.query({
        query: QUERY_ALL_CAREERS,
        variables: {
            maxCount: 1000,
        },
    });
    const CF_SingleCareer = DATA_ALL_CAREERS?.data.jobs.edges.map(
        ({ node }) => node
    );

    return {
        paths: CF_SingleCareer.map(({ slug }) => {
            return {
                params: {
                    slug: slug,
                },
            };
        }),
        fallback: 'blocking',
    };
}
