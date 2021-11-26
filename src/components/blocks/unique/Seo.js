//* IMPORT NEXT JS / THIRD PARTY
import Head from 'next/head';
// ES Modules
import parse from 'html-react-parser';

export default function Seo({ meta, seo }) {
    if (!meta || !seo) {
        return null;
    }
    const SEO = parse(seo.fullHead);

    return (
        <Head>
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
            {seo.metaDesc && SEO}
        </Head>
    );
}
