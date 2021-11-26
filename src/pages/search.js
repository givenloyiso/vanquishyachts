//* IMPORT NEXT JS / THIRD PARTY
import { React, useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { getApolloClient } from '@lib/apollo-client';
import { CgArrowLongRight } from 'react-icons/cg';
import { useRouter } from 'next/router';

//* IMPORT CUSTOM BLOCK COMPONENTS
import MediaDetector from '@components/blocks/unique/MediaDetector';
import Button from '@components/blocks/button/Button';
import styles from '@styles/pages/ErrorsSearch.module.scss';
import Navigation from '@components/blocks/unique/Navigation';

//* IMPORT MENUS
import { QUERY_404_SEARCH_MENU } from '@data/menus';

//* IMPORT SEARCH
// META
import { QUERY_SITE_DATA } from '@data/site';
// SEARCH
import { QUERY_ALL_SEARCH } from '@data/search';

export default function search({
    CF_404_search,
    CF_Articles_results,
    CF_Yachts_results,
    CF_Pages_results,
    CF_Events_results,
    CF_Locations_Charters_results,
    CF_Careers_results,
}) {
    const router = useRouter();
    const searchQuery = router.query.q;
    const [searchCount, setSearchCount] = useState(false);
    const [currentPage, SetCurrentPage] = useState(0);
    const totalPages = Math.ceil(searchCount / 9);
    // const [mouseLocation, setMouseLocation] = useState(-45);

    // COUNT HOW MANY SEARCH FOUND

    useEffect(() => {
        setSearchCount(
            CF_Articles_results.length +
                CF_Yachts_results.length +
                CF_Pages_results.length +
                CF_Events_results.length +
                CF_Locations_Charters_results.length +
                CF_Careers_results.length
        );

        SetCurrentPage(0);
    }, [
        searchQuery,
        CF_Pages_results,
        CF_Articles_results,
        CF_Events_results,
        CF_Locations_Charters_results,
        CF_Yachts_results,
        CF_Careers_results,
    ]);

    // STORE ALL ARRAYS IN 1
    const dataArray = [
        ...CF_Pages_results,
        ...CF_Locations_Charters_results,
        ...CF_Yachts_results,
        ...CF_Events_results,
        ...CF_Articles_results,
        ...CF_Careers_results,
    ];

    // NAVIGATION CLICK
    const prev = () => {
        SetCurrentPage(currentPage === 0 ? 0 : currentPage - 1);
    };
    const next = () => {
        SetCurrentPage(
            currentPage === totalPages - 1 ? totalPages - 1 : currentPage + 1
        );
    };

    return (
        <div className={styles.search_section}>
            <Head>
                <title>Search - Vanquish Yachts</title>
                <meta name="description" content="We lost our course" />
            </Head>

            <div className={styles.left_vertical_style_line}>
                <div></div>
                <span>Discover our world</span>
            </div>

            {searchCount === false ? (
                <h1>Nothing found “{searchQuery}”</h1>
            ) : (
                <h1>Search results for “{searchQuery}”</h1>
            )}

            {searchCount === false ? (
                <p className="text-block">0 FOUND</p>
            ) : (
                <p className="text-block">{searchCount} FOUND</p>
            )}

            {searchCount === false ? (
                <div className={styles.nothing_found}>
                    <div className={styles.first_wrap}>
                        <ul>
                            {CF_404_search &&
                                CF_404_search.map((items, key) => {
                                    return (
                                        <li key={key}>
                                            <CgArrowLongRight size={20} />
                                            <Link href={items.path}>
                                                {items.label}
                                            </Link>
                                        </li>
                                    );
                                })}
                        </ul>

                        <Button title="Back to home" url="/" />
                    </div>
                    <div className={styles.second_wrap}>
                        <div className={styles.compas}>
                            <div className={styles.compas_still}>
                                <span className={styles.compas_north}>N</span>
                                <span className={styles.compas_west}>W</span>
                                <div
                                    className={styles.compas_first_circle}
                                ></div>
                                <div className={styles.compas_second_circle}>
                                    {' '}
                                </div>
                            </div>

                            <div
                                className={styles.compas_rotate}
                                style={{
                                    transform: 'rotate(-45rad)',
                                }}
                            >
                                <div className={styles.compas_yacht}>
                                    <MediaDetector
                                        mediaUrl="http://vq.innovativebrands.eu/wp-content/uploads/2021/10/VANQUISH-40-SUPERSPORT-INBOARD.png"
                                        altText={'VQ 40 lost course'}
                                        imageLayout="fill"
                                        imageObjectFit="contain"
                                        imageObjectPosition="center"
                                    />
                                </div>
                                <div className={styles.compas_stripe}></div>
                                <div className={styles.compas_arrow}>
                                    <svg
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 50 50"
                                        fill="white"
                                    >
                                        <path
                                            d="M49.6,47.5c-0.5,0.6-1.4,0.8-2.1,0.5L1,26.6c-0.4-0.2-0.7-0.5-0.9-0.9c-0.4-0.9,0-2,0.9-2.4L47.5,1.9
                                    c0.6-0.3,1.3-0.2,1.8,0.2c0.8,0.6,0.9,1.7,0.4,2.5L34.4,25l15.3,20.3C50.1,46,50.1,46.9,49.6,47.5z"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={styles.search_results}>
                    {dataArray
                        .slice(
                            currentPage === 0 ? 0 : currentPage * 1 * 9,
                            (currentPage + 1) * 9
                        )
                        .map((items, key) => {
                            return (
                                <Link
                                    href={
                                        items.__typename === 'Page'
                                            ? items.slug
                                            : items.__typename === 'Location'
                                                ? `charters/${items.slug}`
                                                : items.__typename === 'Job'
                                                    ? `careers/${items.slug}`
                                                    : items.__typename === 'Yacht'
                                                        ? `models/${items.categories.edges.map(
                                                            ({ node }) => {
                                                                return node.slug;
                                                            }
                                                        )}/${items.slug}`
                                                        : items.__typename === 'Event'
                                                            ? `events/${items.slug}`
                                                            : items.__typename === 'Post'
                                                                ? `news/${items.slug}`
                                                                : '#'
                                    }
                                    passHref
                                    key={key}
                                >
                                    <div className={styles.items}>
                                        <p className="text-block">
                                            {items.__typename === 'Page'
                                                ? 'Pages'
                                                : items.__typename ===
                                                  'Location'
                                                    ? 'Charters'
                                                    : items.__typename === 'Yacht'
                                                        ? 'Yachts'
                                                        : items.__typename === 'Job'
                                                            ? 'Jobs'
                                                            : items.__typename === 'Event'
                                                                ? 'Events'
                                                                : items.__typename === 'Post'
                                                                    ? 'News'
                                                                    : null}
                                        </p>
                                        <h2>{items.title}</h2>

                                        {items.__typename === 'Page' ? (
                                            <p>{items.slug}</p>
                                        ) : items.__typename === 'Location' ? (
                                            <p>
                                                {
                                                    items.CF_Charters.section1
                                                        .paragraph
                                                }
                                            </p>
                                        ) : items.__typename === 'Yacht' ? (
                                            <p>
                                                Models{' '}
                                                {items.categories.edges.map(
                                                    ({ node }) => {
                                                        return node.slug;
                                                    }
                                                )}
                                            </p>
                                        ) : items.__typename === 'Job' ? (
                                            <p>
                                                Careers{' '}
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html: items.excerpt,
                                                    }}
                                                />
                                            </p>
                                        ) : items.__typename === 'Event' ? (
                                            <p>
                                                {
                                                    items.CF_SingleEvent
                                                        .eventInformation
                                                        .paragraph
                                                }
                                            </p>
                                        ) : items.__typename === 'Post' ? (
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: items.excerpt,
                                                }}
                                            />
                                        ) : null}
                                    </div>
                                </Link>
                            );
                        })}

                    {searchCount > 12 && (
                        <Navigation
                            current={currentPage}
                            pages={totalPages}
                            prev={prev}
                            next={next}
                        />
                    )}
                </div>
            )}
        </div>
    );
}

