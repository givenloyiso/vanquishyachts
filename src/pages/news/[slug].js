// NEXT JS / THIRD PARTY IMPORT
import Link from 'next/link';
import { getApolloClient } from '@lib/apollo-client';
import { v4 as uuid_v4 } from 'uuid';
import { RiFacebookFill, RiInstagramLine, RiYoutubeFill } from 'react-icons/ri';

//IMPORT MIXED COMPONENTS
import styles from '@styles/pages/News.module.scss';
import Seo from '@components/blocks/unique/Seo';
import MediaDetector from '@components/blocks/unique/MediaDetector';

// IMPORT CUSTOM BLOCK COMPONENTS
import SliderRelatedArticles from '@components/blocks/slider/SliderRelatedArticles';
import InfiniteSlider from '@components/blocks/slider/InfiniteSlider';

//* IMPORT QUERY DATA
// META
import { QUERY_SITE_DATA } from '@data/site';

// POSTS -> Articles
import { QUERY_ALL_ARTICLES } from '@data/news';
import { QUERY_POST_BY_SLUG } from '@data/news';
import { QUERY_RELATED_POST } from '@data/news';

export default function slug({
    Site_Meta,
    Site_Seo,
    CF_Articles,
    CF_RelatedArticles,
}) {
    return (
        <div className={styles.single_news_section}>
            <Seo meta={Site_Meta} seo={Site_Seo} />

            <div className={styles.left_vertical_style_line}>
                <div></div>
                <span>Discover our world</span>
            </div>

            <div className={styles.hero_single_news}>
                <div className={styles.header_content}>
                    <p className="text-block">
                        {CF_Articles.categories.edges.map(({ node }) => {
                            return ` ${node.name} `;
                        })}
                    </p>
                    <h1 className={styles.title}>{CF_Articles.title}</h1>

                    <p className={styles.date}>
                        {`published ${new Date(
                            CF_Articles.date
                        ).toLocaleDateString('nl-NL', {
                            year: 'numeric',
                            month: 'short',
                        })}`}
                    </p>
                </div>
            </div>

            <div className={styles.articel_content}>
                <div className={styles.image_banner}>
                    {
                        <MediaDetector
                            mediaUrl={
                                CF_Articles.CF_Article.imageOrVideo.fileType ===
                                    'video' &&
                                CF_Articles.CF_Article.imageOrVideo.video
                                    ? CF_Articles.CF_Article.imageOrVideo.video
                                        .mediaItemUrl
                                    : CF_Articles.CF_Article.imageOrVideo.image
                                        ? CF_Articles.CF_Article.imageOrVideo.image
                                            .sourceUrl
                                        : null
                            }
                            title={CF_Articles.title}
                            altText={
                                CF_Articles.CF_Article.imageOrVideo.fileType ===
                                    'video' &&
                                CF_Articles.CF_Article.imageOrVideo.video
                                    ? CF_Articles.CF_Article.imageOrVideo.video
                                        .title
                                    : CF_Articles.CF_Article.imageOrVideo.image
                                        ? CF_Articles.CF_Article.imageOrVideo.image
                                            .altText
                                        : null
                            }
                            imageLayout="fill"
                            imageObjectFit="cover"
                            imageObjectPosition="center"
                            videoAutoPlay={true}
                        />
                    }
                </div>
                <div className={styles.content}>
                    <div
                        className={styles.articel_text}
                        dangerouslySetInnerHTML={{
                            __html: CF_Articles.content,
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
                                >
                                    <a
                                        target="_blank"
                                        aria-label="Link to Vanquish Yachts Instagram"
                                        rel="noopener"
                                    >
                                        <RiInstagramLine size={30} />
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://www.youtube.com/channel/UCscWkaZiSTE7kufY1Sx_YjQ"
                                    passHref
                                >
                                    <a
                                        target="_blank"
                                        aria-label="Link to Vanquish Yachts Youtube"
                                        rel="noopener"
                                    >
                                        <RiYoutubeFill size={30} />
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* {CF_Articles.CF_Article.gallery.gallery &&
                CF_Articles.CF_Article.gallery.gallery.length > 0 && (
                    <CarouselSlider
                        dataArray={CF_Articles.CF_Article.gallery.gallery}
                        title={CF_Articles.CF_Article.header}
                    />
                )} */}

            <InfiniteSlider
                key={uuid_v4()}
                dataArray={CF_Articles.CF_Article.gallery.gallery}
                title={CF_Articles.CF_Article.header}
            />

            {CF_RelatedArticles && CF_RelatedArticles.length > 0 && (
                <SliderRelatedArticles dataArray={CF_RelatedArticles} />
            )}
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

    //* GET NEWS ARTICLES POST
    const DATA_POST_BY_SLUG = await apolloClient.query({
        query: QUERY_POST_BY_SLUG,
        variables: {
            slug: slug,
        },
    });
    const CF_Articles = DATA_POST_BY_SLUG?.data.post;

    //* GET RELATED ARTICLES POST
    const DATA_RELATED_POST = await apolloClient.query({
        query: QUERY_RELATED_POST,
        variables: {
            postId: CF_Articles.postId,
        },
    });
    const CF_RelatedArticles = DATA_RELATED_POST?.data.posts.edges.map(
        ({ node }) => node
    );

    //* GET SEO
    const Site_Seo = DATA_POST_BY_SLUG?.data.post.seo;

    //* RETURN DATA PAGE
    return {
        props: {
            Site_Meta,
            Site_Seo,
            CF_Articles,
            CF_RelatedArticles,
        },
        revalidate: 60,
    };
}

// * TELL NEXT JS THE EXISTENT PAGES
export async function getStaticPaths() {
    const apolloClient = getApolloClient();

    //* GET NEWS ARTICLES POST
    const DATA_ALL_ARTICLES = await apolloClient.query({
        query: QUERY_ALL_ARTICLES,
        variables: {
            maxCount: 1000,
        },
    });
    const CF_Articles = DATA_ALL_ARTICLES?.data.posts.edges.map(
        ({ node }) => node
    );

    return {
        paths: CF_Articles.map(({ slug }) => {
            return {
                params: {
                    slug: slug,
                },
            };
        }),
        fallback: 'blocking',
    };
}
