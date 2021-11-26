// IMPORT NEXT JS / THIRD PARTY
import Link from 'next/link';
import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { RiFacebookFill, RiInstagramLine, RiYoutubeFill } from 'react-icons/ri';

// IMPORT MIXED COMPONENTS
import styles from '@styles/components/Navbar.module.scss';

// IMPORT MENUS
// import { QUERY_404_SEARCH_MENU } from '@data/menus';
import SearchBar from '@components/blocks/unique/SearchBar';

export default function Hamburger() {
    const cn = (...classNames) => classNames.join(' ');
    const [hamburgerClick, setHamburgerClick] = useState(false);
    const [searchClick, setSearchClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    // CHECK IF LINK IS CLICKED

    const handleHamburgerClick = () => {
        setSearchClick(false);
        setHamburgerClick(!hamburgerClick);
    };

    const handleSearchClick = () => {
        setHamburgerClick(false);
        setSearchClick(!searchClick);
    };

    // CHECK WHICH MENU IS CLICK
    const handleDropdownClick = (e) => {
        if (e === dropdown) {
            e = 0;
        }
        setDropdown(e);
    };

    const onHamburgerLeave = () => setHamburgerClick(false);

    return (
        <div className={styles.section_icon_search_hamburger}>
            <AiOutlineSearch size={30} onClick={handleSearchClick} />
            <div
                className={
                    hamburgerClick ? styles.menu_icon : styles.menu_icon_close
                }
                onClick={handleHamburgerClick}
            >
                <div
                    className={styles.menu_stripe_top}
                    style={{ backgroundColor: 'currentColor' }}
                ></div>
                <div
                    className={styles.menu_stripe_bottom}
                    style={{ backgroundColor: 'currentColor' }}
                ></div>
            </div>
            <div
                className={
                    searchClick
                        ? styles.section_side_search
                        : styles.section_side_search_close
                }
            >
                <SearchBar />
                <AiOutlineClose size={30} onClick={handleSearchClick} />
            </div>

            {/* Hamburger */}

            <div
                className={
                    hamburgerClick
                        ? styles.section_side_hamburger
                        : styles.section_side_hamburger_close
                }
            >
                <div className={styles.hamburger_models}>
                    <p className="slash-text">
                        <span>/</span> models
                    </p>
                    <ul className={styles.hamburger_ul}>
                        <li
                            className={styles.hamburger_li}
                            onClick={onHamburgerLeave}
                        >
                            <Link href="/models" scroll={false}>
                                All Models
                            </Link>
                        </li>

                        <li
                            className={
                                dropdown === 2
                                    ? cn(
                                        styles.hamburger_li_dropdown,
                                        styles.hamburger_li_dropdown_active
                                    )
                                    : styles.hamburger_li_dropdown
                            }
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
                                    <li
                                        className={styles.hamburger_child_li}
                                        onClick={onHamburgerLeave}
                                    >
                                        <Link
                                            href="/models/aluminium/vq45"
                                            scroll={false}
                                        >
                                            VQ45
                                        </Link>
                                    </li>
                                    <li
                                        className={styles.hamburger_child_li}
                                        onClick={onHamburgerLeave}
                                    >
                                        <Link
                                            href="/models/aluminium/vq50"
                                            scroll={false}
                                        >
                                            VQ50
                                        </Link>
                                    </li>
                                    <li
                                        className={styles.hamburger_child_li}
                                        onClick={onHamburgerLeave}
                                    >
                                        <Link
                                            href="/models/aluminium/vq52"
                                            scroll={false}
                                        >
                                            VQ52
                                        </Link>
                                    </li>

                                    <li
                                        className={styles.hamburger_child_li}
                                        onClick={onHamburgerLeave}
                                    >
                                        <Link
                                            href="/models/aluminium/vq58"
                                            scroll={false}
                                        >
                                            VQ58
                                        </Link>
                                    </li>
                                    <li
                                        className={styles.hamburger_child_li}
                                        onClick={onHamburgerLeave}
                                    >
                                        <Link
                                            href="/models/aluminium/vq80-sportfish"
                                            scroll={false}
                                        >
                                            VQ80 SF
                                        </Link>
                                    </li>
                                    <li
                                        className={styles.hamburger_child_li}
                                        onClick={onHamburgerLeave}
                                    >
                                        <Link
                                            href="/models/aluminium/vq115"
                                            scroll={false}
                                        >
                                            VQ115
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li
                            className={
                                dropdown === 1
                                    ? cn(
                                        styles.hamburger_li_dropdown,
                                        styles.hamburger_li_dropdown_active
                                    )
                                    : styles.hamburger_li_dropdown
                            }
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
                                    <li
                                        className={styles.hamburger_child_li}
                                        onClick={onHamburgerLeave}
                                    >
                                        <Link
                                            href="/models/composite/vq11-sports-line"
                                            scroll={false}
                                        >
                                            VQ11 Sports Line
                                        </Link>
                                    </li>
                                    <li
                                        className={styles.hamburger_child_li}
                                        onClick={onHamburgerLeave}
                                    >
                                        <Link
                                            href="/models/composite/vq16-sports-line"
                                            scroll={false}
                                        >
                                            VQ16 Sports Line
                                        </Link>
                                    </li>
                                    <li
                                        className={styles.hamburger_child_li}
                                        onClick={onHamburgerLeave}
                                    >
                                        <Link
                                            href="/models/composite/vq40-sports-line"
                                            scroll={false}
                                        >
                                            VQ40 Sports Line
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li
                            className={
                                dropdown === 3
                                    ? cn(
                                        styles.hamburger_li_dropdown,
                                        styles.hamburger_li_dropdown_active
                                    )
                                    : styles.hamburger_li_dropdown
                            }
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
                                    <li
                                        className={styles.hamburger_child_li}
                                        onClick={onHamburgerLeave}
                                    >
                                        <Link
                                            href="/models/concept/vq45-outboard"
                                            scroll={false}
                                        >
                                            VQ45 Outboard
                                        </Link>
                                    </li>
                                    <li
                                        className={styles.hamburger_child_li}
                                        onClick={onHamburgerLeave}
                                    >
                                        <Link
                                            href="/models/concept/vq55"
                                            scroll={false}
                                        >
                                            VQ55
                                        </Link>
                                    </li>
                                    <li
                                        className={styles.hamburger_child_li}
                                        onClick={onHamburgerLeave}
                                    >
                                        <Link
                                            href="/models/concept/vq60"
                                            scroll={false}
                                        >
                                            VQ60
                                        </Link>
                                    </li>
                                    <li
                                        className={styles.hamburger_child_li}
                                        onClick={onHamburgerLeave}
                                    >
                                        <Link
                                            href="/models/concept/vq65-veloce"
                                            scroll={false}
                                        >
                                            VQ65 Veloce
                                        </Link>
                                    </li>
                                    <li
                                        className={styles.hamburger_child_li}
                                        onClick={onHamburgerLeave}
                                    >
                                        <Link
                                            href="/models/concept/vq68"
                                            scroll={false}
                                        >
                                            VQ68
                                        </Link>
                                    </li>
                                    <li
                                        className={styles.hamburger_child_li}
                                        onClick={onHamburgerLeave}
                                    >
                                        <Link
                                            href="/models/concept/vq80"
                                            scroll={false}
                                        >
                                            VQ80
                                        </Link>
                                    </li>
                                    <li
                                        className={styles.hamburger_child_li}
                                        onClick={onHamburgerLeave}
                                    >
                                        <Link
                                            href="/models/concept/vq88"
                                            scroll={false}
                                        >
                                            VQ88
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li
                            className={
                                dropdown === 4
                                    ? cn(
                                        styles.hamburger_li_dropdown,
                                        styles.hamburger_li_dropdown_active
                                    )
                                    : styles.hamburger_li_dropdown
                            }
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
                                    <li
                                        className={styles.hamburger_child_li}
                                        onClick={onHamburgerLeave}
                                    >
                                        <Link
                                            href="/models/heritage/vq32"
                                            scroll={false}
                                        >
                                            VQ32
                                        </Link>
                                    </li>
                                    <li
                                        className={styles.hamburger_child_li}
                                        onClick={onHamburgerLeave}
                                    >
                                        <Link
                                            href="/models/heritage/vq32-custom-tender"
                                            scroll={false}
                                        >
                                            VQ32 Custom Tender
                                        </Link>
                                    </li>
                                    <li
                                        className={styles.hamburger_child_li}
                                        onClick={onHamburgerLeave}
                                    >
                                        <Link
                                            href="/models/heritage/vq43"
                                            scroll={false}
                                        >
                                            VQ43
                                        </Link>
                                    </li>
                                    {/* <li
                                        className={styles.hamburger_child_li}
                                        onClick={onHamburgerLeave}
                                    >
                                        <Link
                                            href="/models/heritage/vq43-mk2"
                                            scroll={false}
                                        >
                                            VQ43 MK2
                                        </Link>
                                    </li> */}
                                    <li
                                        className={styles.hamburger_child_li}
                                        onClick={onHamburgerLeave}
                                    >
                                        <Link
                                            href="/models/heritage/vq48-dual-console"
                                            scroll={false}
                                        >
                                            VQ48 DC
                                        </Link>
                                    </li>
                                    <li
                                        className={styles.hamburger_child_li}
                                        onClick={onHamburgerLeave}
                                    >
                                        <Link
                                            href="/models/heritage/vq50-mk1"
                                            scroll={false}
                                        >
                                            VQ50 MK1
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className={styles.hamburger_discover}>
                    <p className="slash-text">
                        <span>/</span> discover
                    </p>

                    <ul className={styles.hamburger_ul}>
                        <li
                            className={styles.hamburger_li}
                            onClick={onHamburgerLeave}
                        >
                            <Link href="/about" scroll={false}>
                                About
                            </Link>
                        </li>
                        <li
                            className={styles.hamburger_li}
                            onClick={onHamburgerLeave}
                        >
                            <Link href="/why-aluminium" scroll={false}>
                                Why aluminium
                            </Link>
                        </li>
                        <li
                            className={styles.hamburger_li}
                            onClick={onHamburgerLeave}
                        >
                            <Link href="/service" scroll={false}>
                                Service
                            </Link>
                        </li>
                        <li
                            className={
                                dropdown === 5
                                    ? cn(
                                        styles.hamburger_li_dropdown,
                                        styles.hamburger_li_dropdown_active
                                    )
                                    : styles.hamburger_li_dropdown
                            }
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
                                    <li
                                        className={styles.hamburger_child_li}
                                        onClick={onHamburgerLeave}
                                    >
                                        <Link href="/charters" scroll={false}>
                                            All Charters
                                        </Link>
                                    </li>
                                    <li
                                        className={styles.hamburger_child_li}
                                        onClick={onHamburgerLeave}
                                    >
                                        <Link
                                            href="/charters/ibiza"
                                            scroll={false}
                                        >
                                            Ibiza
                                        </Link>
                                    </li>
                                    <li
                                        className={styles.hamburger_child_li}
                                        onClick={onHamburgerLeave}
                                    >
                                        <Link
                                            href="/charters/miami"
                                            scroll={false}
                                        >
                                            Miami
                                        </Link>
                                    </li>
                                    <li
                                        className={styles.hamburger_child_li}
                                        onClick={onHamburgerLeave}
                                    >
                                        <Link
                                            href="/charters/new-york"
                                            scroll={false}
                                        >
                                            New York
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li
                            className={styles.hamburger_li}
                            onClick={onHamburgerLeave}
                        >
                            <Link href="/news" scroll={false}>
                                News
                            </Link>
                        </li>
                        <li
                            className={styles.hamburger_li}
                            onClick={onHamburgerLeave}
                        >
                            <Link href="/gallery" scroll={false}>
                                Gallery
                            </Link>
                        </li>
                        <li
                            className={styles.hamburger_li}
                            onClick={onHamburgerLeave}
                        >
                            <Link href="/lifestyle-magazines" scroll={false}>
                                Lifestyle magazines
                            </Link>
                        </li>
                        <li
                            className={styles.hamburger_li}
                            onClick={onHamburgerLeave}
                        >
                            <Link
                                href="/careers"
                                scroll={false}
                                onClick={onHamburgerLeave}
                            >
                                Careers
                            </Link>
                        </li>
                        <li
                            className={styles.hamburger_li}
                            onClick={onHamburgerLeave}
                        >
                            <Link href="/contact" scroll={false}>
                                Contact
                            </Link>
                        </li>
                        <li
                            className={styles.hamburger_li}
                            onClick={onHamburgerLeave}
                        >
                            <Link href="/events" scroll={false}>
                                Events
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={styles.hamburger_follow_us}>
                    <span className="text-block">FOLLOW US</span>
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
                                    rel="noopener"
                                    aria-label="Link to Vanquish Yachts Youtube"
                                >
                                    <RiYoutubeFill size={30} />
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