export async function getServerSideProps({ query }) {
    const apolloClient = getApolloClient();
    const searchQuery = query.q;

    //* GET META DATA
    const DATA_SITE_DATA = await apolloClient.query({
        query: QUERY_SITE_DATA,
    });
    const Site_Meta = {
        ...DATA_SITE_DATA?.data.generalSettings,
    };

    //* GET 404 SEARCH MENU DATA
    const DATA_404_SEARCH_MENU = await apolloClient.query({
        query: QUERY_404_SEARCH_MENU,
    });
    const CF_404_search = DATA_404_SEARCH_MENU?.data.menus.edges
        .map(({ node }) => node)
        .map(({ menuItems }) => menuItems)[0]
        .edges.map(({ node }) => node);

    //* GET SEARCH DATA
    const DATA_ALL_SEARCH = await apolloClient.query({
        query: QUERY_ALL_SEARCH,
        variables: {
            maxCount: 50,
            search: searchQuery,
        },
    });

    //* GET ARTICLES
    const CF_Articles_results = DATA_ALL_SEARCH?.data.posts.edges.map(
        ({ node }) => node
    );

    //* GET YACHTS
    const CF_Yachts_results = DATA_ALL_SEARCH?.data.yachts.edges.map(
        ({ node }) => node
    );

    //* GET Pages
    const CF_Pages_results = DATA_ALL_SEARCH?.data.pages.edges.map(
        ({ node }) => node
    );

    //* GET Events
    const CF_Events_results = DATA_ALL_SEARCH?.data.events.edges.map(
        ({ node }) => node
    );

    //* GET Locations
    const CF_Locations_Charters_results =
        DATA_ALL_SEARCH?.data.locations.edges.map(({ node }) => node);

    //* GET Careers/Jobs
    const CF_Careers_results = DATA_ALL_SEARCH?.data.jobs.edges.map(
        ({ node }) => node
    );

    return {
        props: {
            Site_Meta,
            CF_404_search,
            CF_Articles_results,
            CF_Yachts_results,
            CF_Pages_results,
            CF_Events_results,
            CF_Locations_Charters_results,
            CF_Careers_results,
        },
    };
}
