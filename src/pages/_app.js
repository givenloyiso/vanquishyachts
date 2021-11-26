//* NEXT JS / THIRD PARTY IMPORT
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

//* IMPORT MIXED COMPONENTS
import Layout from '@components/layout/Layout';
import '@styles/globals.scss';

//* GOOGLE TAG MANAGER
const tagManagerArgs = {
    gtmId: 'GTM-KDWNWC4',
};

function MyApp({ Component, pageProps = {} }) {
    useEffect(() => {
        TagManager.initialize(tagManagerArgs);
    }, []);

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
