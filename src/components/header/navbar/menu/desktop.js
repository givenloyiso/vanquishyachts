// IMPORT NEXT JS / THIRD PARTY IMPORT
import { useState } from 'react';
import Link from 'next/link';
import { FaAngleDown } from 'react-icons/fa';

// IMPORT MIXED COMPONENTS
import styles from '@styles/components/Navbar.module.scss';

export default function Desktop() {
    const [dropdown, setDropdown] = useState(false);

    // CHECK WHICH MENU IS CLICK
    const handleDropdownClick = (e) => {
        setDropdown(e);
    };

    // DROPDOWN MENU FOR DESKTOP
    const onMouseLeave = () => {
        setDropdown(false);
    };

    return (
        <div className={styles.section_menu}>
            <ul className={styles.menu_ul}>
                <li
                    className={styles.menu_li}
                    onMouseLeave={onMouseLeave}
                    onClick={() => handleDropdownClick(1)}
                >
                    Models <FaAngleDown />
                    <ul
                        className={
                            dropdown === 1
                                ? styles.menu_child_ul
                                : styles.menu_child_ul_hide
                        }
                    >
                        <li className={styles.menu_child_li}>
                            <Link href="/models#aluminium" scroll={false}>
                                Aluminium
                            </Link>
                        </li>
                        <li className={styles.menu_child_li}>
                            <Link href="/models#composite" scroll={false}>
                                Composite
                            </Link>
                        </li>
                        <li className={styles.menu_child_li}>
                            <Link href="/models#concept" scroll={false}>
                                Concept
                            </Link>
                        </li>
                        <li className={styles.menu_child_li}>
                            <Link href="/models#heritage" scroll={false}>
                                Heritage
                            </Link>
                        </li>
                    </ul>
                </li>

                <li>
                    <Link href="/about" scroll={false}>
                        About
                    </Link>
                </li>

                <li>
                    <Link href="/service" scroll={false}>
                        Service
                    </Link>
                </li>

                <li
                    className={styles.menu_li}
                    onMouseLeave={onMouseLeave}
                    onClick={() => handleDropdownClick(2)}
                >
                    Charters <FaAngleDown />
                    <ul
                        className={
                            dropdown === 2
                                ? styles.menu_child_ul
                                : styles.menu_child_ul_hide
                        }
                    >
                        <li className={styles.menu_child_li}>
                            <Link href="/charters" scroll={false}>
                                All Charters
                            </Link>
                        </li>
                        <li className={styles.menu_child_li}>
                            <Link href="/charters/ibiza" scroll={false}>
                                Ibiza
                            </Link>
                        </li>
                        <li className={styles.menu_child_li}>
                            <Link href="/charters/miami" scroll={false}>
                                Miami
                            </Link>
                        </li>
                        <li className={styles.menu_child_li}>
                            <Link href="/charters/new-york" scroll={false}>
                                New York
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link href="/careers" scroll={false}>
                        Careers
                    </Link>
                </li>

                <li>
                    <Link href="/contact" scroll={false}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    );
}
