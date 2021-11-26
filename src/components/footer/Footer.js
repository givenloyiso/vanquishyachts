// IMPORT NEXT JS / THIRD PARTY
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaAngleDown } from 'react-icons/fa';
import { RiFacebookFill, RiInstagramLine, RiYoutubeFill } from 'react-icons/ri';

// IMPORT MIXED COMPONENTS
import styles from '@styles/components/Footer.module.scss';
import CountryBrandSwitch from '@components/blocks/unique/ContinentBrandSwitch';

// IMPORT IMAGES
import ICON from 'public/favicon-32x32.png';

export default function Footer() {
    const cn = (...classNames) => classNames.join(' ');
    const [dropdown, setDropdown] = useState(false);

    // CHECK WHICH MENU IS CLICK
    const handleDropdownClick = (e) => {
        if (e === dropdown) {
            e = 0;
        }
        setDropdown(e);
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper_top}>
                <div className={styles.colum_locations}>
                    <Link href="/">
                        <a>
                            <Image
                                src={ICON}
                                alt="Vanquish Icon"
                                width={28}
                                height={28}
                            />
                        </a>
                    </Link>
                    <p>
                        Head office & Shipyard
                        <br /> Expansie 15
                        <br /> 8316 GB Marknesses
                        <br /> The Netherlands
                        <br />
                        <Link href="mailto:info@vanquish-yachts.com">
                            <a>info@vanquish-yachts.com</a>
                        </Link>
                        <br />
                        <Link href="tel:+31522700236">
                            <a>+31(0) 522 700 236</a>
                        </Link>
                    </p>
                    <p>
                        <CountryBrandSwitch
                            all="VQ Yachts"
                            us="Vanquish Yachts"
                        />{' '}
                        Inc. USA
                        <br /> 2300 East Las Olas Boulevard
                        <br /> 2nd Floor
                        <br /> Fort Lauderdale FL33301
                        <br />
                        <Link href="tel:+19549801029">
                            <a>+1 (954) 980-1029</a>
                        </Link>
                    </p>
                </div>
                <div className={styles.colum_dropdown}>
                    <p className="slash-text">
                        <span>/</span> models
                    </p>
                    <ul className={styles.hamburger_ul}>
                        <li className={styles.hamburger_li}>
                            <Link href="/models">All Models</Link>
                        </li>
                        <li
                            className={styles.hamburger_li}
                            onClick={() => handleDropdownClick(1)}
                        >
                            Composite <FaAngleDown />
                            <div
                                className={
                                    dropdown === 1
                                        ? styles.hamburger_child_wrapper
                                        : cn(
                                            styles.hamburger_child_wrapper,
                                            styles.hamburger_child_wrapper_hide
                                        )
                                }
                            >
                                <ul className={styles.hamburger_child_ul}>
                                    <li className={styles.hamburger_child_li}>
                                        <Link href="/models/composite/vq11-sports-line">
                                            VQ11 Sports Line
                                        </Link>
                                    </li>
                                    <li className={styles.hamburger_child_li}>
                                        <Link href="/models/composite/vq16-sports-line">
                                            VQ16 Sports Line
                                        </Link>
                                    </li>
                                    <li className={styles.hamburger_child_li}>
                                        <Link href="/models/composite/vq40-sports-line">
                                            VQ40 Sports Line
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li
                            className={styles.hamburger_li}
                            onClick={() => handleDropdownClick(2)}
                        >
                            Aluminium <FaAngleDown />
                            <div
                                className={
                                    dropdown === 2
                                        ? styles.hamburger_child_wrapper
                                        : cn(
                                            styles.hamburger_child_wrapper,
                                            styles.hamburger_child_wrapper_hide
                                        )
                                }
                            >
                                <ul className={styles.hamburger_child_ul}>
                                    <li className={styles.hamburger_child_li}>
                                        <Link href="/models/aluminium/vq45">
                                            VQ45
                                        </Link>
                                    </li>
                                    <li className={styles.hamburger_child_li}>
                                        <Link href="/models/aluminium/vq50">
                                            VQ50
                                        </Link>
                                    </li>
                                    <li className={styles.hamburger_child_li}>
                                        <Link href="/models/aluminium/vq52">
                                            VQ52
                                        </Link>
                                    </li>

                                    <li className={styles.hamburger_child_li}>
                                        <Link href="/models/aluminium/vq58">
                                            VQ58
                                        </Link>
                                    </li>
                                    <li className={styles.hamburger_child_li}>
                                        <Link href="/models/aluminium/vq80-sportfish">
                                            VQ80 SF
                                        </Link>
                                    </li>
                                    <li className={styles.hamburger_child_li}>
                                        <Link href="/models/aluminium/vq115">
                                            VQ115
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li
                            className={styles.hamburger_li}
                            onClick={() => handleDropdownClick(3)}
                        >
                            Concepts <FaAngleDown />
                            <div
                                className={
                                    dropdown === 3
                                        ? styles.hamburger_child_wrapper
                                        : cn(
                                            styles.hamburger_child_wrapper,
                                            styles.hamburger_child_wrapper_hide
                                        )
                                }
                            >
                                <ul className={styles.hamburger_child_ul}>
                                    <li className={styles.hamburger_child_li}>
                                        <Link href="/models/concept/vq45-outboard">
                                            VQ45 Outboard
                                        </Link>
                                    </li>
                                    <li className={styles.hamburger_child_li}>
                                        <Link href="/models/concept/vq55">
                                            VQ55
                                        </Link>
                                    </li>
                                    <li className={styles.hamburger_child_li}>
                                        <Link href="/models/concept/vq60">
                                            VQ60
                                        </Link>
                                    </li>
                                    <li className={styles.hamburger_child_li}>
                                        <Link href="/models/concept/vq65-veloce">
                                            VQ65 Veloce
                                        </Link>
                                    </li>
                                    <li className={styles.hamburger_child_li}>
                                        <Link href="/models/concept/vq68">
                                            VQ68
                                        </Link>
                                    </li>
                                    <li className={styles.hamburger_child_li}>
                                        <Link href="/models/concept/vq80">
                                            VQ80
                                        </Link>
                                    </li>
                                    <li className={styles.hamburger_child_li}>
                                        <Link href="/models/concept/vq88">
                                            VQ88
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li
                            className={styles.hamburger_li}
                            onClick={() => handleDropdownClick(4)}
                        >
                            Heritage <FaAngleDown />
                            <div
                                className={
                                    dropdown === 4
                                        ? styles.hamburger_child_wrapper
                                        : cn(
                                            styles.hamburger_child_wrapper,
                                            styles.hamburger_child_wrapper_hide
                                        )
                                }
                            >
                                <ul className={styles.hamburger_child_ul}>
                                    <li className={styles.hamburger_child_li}>
                                        <Link href="/models/heritage/vq32">
                                            VQ32
                                        </Link>
                                    </li>
                                    <li className={styles.hamburger_child_li}>
                                        <Link href="/models/heritage/vq32-custom-tender">
                                            VQ32 Custom Tender
                                        </Link>
                                    </li>
                                    <li className={styles.hamburger_child_li}>
                                        <Link href="/models/heritage/vq43">
                                            VQ43
                                        </Link>
                                    </li>
                                    {/* <li
                                        className={styles.hamburger_child_li}
            
                                    >
                                        <Link
                                            href="/models/heritage/vq43-mk2"
                                            
                                        >
                                            VQ43 MK2
                                        </Link>
                                    </li> */}
                                    <li className={styles.hamburger_child_li}>
                                        <Link href="/models/heritage/vq48-dual-console">
                                            VQ48 DC
                                        </Link>
                                    </li>
                                    <li className={styles.hamburger_child_li}>
                                        <Link href="/models/heritage/vq50-mk1">
                                            VQ50 MK1
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={styles.colum_dropdown}>
                    <p className="slash-text">
                        <span>/</span> discover
                    </p>

                    <ul className={styles.hamburger_ul}>
                        <li className={styles.hamburger_li}>
                            <Link href="/about">About</Link>
                        </li>
                        <li className={styles.hamburger_li}>
                            <Link href="/why-aluminium">Why aluminium</Link>
                        </li>
                        <li
                            className={styles.hamburger_li}
                            onClick={() => handleDropdownClick(5)}
                        >
                            Charter <FaAngleDown />
                            <div
                                className={
                                    dropdown === 5
                                        ? styles.hamburger_child_wrapper
                                        : cn(
                                            styles.hamburger_child_wrapper,
                                            styles.hamburger_child_wrapper_hide
                                        )
                                }
                            >
                                <ul className={styles.hamburger_child_ul}>
                                    <li className={styles.hamburger_child_li}>
                                        <Link href="/charters">
                                            All Charters
                                        </Link>
                                    </li>
                                    <li className={styles.hamburger_child_li}>
                                        <Link href="/charters/ibiza">
                                            Ibiza
                                        </Link>
                                    </li>
                                    <li className={styles.hamburger_child_li}>
                                        <Link href="/charters/miami">
                                            Miami
                                        </Link>
                                    </li>
                                    <li className={styles.hamburger_child_li}>
                                        <Link href="/charters/new-york">
                                            New York
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className={styles.hamburger_li}>
                            <Link href="/service">Service</Link>
                        </li>

                        <li className={styles.hamburger_li}>
                            <Link href="/news">News</Link>
                        </li>
                        <li className={styles.hamburger_li}>
                            <Link href="/gallery">Gallery</Link>
                        </li>
                        <li className={styles.hamburger_li}>
                            <Link href="/events">Events</Link>
                        </li>
                        <li className={styles.hamburger_li}>
                            <Link href="/lifestyle-magazines">
                                Lifestyle magazines
                            </Link>
                        </li>
                        <li className={styles.hamburger_li}>
                            <Link href="/careers">Careers</Link>
                        </li>
                        <li className={styles.hamburger_li}>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.colum_follow_us}>
                    <span className="text-block">FOLLOW US</span>
                    <br /> <br />
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

                        {/* <li>
                            <Link href="https://linkedin.com" passHref>
                                <RiLinkedinFill size={30} />
                            </Link>
                        </li> */}
                    </ul>
                </div>
            </div>
            <div className={styles.wrapper_bottom}>
                <p>
                    &copy; 2021{' '}
                    <CountryBrandSwitch all="VQ Yachts" us="Vanquish Yachts" />
                </p>
                <p>All right reserved</p>

                <a
                    href="https://www.vanquish-yachts.com/wp-content/uploads/2018/05/cookie-statement-en-Vanquish.pdf"
                    rel="noreferrer"
                    target="_blank"
                >
                    Cookie Statement
                </a>
                <a
                    href="https://www.vanquish-yachts.com/wp-content/uploads/2018/06/privacy-statement-en-9.pdf"
                    rel="noreferrer"
                    target="_blank"
                >
                    Privacy Statement
                </a>
                <span></span>
            </div>
        </footer>
    );
}

export async function getStaticProps() {
    const apolloClient = getApolloClient();

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
            CF_404_search,
        },
    };
}
