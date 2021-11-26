const WORDPRESS_URL = new URL(process.env.WORDPRESS_SITE_URL).hostname;
const SITE_URL =
    new URL(process.env.NEXT_PUBLIC_SITE_URL).hostname ||
    'https://localhost:3000';

module.exports = {
    i18n: {
        // These are all the locales you want to support in
        // your application
        locales: ['en', 'nl'],
        // This is the default locale you want to be used when visiting
        // a non-locale prefixed path e.g. `/hello`
        defaultLocale: 'en',
        // This is a list of locale domains and the default locale they
        // should handle (these are only required when setting up domain routing)
        // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
        // domains: [
        //     {
        //         domain: SITE_URL,
        //         defaultLocale: 'en',
        //     },
        // ],
        localeDetection: false,
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                ],
            },
        ];
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    images: {
        domains: [WORDPRESS_URL, 'cdn-sharing.adobecc.com', 'player.vimeo.com'],
    },
    async redirects() {
        return [
            {
                source: '/vq40',
                destination: '/models/composite/vq40-sports-line',
                permanent: true,
            },
            {
                source: '/vq45',
                destination: '/models/aluminium/vq45',
                permanent: true,
            },
            {
                source: '/vanqraft-16',
                destination: '/models/composite/vq16-sports-line',
                permanent: true,
            },
            {
                source: '/vq58',
                destination: '/models/aluminium/vq58',
                permanent: true,
            },
            {
                source: '/vq52',
                destination: '/models/aluminium/vq52',
                permanent: true,
            },
            {
                source: '/vq58-hardtop',
                destination: '/models/aluminium/vq58',
                permanent: true,
            },
            {
                source: '/vq80-sportfish',
                destination: '/models/aluminium/vq80-sportfish',
                permanent: true,
            },
            {
                source: '/vq11',
                destination: '/models/composite/vq11-sports-line',
                permanent: true,
            },
            {
                source: '/dealers',
                destination: '/charters',
                permanent: true,
            },
            {
                source: '/vq50-3',
                destination: '/models/aluminium/vq50',
                permanent: true,
            },
            {
                source: '/vq115',
                destination: '/models/aluminium/vq115',
                permanent: true,
            },
            {
                source: '/vq88',
                destination: '/models',
                permanent: true,
            },
            {
                source: '/vq45-outboard',
                destination: '/models/concept/vq45-outboard',
                permanent: true,
            },
            {
                source: '/vq80',
                destination: '/models/concept/vq80',
                permanent: true,
            },
            {
                source: '/vq65-veloce',
                destination: '/models/concept/vq65-veloce',
                permanent: true,
            },
            {
                source: '/about-us',
                destination: '/about',
                permanent: true,
            },
            {
                source: '/vq60',
                destination: '/models/concept/vq60',
                permanent: true,
            },
            {
                source: '/vq68',
                destination: '/models/concept/vq68',
                permanent: true,
            },
            {
                source: '/charter-miami',
                destination: '/charters/miami',
                permanent: true,
            },
            {
                source: '/charter-ibiza',
                destination: '/charters/ibiza',
                permanent: true,
            },
            {
                source: '/vq50-mk1',
                destination: '/models/heritage/vq50-mk1',
                permanent: true,
            },
            {
                source: '/vq32-2',
                destination: '/models/heritage/vq32',
                permanent: true,
            },
            {
                source: '/vq43-mk2',
                destination: '/models/heritage/vq43',
                permanent: true,
            },
            {
                source: '/vq48-dual-console',
                destination: '/models/heritage/vq48-dual-console',
                permanent: true,
            },
            {
                source: '/vq32-special-edition',
                destination: '/news/special-edition-of-vq32',
                permanent: true,
            },
            {
                source: '/charter-st-tropez',
                destination: '/charters',
                permanent: true,
            },
            {
                source: '/flying-colours-vq43-mk2-gulf-racing',
                destination:
                    '/news/with-flying-colours-the-vq43-mk2-gulf-racing',
                permanent: true,
            },
            {
                source: '/vanqraft-vq11-fun-machine',
                destination: '/news/vanqraft-vq11-fun-machine',
                permanent: true,
            },
            {
                source: '/vq43-2',
                destination: '/models/heritage/vq43',
                permanent: true,
            },
            {
                source: '/speed-machine-vq115-veloce',
                destination: '/news/speed-machine-new-order-for-vq115-veloce',
                permanent: true,
            },
            {
                source: '/video',
                destination: '/gallery',
                permanent: true,
            },
            {
                source: '/our-story',
                destination: '/about',
                permanent: true,
            },
            {
                source: '/vq54-2',
                destination: '/models',
                permanent: true,
            },
            {
                source: '/magazines',
                destination: '/lifestyle-magazines',
                permanent: true,
            },
            {
                source: '/tender-garage',
                destination: '/news/vq54-with-tender-garage',
                permanent: true,
            },
            {
                source: '/superyacht-tender',
                destination: '/news/our-first-bespoke-superyacht-tender',
                permanent: true,
            },
            {
                source: '/vqmag-2020',
                destination: '/lifestyle-magazines',
                permanent: true,
            },
            {
                source: '/vq58-press',
                destination: '/models/aluminium/vq58',
                permanent: true,
            },
            {
                source: '/meet-our-new-coo',
                destination: '/news/meet-our-new-coo',
                permanent: true,
            },
            {
                source: '/vanquish-magazine-2019-2020',
                destination: '/lifestyle-magazines',
                permanent: true,
            },
            {
                source: '/vq40-sales-boom',
                destination: '/news/vq40-sales-boom',
                permanent: true,
            },
            {
                source: '/chartering-exclusive-vanquish',
                destination: '/news/chartering-an-exclusive-vq-yacht',
                permanent: true,
            },
            {
                source: '/meet-us-in-miami',
                destination: '/news/meet-us-in-miami',
                permanent: true,
            },
            {
                source: '/new-dealer-greece',
                destination: '/news/new-dealer-in-greece',
                permanent: true,
            },
            {
                source: '/news/2',
                destination: '/news',
                permanent: true,
            },
            {
                source: '/vanqraft-vq16-fun-machine',
                destination: '/news/vanqraft-vq16-fun-machine',
                permanent: true,
            },
            {
                source: '/custom-vq45-t-top-cuts-to-the-chase',
                destination: '/news/custom-vq45-t-top-cuts-to-the-chase',
                permanent: true,
            },
            {
                source: '/at-your-service-major-expansion-us',
                destination: '/news/at-your-service-major-expansion-in-the-us',
                permanent: true,
            },
            {
                source: '/new-year-resolution-vanquish-on-the-move-january',
                destination:
                    '/news/new-year-resolution-vanquish-on-the-move-in-january',
                permanent: true,
            },
            {
                source: '/news/3',
                destination: '/news',
                permanent: true,
            },
            {
                source: '/new-business-development-director',
                destination:
                    '/news/tijl-hetterschijt-new-business-development-director',
                permanent: true,
            },
            {
                source: '/the-time-has-come-for-vq53-composite',
                destination: '/news/the-time-has-come-for-a-vq53-composite',
                permanent: true,
            },
            {
                source: '/new-vq54-goes-barbados',
                destination: '/news/new-vq54-goes-to-barbados',
                permanent: true,
            },
            {
                source: '/succes-in-palm-beach',
                destination: '/news/success-in-palm-beach',
                permanent: true,
            },
            {
                source: '/the-astounding-new-vq40',
                destination: '/news/the-astounding-new-vq40',
                permanent: true,
            },
            {
                source: '/days-of-old-exploring-stiltsville',
                destination: '/news/days-of-old-exploring-stiltsville',
                permanent: true,
            },
            {
                source: '/vq43-mk2-balr-brand-icon',
                destination: '/news/vq43-mk2-balr-brand-icon',
                permanent: true,
            },
            {
                source: '/news/4',
                destination: '/news',
                permanent: true,
            },
            {
                source: '/new-yard-fully-up-and-running',
                destination:
                    '/news/spectacular-drone-video-showcases-smart-new-yard',
                permanent: true,
            },
            {
                source: '/vq45-with-crew-cabin',
                destination: '/news/vq45-with-crew-cabin-2',
                permanent: true,
            },
            {
                source: '/fort-lauderdale-international-boatshow-2020',
                destination:
                    '/news/come-see-the-vq16-vq50mk2-and-vq58-in-fort-lauderdale',
                permanent: true,
            },
            {
                source: '/speedy-progress-vq80-sportfish',
                destination: '/news/speedy-progress-on-vq80-sportfish',
                permanent: true,
            },
            {
                source: '/new-vanquish-powermaran-vq65',
                destination: '/news/vq-yachts-introduces-the-vq65-powermaran',
                permanent: true,
            },
            {
                source: '/new-vq90-veloce-offers-55-knots-of-power',
                destination: '/news/new-vq90-veloce-offers-55-knots-of-power',
                permanent: true,
            },
            {
                source: '/game-on-keel-laid-vq80-sportfish',
                destination: '/news/game-on-keel-laid-for-vq80-sportfish',
                permanent: true,
            },
            {
                source: '/vq115-speed-is-nothing-without-comfort',
                destination: '/news/vq115-speed-is-nothing-without-comfort',
                permanent: true,
            },
            {
                source: '/vq52-hard-top-for-lake-geneva',
                destination: '/news/vq52-hard-top-for-lake-geneva',
                permanent: true,
            },
            {
                source: '/60-knots-for-vq45-veloce-hard-top',
                destination: '/news/60-kn-for-vq45-veloce-hard-top',
                permanent: true,
            },
            {
                source: '/first-order-new-vanquish-vq58-hardtop',
                destination: '/news/first-order-for-new-vq58-hardtop',
                permanent: true,
            },
            {
                source: '/rave-reviews-vq52-t-top-ibiza',
                destination: '/news/rave-reviews-for-vq52-t-top-on-ibiza',
                permanent: true,
            },
            {
                source: '/news/5',
                destination: '/news',
                permanent: true,
            },
            {
                source: '/news/6',
                destination: '/news',
                permanent: true,
            },
            {
                source: '/charter-vanquish-ibiza-now',
                destination: '/charters/ibiza',
                permanent: true,
            },
            {
                source: '/vanquish-sales-increase-continues',
                destination: '/news/vanquish-sales-increase-continues',
                permanent: true,
            },
            {
                source: '/interview-client-vq32-custom-tender',
                destination:
                    '/news/nathan-smith-chief-engineer-of-vq32-custom-tender',
                permanent: true,
            },
            {
                source: '/lifestyle',
                destination: '/lifestyle-magazines',
                permanent: true,
            },
            {
                source: '/new-vanquish-dealer-in-australia-and-new-zealand',
                destination:
                    '/news/new-vq-yachts-dealer-in-australia-and-new-zealand',
                permanent: true,
            },
            {
                source: '/studio-delta-engineering-the-famous-vanquish-hull',
                destination:
                    '/news/studio-delta-engineering-the-famous-vq-yachts-hull',
                permanent: true,
            },
            {
                source: '/vq54-press',
                destination: '/models',
                permanent: true,
            },
            {
                source: '/vq16-vq54-vq48-vq43-mk2-fort-lauderdale-boat-show',
                destination: '/news/success-at-the-fort-lauderdale-boat-show',
                permanent: true,
            },
            {
                source: '/come-see-the-vanquish-vq58-vq45-in-miami',
                destination: '/news/come-see-the-vanquish-vq58-vq45-in-miami',
                permanent: true,
            },
            {
                source: '/news/1',
                destination: '/news',
                permanent: true,
            },
            {
                source: '/our-promise',
                destination: '/about',
                permanent: true,
            },
            {
                source: '/new-order-24-metre-custom-sportfish',
                destination: '/news/new-order-for-24-metre-custom-sportfish',
                permanent: true,
            },
            {
                source: '/news/13',
                destination: '/news',
                permanent: true,
            },
            {
                source: '/news/7',
                destination: '/news',
                permanent: true,
            },
            {
                source: '/news/10',
                destination: '/news',
                permanent: true,
            },
            {
                source: '/news/11',
                destination: '/news',
                permanent: true,
            },
            {
                source: '/news/8',
                destination: '/news',
                permanent: true,
            },
            {
                source: '/news/9',
                destination: '/news',
                permanent: true,
            },
            {
                source: '/vq54-specs-unveiled',
                destination: '/news/vq54-specs-unveiled',
                permanent: true,
            },
            {
                source: '/news/14',
                destination: '/news',
                permanent: true,
            },
            {
                source: '/show-time-flibs-2020',
                destination: '/news/show-time-five-days-of-sales-at-flibs-2020',
                permanent: true,
            },
            {
                source: '/vanquish-lifestyle-magazine',
                destination: '/lifestyle-magazines',
                permanent: true,
            },
            {
                source: '/vanquish-never-says-no',
                destination: '/news/no-is-not-an-answer',
                permanent: true,
            },
            {
                source: '/charter-experiences-ibiza',
                destination: '/news/vanquish-charter-experiences-on-ibiza',
                permanent: true,
            },
            {
                source: '/first-new-vq58-painting-hall',
                destination: '/news/first-order-for-new-vq58-hardtop',
                permanent: true,
            },
            {
                source: '/new-partner-vanquish-yachts',
                destination:
                    '/news/transequity-network-new-partner-in-vq-yachts',
                permanent: true,
            },
            {
                source: '/vq43-mk2-gulf-racing-video',
                destination:
                    '/news/with-flying-colours-the-vq43-mk2-gulf-racing',
                permanent: true,
            },
            {
                source: '/news/12',
                destination: '/news',
                permanent: true,
            },
            {
                source: '/second-vq54-ready-barbados',
                destination: '/news/second-vq54-ready-for-barbados',
                permanent: true,
            },
            {
                source: '/the-new-vq60-open-or-closed',
                destination: '/news/the-new-vq60-open-or',
                permanent: true,
            },
            {
                source: '/the-vq58-a-new-flagship',
                destination: '/news/the-vq58-a-new-flagship',
                permanent: true,
            },
            {
                source: '/vq48-lady-thunder-video',
                destination: '/models/heritage/vq48-dual-console',
                permanent: true,
            },
            {
                source: '/project-engineer',
                destination: '/careers',
                permanent: true,
            },
            {
                source: '/vanquish-porter',
                destination: '/news',
                permanent: true,
            },
            {
                source: '/vq16-takes-off-in-switzerland',
                destination: '/news/vq16-takes-off-in-switzerland',
                permanent: true,
            },
            {
                source: '/like-to-own-a-vq50-mk2-this-summer',
                destination: '/news/like-to-own-a-vq50-mk2-this-summer',
                permanent: true,
            },
            {
                source: '/new-dealer-antibes',
                destination: '/news/new-dealer-in-antibes',
                permanent: true,
            },
            {
                source: '/vanquish-magazine-2',
                destination: '/lifestyle-magazines',
                permanent: true,
            },
            {
                source: '/vanquish-sales-in-2016-well-into-double-figures',
                destination:
                    '/news/vq-yachts-sales-in-2016-well-into-double-figures',
                permanent: true,
            },
            {
                source: '/coming-soon',
                destination: '/',
                permanent: true,
            },
            {
                source: '/home-1',
                destination: '/',
                permanent: true,
            },
            {
                source: '/impressive-performance-first-vq54-delivered',
                destination:
                    '/news/impressive-performance-first-vq54-delivered',
                permanent: true,
            },
            {
                source: '/join-us-palm-beach-2019',
                destination: '/news/success-in-palm-beach',
                permanent: true,
            },
            {
                source: '/miami-nice',
                destination: '/news/miami-nice',
                permanent: true,
            },
            {
                source: '/service-engineer',
                destination:
                    '/news/service-engineers-to-help-expand-vanquish-us',
                permanent: true,
            },
            {
                source: '/the-vq68-makes-an-entrance',
                destination: '/news/the-vq68-makes-an-entrance',
                permanent: true,
            },
            {
                source: '/first-vq43-mk2-greece',
                destination: '/news/first-vq43-mk2-to-greece',
                permanent: true,
            },
            {
                source: '/new-vanquish-dealer-menorca',
                destination: '/news/viva-vq-yachts-new-office-in-menorca',
                permanent: true,
            },
            {
                source: '/the-invisible-enemy',
                destination: '/news/the-invisible-enemy',
                permanent: true,
            },
            {
                source: '/the-joy-of-sketching',
                destination: '/news/the-joy-of-sketching',
                permanent: true,
            },
            {
                source: '/upgrading-vq45-custom-interior',
                destination:
                    '/news/upgrading-the-vq45-with-a-custom-interior-2',
                permanent: true,
            },
            {
                source: '/vanquish-network-grows-in-south-of-france',
                destination: '/news',
                permanent: true,
            },
            {
                source: '/vq46-dc-becomes-the-vq48-dc',
                destination: '/news/swimming-platform',
                permanent: true,
            },
            {
                source: '/vq54',
                destination: '/models',
                permanent: true,
            },
            {
                source: '/building-success-2018',
                destination: '/news/building-on-succes-in-2018',
                permanent: true,
            },
            {
                source: '/maybe-best-yacht-movie-ever',
                destination: '/news/maybe-the-best-yacht-movie-ever',
                permanent: true,
            },
            {
                source: '/new-vanquish-vq54-new-york',
                destination: '/news/new-vq54-for-new-york',
                permanent: true,
            },
            {
                source: '/new-vq40-making-waves-ahead-of-launch',
                destination: '/news/new-vq40-making-waves-ahead-of-launch',
                permanent: true,
            },
            {
                source: '/the-vq43-mk2',
                destination: '/models/heritage/vq43',
                permanent: true,
            },
            {
                source: '/two-premiers-for-vq-yachts-in-cannes',
                destination: '/news/successful-cannes-yachting-festival ',
                permanent: true,
            },
            {
                source: '/vanquish-shines-at-the-boat-shows',
                destination: '/news/vq-yachts-shines-at-the-yacht-shows',
                permanent: true,
            },
            {
                source: '/vq54-now-available-with-two-or-three-cabins',
                destination:
                    '/news/vq54-now-available-with-two-or-three-cabins',
                permanent: true,
            },
            {
                source: '/what-is-the-new-vanqraft-16',
                destination: '/news/what-is-the-new-vanqraft-16',
                permanent: true,
            },
            {
                source: '/charter-choice-ibiza',
                destination: '/news/more-charter-choice-in-ibiza',
                permanent: true,
            },
            {
                source: '/come-see-us-boot-dusseldorf-2020',
                destination:
                    '/news/come-see-the-vq45-and-vq16-at-boot-dusseldorf-2020',
                permanent: true,
            },
            {
                source: '/financial-controller',
                destination: '/careers',
                permanent: true,
            },
            {
                source: '/first-vq48-dc-is-a-hit',
                destination: '/news/first-vq48-dc-is-a-hit',
                permanent: true,
            },
            {
                source: '/guidos-new-lines-vq32-mk2',
                destination: '/models/heritage/vq32 ',
                permanent: true,
            },
            {
                source: '/new-look-cushion-design',
                destination: '/news/new-look-at-cushion-design',
                permanent: true,
            },
            {
                source: '/new-vq43-mk2-sal-arrives-ibiza',
                destination: '/news/new-vq43-mk2-sal-arrives-in-ibiza',
                permanent: true,
            },
            {
                source: '/press-release',
                destination: '/news',
                permanent: true,
            },
            {
                source: '/second-vanquish-lifestyle-magazine-is-ready',
                destination: '/lifestyle-magazines',
                permanent: true,
            },
            {
                source: '/vanqraft-16-gets-red-carpet-treatment-cannes',
                destination: '/test-drive-the-new-vq16-your-special-invite ',
                permanent: true,
            },
            {
                source: '/vanquish-direct-services-starts-in-ibiza',
                destination: '/news/vq-yachts-direct-services-starts-in-ibiza',
                permanent: true,
            },
            {
                source: '/vanquish-lifestyle-magazine-3-published',
                destination: '/lifestyle-magazines',
                permanent: true,
            },
            {
                source: '/vanquish-vq58-concept-takes-off',
                destination: '/news/vq58-concept-takes-off',
                permanent: true,
            },
            {
                source: '/vq16-reborn-as-vanqraft-16',
                destination: '/news/vq16-reborn-as-vanqraft-16',
                permanent: true,
            },
            {
                source: '/vq43',
                destination: '/models/heritage/vq43',
                permanent: true,
            },
            {
                source: '/vq50-mk2',
                destination: '/models/aluminium/vq50',
                permanent: true,
            },
            {
                source: '/vq58-concept-takes-off',
                destination: '/news/vq58-concept-takes-off',
                permanent: true,
            },
            {
                source: '/vq58s-gearing-up-for-summer-to-remember',
                destination: '/news/vq58s-gearing-up-for-summer-to-remember',
                permanent: true,
            },
            {
                source: '/blub',
                destination: '/ ',
                permanent: true,
            },
            {
                source: '/charter-ibiza/tom brady',
                destination: '/charters/ibiza',
                permanent: true,
            },
            {
                source: '/charter-ibiza/VQ43 USED',
                destination: '/charters/ibiza',
                permanent: true,
            },
            {
                source: '/charter-st-tropez/plecomte@smn-port-grimaud.fr',
                destination: '/news/vq48-now-for-charter',
                permanent: true,
            },
            {
                source: '/come-see-the-vq58-and-vq45-monaco',
                destination:
                    '/news/youre-welcome-to-see-the-vq58-and-vq45-in-glamorous-monaco',
                permanent: true,
            },
            {
                source: '/come-see-us-boot-dusseldorf-2020',
                destination:
                    '/news/come-see-the-vq45-and-vq16-at-boot-dusseldorf-2020',
                permanent: true,
            },
            {
                source: '/come-see-us-fort-lauderdale',
                destination:
                    '/news/come-see-the-vq16-vq50mk2-and-vq58-in-fort-lauderdale',
                permanent: true,
            },
            {
                source: '/construction-gets-started-vq32-special-edition',
                destination:
                    '/news/construction-gets-started-on-the-vq32-special-edition',
                permanent: true,
            },
            {
                source: '/contact/milliyet',
                destination: '/contact',
                permanent: true,
            },
            {
                source: '/custom-built-seats-for-vq48-captains',
                destination: '/news/custom-built-seats-for-vq48-captains',
                permanent: true,
            },
            {
                source: '/dealers/how are vanquish boats in ny',
                destination: '/charters',
                permanent: true,
            },
            {
                source: '/global-premieres-for-vq40-and-vq58-at-cannes-yachting-festival',
                destination: '/news',
                permanent: true,
            },
            {
                source: '/laying-a-big-green-egg',
                destination: '/news/laying-a-big-green-egg',
                permanent: true,
            },
            {
                source: '/new-space-growth',
                destination: '/news/new-space-for-more-growth',
                permanent: true,
            },
            {
                source: '/new-vanquish',
                destination: '/news',
                permanent: true,
            },
            {
                source: '/new-vq48-to-be-unveiled-in-st-tropez',
                destination: '/news/vq54-specs-unveiled',
                permanent: true,
            },
            {
                source: '/palma-boat-show',
                destination: '/news/palma-boat-show',
                permanent: true,
            },
            {
                source: '/preparing-for-paintwork',
                destination: '/news/preparing-for-paintwork',
                permanent: true,
            },
            {
                source: '/project-engineer',
                destination: '/careers',
                permanent: true,
            },
            {
                source: '/see-vanqraft-16-fun-machine-action',
                destination: '/news/see-the-vanqraft-16-fun-machine-in-action',
                permanent: true,
            },
            {
                source: '/service-engineer',
                destination: '/careers',
                permanent: true,
            },
            {
                source: '/service-engineer-US',
                destination: '/careers/allround-monteur-jachtbouw-florida-usa',
                permanent: true,
            },
            {
                source: '/skating-on-dutch-canals',
                destination: '/news/skating-on-the-dutch-canals',
                permanent: true,
            },
            {
                source: '/special-edition-vanquish-vq32',
                destination: '/news/special-edition-of-vq32',
                permanent: true,
            },
            {
                source: '/success-at-the-cannes-yachting-festival',
                destination: '/news/successful-cannes-yachting-festival',
                permanent: true,
            },
            {
                source: '/success-fort-lauderdale-boat-show',
                destination: '/news/success-at-the-fort-lauderdale-boat-show',
                permanent: true,
            },
            {
                source: '/test-drive-new-vq16-special-invite',
                destination:
                    '/news/come-see-the-vq16-vq50mk2-and-vq58-in-fort-lauderdale',
                permanent: true,
            },
            {
                source: '/the-growing-popularity-of-ibiza',
                destination: '/news/the-growing-popularity-of-ibiza',
                permanent: true,
            },
            {
                source: '/v16',
                destination: '/models/composite/vq16-sports-line',
                permanent: true,
            },
            {
                source: '/vanqraft-vq16-flyboard',
                destination: '/news/vanqraft-vq16-with-flyboard',
                permanent: true,
            },
            {
                source: '/vanquish-edminston-team-up-on-monaco-yacht-show',
                destination:
                    '/news/vq-yachts-edminston-team-up-on-monaco-yacht-show',
                permanent: true,
            },
            {
                source: '/vanquish-lifestyle-3',
                destination: '/lifestyle-magazines',
                permanent: true,
            },
            {
                source: '/vanquish-vq65-veloce-the-fastest-65ft-ever',
                destination: '/news/vq65-veloce-the-fastest-65ft-ever',
                permanent: true,
            },
            {
                source: '/vanquish-vq75-custom',
                destination: '/news/vq75-custom',
                permanent: true,
            },
            {
                source: '/vq16',
                destination: '/models/composite/vq16-sports-line',
                permanent: true,
            },
            {
                source: '/vq40-makes-its-mark-in-us',
                destination: '/news/vq40-makes-its-mark-in-us',
                permanent: true,
            },
            {
                source: '/vq45/vq45 price',
                destination: '/models/aluminium/vq45',
                permanent: true,
            },
            {
                source: '/vq45h',
                destination: '/models/aluminium/vq45',
                permanent: true,
            },
            {
                source: '/vq45t',
                destination: '/models/aluminium/vq45',
                permanent: true,
            },
            {
                source: '/vq48',
                destination: '/models/heritage/vq48-dual-console',
                permanent: true,
            },
            {
                source: '/vq48/pardo',
                destination: '/models/heritage/vq48-dual-console',
                permanent: true,
            },
            {
                source: '/vq50-3/language all.about bots',
                destination: '/models/aluminium/vq50',
                permanent: true,
            },
            {
                source: '/vq50-3/the mirror',
                destination: '/models/aluminium/vq50',
                permanent: true,
            },
            {
                source: '/vq50',
                destination: '/models/aluminium/vq50',
                permanent: true,
            },
            {
                source: '/vq52',
                destination: '/models/aluminium/vq52',
                permanent: true,
            },
            {
                source: '/vq52-t-top-so-bespoke-so-vanquish',
                destination: '/news/vq52-t-top-so-bespoke-so-vanquish',
                permanent: true,
            },
            {
                source: '/vq52/vanquish',
                destination: 'models/aluminium/vq52',
                permanent: true,
            },
            {
                source: '/vq54-video-live-dream',
                destination: '/news/vq54-video-live-your-dream',
                permanent: true,
            },
            {
                source: '/vq58-hardtop/price',
                destination: '/news/vq58-concept-takes-off',
                permanent: true,
            },
            {
                source: '/vq58-hardtop/spoiler',
                destination: '/news/vq58-concept-takes-off',
                permanent: true,
            },
            {
                source: '/vq58-hardtop/vandaag',
                destination: '/news/vq58-concept-takes-off',
                permanent: true,
            },
            {
                source: '/vq58/dynamiq-yachts',
                destination: '/news/vq58-concept-takes-off',
                permanent: true,
            },
            {
                source: '/vq58/vanquish yatchs for sale',
                destination: '/news/vq58-concept-takes-off',
                permanent: true,
            },
            {
                source: '/vq80',
                destination: '/models/concept/vq80',
                permanent: true,
            },
            {
                source: '/wp-content/uploads/2018/11/vq58-1.png',
                destination: '/models/aluminium/vq58',
                permanent: true,
            },
            {
                source: '/wp-content/uploads/2018/11/vq58-2.png',
                destination: '/models/aluminium/vq58',
                permanent: true,
            },
            {
                source: '/wp-content/uploads/2018/11/vq58-4.png',
                destination: '/models/aluminium/vq58',
                permanent: true,
            },
            {
                source: '/wp-content/uploads/2018/11/vq58.png',
                destination: '/models/aluminium/vq58',
                permanent: true,
            },
        ];
    },
};
