// IMPORT NEXT JS / THIRD PARTY
import { useRouter } from 'next/router';

// IMPORT MIXED COMPONENTS
import styles from '@styles/components/Navbar.module.scss';
import Desktop from '@components/header/navbar/menu/desktop';
import Hamburger from '@components/header/navbar/menu/hamburger';
import CountryBrandSwitch from '@components/blocks/unique/ContinentBrandSwitch';

// IMPORT IMAGES
import LOGO_ALL from 'public/logo-eu.png';
import LOGO_US from 'public/logo-us.png';
import LOGO_BLACK from 'public/logo-black.png';

export default function Navbar() {
    const router = useRouter();
    switch (router.pathname) {
    case '/models':
        var switchColor = { color: '#000' };
        var switchLogo = LOGO_BLACK;
        var switchBG = { backgroundColor: '#00000000' };
        break;
    case '/lifestyle-magazines':
        var switchColor = { color: '#000' };
        var switchLogo = LOGO_BLACK;
        var switchBG = { backgroundColor: '#00000000' };
        break;
    default:
        var switchColor = null;
        var switchLogo = LOGO_ALL;
        var switchBG = { backgroundColor: '#00000030' };
    }
    return (
        <nav className={styles.nav} style={switchBG}>
            <div className={styles.nav_wrapper} style={switchColor}>
                <div className={styles.section_logo}>
                    <CountryBrandSwitch
                        type="logo"
                        all={switchLogo}
                        us={LOGO_US}
                        background={switchBG}
                    />
                </div>

                <Desktop />

                <Hamburger />
            </div>
        </nav>
    );
}
