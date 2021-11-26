//* IMPORT NEXT JS / THIRD PARTY
import { useState } from 'react';
import { getApolloClient } from '@lib/apollo-client';

//* IMPORT MIXED COMPONENTS
import styles from '@styles/pages/News.module.scss';
import Seo from '@components/blocks/unique/Seo';
import Button from '@components/blocks/button/Button';
import MediaDetector from '@components/blocks/unique/MediaDetector';
import Navigation from '@components/blocks/unique/Navigation';

//* IMPORT CUSTOM BLOCK COMPONENTS
import SingleHero from '@components/blocks/basic/SingleHero';
import Newsletter from '@components/blocks/form/NewsletterForm';

//* IMPORT QUERY DATA
// META
import { QUERY_SITE_DATA } from '@data/site';
// PAGE
import { QUERY_NEWS_PAGE } from '@data/pages';
//NEWS
import { QUERY_ALL_ARTICLES } from '@data/news';

export default function News({
    Site_Meta,
    Site_Seo,
    CF_News,
    CF_Articles,
    CF_Form,
}) {
    const [currentPage, SetCurrentPage] = useState(0);
    const articleCount = CF_Articles.length;
    const totalPages = Math.ceil(articleCount / 9);

    const prev = () => {
        SetCurrentPage(currentPage === 0 ? 0 : currentPage - 1);
    };
    const next = () => {
        SetCurrentPage(
            currentPage === totalPages - 1 ? totalPages - 1 : currentPage + 1
        );
    };
    return (
        <div className={styles.news_section}>
            <Seo meta={Site_Meta} seo={Site_Seo} />

            <SingleHero
                stripeTitle="NEWS GALLERY"
                mediaUrl={
                    CF_News.imageOrVideo.fileType === 'video' &&
                    CF_News.imageOrVideo.video
                        ? CF_News.imageOrVideo.video.mediaItemUrl
                        : CF_News.imageOrVideo.image
                            ? CF_News.imageOrVideo.image.sourceUrl
                            : null
                }
                title="News"
                url=""
                title_second="Gallery"
                url_second="/gallery"
            />
            <div className={styles.news_grid}>
                <div className={styles.news_grid_wrapper}>
                    {CF_Articles &&
                        CF_Articles.length > 0 &&
                        CF_Articles.slice(
                            currentPage === 0 ? 0 : currentPage * 1 * 12,
                            (currentPage + 1) * 12
                        ).map((article) => {
                            return (
                                <div
                                    className={styles.grid_box}
                                    key={article.id}
                                >
                                    <div className={styles.top_img}>
                                        <MediaDetector
                                            mediaUrl={
                                                article.CF_Article.imageOrVideo
                                                    .fileType === 'video' &&
                                                article.CF_Article.imageOrVideo
                                                    .video
                                                    ? article.CF_Article
                                                        .imageOrVideo.video
                                                        .mediaItemUrl
                                                    : article.CF_Article
                                                        .imageOrVideo.image
                                                        ? article.CF_Article
                                                            .imageOrVideo.image
                                                            .sourceUrl
                                                        : null
                                            }
                                            title={article.title}
                                            altText={
                                                article.CF_Article.imageOrVideo
                                                    .fileType === 'video' &&
                                                article.CF_Article.imageOrVideo
                                                    .video
                                                    ? article.CF_Article
                                                        .imageOrVideo.video
                                                        .title
                                                    : article.CF_Article
                                                        .imageOrVideo.image
                                                        ? article.CF_Article
                                                            .imageOrVideo.image
                                                            .altText
                                                        : null
                                            }
                                            imageLayout="fill"
                                            imageObjectFit="cover"
                                            imageObjectPosition="center"
                                        />
                                    </div>
                                    <div className={styles.bottom_content}>
                                        <div className={styles.meta}>
                                            <p className="text-block">
                                                {
                                                    article.categories.edges[0]
                                                        .node.name
                                                }
                                            </p>
                                            <p>
                                                {new Date(
                                                    article.date
                                                ).toLocaleDateString('nl-NL', {
                                                    year: 'numeric',
                                                    month: '2-digit',
                                                    day: '2-digit',
                                                })}
                                            </p>
                                        </div>
                                        <div className={styles.content}>
                                            <h3>{article.title}</h3>
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: article.excerpt,
                                                }}
                                            />
                                        </div>
                                        <Button
                                            title="read article"
                                            url={`/news/${encodeURIComponent(
                                                article.slug
                                            )}`}
                                            style="4"
                                        />
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>

            {articleCount > 12 && (
                <Navigation
                    current={currentPage}
                    pages={totalPages}
                    prev={prev}
                    next={next}
                />
            )}

            <Newsletter
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

    //* GET NEWS PAGE DATA
    const DATA_NEWS_PAGE = await apolloClient.query({
        query: QUERY_NEWS_PAGE,
    });
    const CF_News = DATA_NEWS_PAGE?.data.page.CF_News;

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

    //* GET FORM DATA
    const CF_Form = DATA_NEWS_PAGE?.data.page.CF_Form;

    //* GET SEO
    const Site_Seo = DATA_NEWS_PAGE?.data.page.seo;

    return {
        props: {
            Site_Meta,
            Site_Seo,
            CF_News,
            CF_Articles,
            CF_Form,
        },
    };
}
