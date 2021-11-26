// NEXT JS / THIRD PARTY IMPORT
import { useState } from 'react';
import TagManager from 'react-gtm-module';
import Cookies from 'js-cookie';
import Link from 'next/dist/client/link';

//IMPORT MIXED COMPONENTS
import styles from '@styles/components/Blocks.module.scss';

export default function Cookie({}) {
    const [click, setClick] = useState(false);

    const agree = () => {
        setClick(true);
        Cookies.set('vanquish-cookie', true, {
            expires: 365,
            path: '',
        });

        const tagManagerArgs = {
            dataLayer: {
                event: 'cookiebarAction',
                consent: true,
            },
        };
        TagManager.dataLayer(tagManagerArgs);
    };

    const decline = () => {
        setClick(true);
        Cookies.set('vanquish-cookie', false, {
            expires: 365,
            path: '',
        });

        const tagManagerArgs = {
            dataLayer: {
                event: 'cookiebarAction',
                consent: false,
            },
        };
        TagManager.dataLayer(tagManagerArgs);
    };

    return (
        <>
            {Cookies.get('vanquish-cookie') === undefined && (
                <div
                    className={
                        click === true ? styles.cookies_hide : styles.cookies
                    }
                >
                    <p>
                        Our website uses cookies to optimise our services.
                        Moreover, we would like to show you personalised ads on
                        the internet based on your use of
                        www.vanquish-yachts.com. If you agree to the latter,
                        please click ‘I agree’. For more information, read
                        our&nbsp;
                        <Link
                            href={
                                'https://www.vanquish-yachts.com/wp-content/uploads/2018/05/cookie-statement-en-Vanquish.pdf'
                            }
                        >
                            Cookie Statement
                        </Link>
                        &nbsp;and our&nbsp;
                        <Link
                            href={
                                'https://www.vanquish-yachts.com/wp-content/uploads/2018/06/privacy-statement-en-9.pdf'
                            }
                        >
                            Privacy Statement
                        </Link>
                        .
                    </p>
                    <div className={styles.cookie_buttons}>
                        <button onClick={agree}>I agree</button>

                        <button onClick={decline}>Decline</button>
                    </div>
                </div>
            )}
        </>
    );
}
