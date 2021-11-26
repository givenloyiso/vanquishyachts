import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps, locale: ctx?.locale || 'en' };
    }
    render() {
        return (
            <Html lang={this.props.locale}>
                <Head>
                    <meta
                        name="google-site-verification"
                        content="+nxGUDJ4QpAZ5l9Bsjdi102tLVC21AIh5d1Nl23908vVuFHs34="
                    />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    <meta
                        httpEquiv="Content-Type"
                        content="text/html;charset=UTF-8"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="152x152"
                        href="public/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="public/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="public/favicon-16x16.png"
                    />
                    <link rel="manifest" href="public/site.webmanifest" />
                    <link
                        rel="mask-icon"
                        href="public/safari-pinned-tab.svg"
                        color="#5bbad5"
                    />
                    <meta name="msapplication-TileColor" content="#ffffff" />
                    <meta name="theme-color" content="#ffffff" />
                    <link
                        rel="stylesheet preload prefetch"
                        href="public/static/fonts/bodoni/BodoniSvtyTwoITCTTBook01.woff"
                        as="font"
                        type="text/css"
                        crossOrigin="anonymous"
                    />
                    <link
                        rel="stylesheet preload prefetch"
                        href="public/static/fonts/bodoni/BodoniSvtyTwoITCTTBook01.woff2"
                        as="font"
                        type="text/css"
                        crossOrigin="anonymous"
                    />
                    <link
                        rel="stylesheet preload prefetch"
                        href="public/static/fonts/avenir/AvenirLTStdMedium.woff"
                        as="font"
                        type="text/css"
                        crossOrigin="anonymous"
                    />
                    <link
                        rel="stylesheet preload prefetch"
                        href="public/static/fonts/avenir/AvenirLTStdMedium.woff2"
                        as="font"
                        type="text/css"
                        crossOrigin="anonymous"
                    />
                    <link
                        rel="stylesheet preload prefetch"
                        href="public/static/fonts/avenir/AvenirLTStdBook.woff"
                        as="font"
                        type="text/css"
                        crossOrigin="anonymous"
                    />
                    <link
                        rel="stylesheet preload prefetch"
                        href="public/static/fonts/avenir/AvenirLTStdBook.woff2"
                        as="font"
                        type="text/css"
                        crossOrigin="anonymous"
                    />
                    <link
                        rel="stylesheet preload prefetch"
                        href="public/static/fonts/avenir/AvenirLTStdBlack.woff"
                        as="font"
                        type="text/css"
                        crossOrigin="anonymous"
                    />
                    <link
                        rel="stylesheet preload prefetch"
                        href="public/static/fonts/avenir/AvenirLTStdBlack.woff2"
                        as="font"
                        type="text/css"
                        crossOrigin="anonymous"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
