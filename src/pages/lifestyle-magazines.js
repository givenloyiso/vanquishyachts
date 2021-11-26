// IMPORT NEXT JS / THIRD PARTY
import { getApolloClient } from '@lib/apollo-client';

// IMPORT MIXED COMPONENTS
import styles from '@styles/pages/Lifestyle.module.scss';
import Seo from '@components/blocks/unique/Seo';

// IMPORT CUSTOM BLOCK COMPONENTS
import MagazineSlider from '@components/blocks/slider/MagazineSlider';
import Newsletter from '@components/blocks/form/NewsletterForm';

//* IMPORT QUERY DATA
// META
import { QUERY_SITE_DATA } from '@data/site';
// PAGE
import { QUERY_MAGAZINE_PAGE } from '@data/pages';

export default function lifestyle_magazines({
    Site_Meta,
    Site_Seo,
    CF_LifestyleMagazines,
    CF_Form,
}) {
    return (
        <div className={styles.container_lifestyle}>
            <Seo meta={Site_Meta} seo={Site_Seo} />

            <MagazineSlider
                title={CF_LifestyleMagazines.header}
                textBlock={CF_LifestyleMagazines.textBlock}
                dataArray={CF_LifestyleMagazines.magazine}
            />

            <Newsletter
                mediaUrl={
                    CF_Form.formImage ? CF_Form.formImage.sourceUrl : 'cover'
                }
            />
        </div>
    );
}

//* GET GRAPHQL DATA
export async function getServerSideProps() {
    const apolloClient = getApolloClient();

    //* GET META DATA
    const DATA_SITE_DATA = await apolloClient.query({
        query: QUERY_SITE_DATA,
    });
    const Site_Meta = {
        ...DATA_SITE_DATA?.data.generalSettings,
    };

    //* GET MAGAZINES DATA
    const DATA_MAGAZINE_PAGE = await apolloClient.query({
        query: QUERY_MAGAZINE_PAGE,
    });
    const CF_LifestyleMagazines =
        DATA_MAGAZINE_PAGE?.data.page.CF_LifestyleMagazines;

    //* GET FORM DATA
    const CF_Form = DATA_MAGAZINE_PAGE?.data.page.CF_Form;

    //* GET SEO
    const Site_Seo = DATA_MAGAZINE_PAGE?.data.page.seo;

    //* RETURN DATA PAGE
    return {
        props: {
            Site_Meta,
            Site_Seo,
            CF_LifestyleMagazines,
            CF_Form,
        },
    };
}
