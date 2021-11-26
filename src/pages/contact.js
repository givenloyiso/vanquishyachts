//IMPORT NEXT JS / THIRD PARTY
import Link from 'next/link';
import { getApolloClient } from '@lib/apollo-client';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';

// IMPORT MIXED COMPONENTS
import styles from '@styles/components/Blocks.module.scss';
import Seo from '@components/blocks/unique/Seo';
import MediaDetector from '@components/blocks/unique/MediaDetector';
import ContactForm from '@components/blocks/form/ContactForm';

//* IMPORT QUERY DATA
// META
import { QUERY_SITE_DATA } from '@data/site';
// PAGE
import { QUERY_CONTACT_PAGE } from '@data/pages';

export default function contact({ Site_Meta, Site_Seo, CF_Contact, CF_Form }) {
    return (
        <div className={styles.container}>
            <Seo meta={Site_Meta} seo={Site_Seo} />

            <div className={styles.basic_block_header_hero_section}>
                <div className={styles.left_vertical_style_line}>
                    <div></div>
                    <span>Discover Our World</span>
                </div>
                {/* //TODO: DIT MOET NOG GELOOPT WORDEN  */}
                <MediaDetector
                    mediaUrl={
                        CF_Contact.imageOrVideo.fileType === 'video' &&
                        CF_Contact.imageOrVideo.video
                            ? CF_Contact.imageOrVideo.video.mediaItemUrl
                            : CF_Contact.imageOrVideo.image
                                ? CF_Contact.imageOrVideo.image.sourceUrl
                                : null
                    }
                    title={Site_Meta.title}
                    altText={
                        CF_Contact.imageOrVideo.fileType === 'video' &&
                        CF_Contact.imageOrVideo.video
                            ? CF_Contact.imageOrVideo.video.title
                            : CF_Contact.imageOrVideo.image
                                ? CF_Contact.imageOrVideo.image.altText
                                : null
                    }
                />

                <div className={styles.contact_content}>
                    {/* //TODO: DIT MOET NOG GELOOPT WORDEN  */}
                    <h1>
                        Contact us<span>.</span>
                    </h1>

                    <div className={styles.contact_info_wrapper}>
                        {CF_Contact.locations.map((data) => {
                            return (
                                <div
                                    className={styles.contact_info}
                                    key={data.id}
                                >
                                    <h2>
                                        {data.title}
                                        <span>.</span>
                                    </h2>
                                    <div className={styles.single_contact_info}>
                                        <h3 className="text-block">Address</h3>
                                        <div>
                                            <FiMapPin size={25} />
                                            <div className={styles.address}>
                                                {/* prettier-ignore */}
                                                <p dangerouslySetInnerHTML={{ __html: `${data.CF_Location.address.streetName} ${data.CF_Location.address.streetNumber}` }}></p>
                                                {/* prettier-ignore */}
                                                <p dangerouslySetInnerHTML={{ __html: `${data.CF_Location.address.postCode} ${data.CF_Location.address.city}` }}></p>
                                                {/* prettier-ignore */}
                                                <p dangerouslySetInnerHTML={{ __html: data.CF_Location.address.country }}></p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.single_contact_info}>
                                        <h3 className="text-block">Email us</h3>
                                        <Link
                                            href={`mailto:${data.CF_Location.email}`}
                                            passHref
                                        >
                                            <a>
                                                <FiMail size={25} />
                                                <p>{data.CF_Location.email}</p>
                                            </a>
                                        </Link>
                                    </div>

                                    <div className={styles.single_contact_info}>
                                        <h3 className="text-block">Call us</h3>
                                        <Link
                                            href={`tel:${data.CF_Location.phone}`}
                                            passHref
                                        >
                                            <a>
                                                <FiPhone size={25} />
                                                <p>{data.CF_Location.phone}</p>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <ContactForm
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

    //* GET HOME PAGE DATA
    const DATA_CONTACT_PAGE = await apolloClient.query({
        query: QUERY_CONTACT_PAGE,
    });
    const CF_Contact = DATA_CONTACT_PAGE?.data.page.CF_Contact.section1;

    //* GET FORM DATA
    const CF_Form = DATA_CONTACT_PAGE?.data.page.CF_Form;

    //* GET SEO
    const Site_Seo = DATA_CONTACT_PAGE?.data.page.seo;

    return {
        props: {
            Site_Meta,
            Site_Seo,
            CF_Contact,
            CF_Form,
        },
    };
}
