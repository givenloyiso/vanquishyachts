// IMPORT NEXT JS / THIRD PARTY IMPORT
import { React } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { getApolloClient } from '@lib/apollo-client';
import { CgArrowLongRight } from 'react-icons/cg';

// IMPORT MIXED COMPONENTS
import styles from '@styles/pages/ErrorsSearch.module.scss';
import Button from '@components/blocks/button/Button';
import MediaDetector from '@components/blocks/unique/MediaDetector';

//* IMPORT QUERY DATA
// META
import { QUERY_SITE_DATA } from '@data/site';
// MENUS
import { QUERY_404_SEARCH_MENU } from '@data/menus';

export default function Custom404({ CF_404_search }) {
    // const [mouseLocation, setMouseLocation] = useState(-45);
    // const compas = useRef(0);

    return (
        <div className={styles.error_404_section}>
            <Head>
                <title>404 - Vanquish Yachts</title>
                <meta name="description" content="We lost our course" />
            </Head>
            <div className={styles.first_wrap}>
                <div className={styles.left_vertical_style_line}>
                    <div></div>
                    <span>Discover our world</span>
                </div>
                <p className="text-block">404</p>
                <h1>
                    We lost our course<span>.</span>
                </h1>

                <p>You were probably looking for...</p>
                <ul>
                    {CF_404_search &&
                        CF_404_search.map((items, key) => {
                            return (
                                <li key={key}>
                                    <CgArrowLongRight size={20} />
                                    <Link href={items.path}>{items.label}</Link>
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
                        <div className={styles.compas_first_circle}></div>
                        <div className={styles.compas_second_circle}> </div>
                    </div>

                    <div
                        className={styles.compas_rotate}
                        style={{
                            transform: `rotate(${-45}rad)`,
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
    );
}

export async function getStaticProps() {
    const apolloClient = getApolloClient();

    //* GET META DATA
    const DATA_SITE_DATA = await apolloClient.query({
        query: QUERY_SITE_DATA,
    });
    const Site_Meta = {
        ...DATA_SITE_DATA?.data.generalSettings,
    };

    //* GET HAMBURGER MENU DATA
    const DATA_404_SEARCH_MENU = await apolloClient.query({
        query: QUERY_404_SEARCH_MENU,
    });
    const CF_404_search = DATA_404_SEARCH_MENU?.data.menus.edges
        .map(({ node }) => node)
        .map(({ menuItems }) => menuItems)[0]
        .edges.map(({ node }) => node);

    return {
        props: {
            Site_Meta,
            CF_404_search,
        },
    };
}
