import { gql } from '@apollo/client';

//* HOME PAGE DATA
export const QUERY_HOME_PAGE = gql`
    {
        page(id: "home", idType: URI) {
            id
            slug
            title
            seo {
                title
                metaDesc
                fullHead
            }
            CF_Home {
                section1 {
                    header
                    content
                    imageOrVideo {
                        fileType
                        image {
                            sourceUrl
                            altText
                        }
                        video {
                            mediaItemUrl
                            title
                        }
                    }
                    button {
                        title
                        url
                    }
                }
                section2 {
                    textBlock
                    header
                    paragraph
                    paragraphVanquish
                    button {
                        title
                        url
                    }
                    boatOption {
                        ... on Yacht {
                            yachtId
                            title
                            slug
                            categories {
                                nodes {
                                    slug
                                }
                            }
                            CF_Aluminium {
                                specifications {
                                    yachtIcon {
                                        sourceUrl
                                        altText
                                    }
                                }
                            }
                            CF_Composite {
                                specifications {
                                    yachtIcon {
                                        sourceUrl
                                        altText
                                    }
                                }
                            }
                        }
                    }
                }
                section3 {
                    header
                    multiBlock {
                        header
                        paragraph
                        paragraphVanquish
                        image {
                            sourceUrl
                            altText
                        }
                        button {
                            title
                            url
                            target
                        }
                    }
                }
                section4 {
                    header
                    quote
                    quotationFrom
                }
                section5 {
                    textBlock
                    header
                    paragraph
                    button {
                        url
                        title
                    }
                    image {
                        sourceUrl
                        altText
                    }
                }
            }
            CF_Form {
                formImage {
                    sourceUrl
                    altText
                }
            }
        }
    }
`;

//* ABOUT PAGE DATA
export const QUERY_ABOUT_PAGE = gql`
    {
        page(id: "about", idType: URI) {
            id
            slug
            title
            seo {
                title
                metaDesc
                fullHead
            }
            CF_About {
                section1 {
                    header
                    paragraph
                    imageOrVideo {
                        fileType
                        image {
                            sourceUrl
                            altText
                        }
                        video {
                            mediaItemUrl
                            title
                        }
                    }
                    button {
                        title
                        url
                    }
                }
                section2 {
                    header
                    multiBlock {
                        header
                        paragraph
                        image {
                            sourceUrl
                            altText
                        }
                        button {
                            title
                            url
                            target
                        }
                    }
                }
                section3 {
                    header
                    quote
                    quotationFrom
                }
                section4 {
                    textBlock
                    header
                    paragraphRepeater {
                        paragraph
                    }
                    image {
                        sourceUrl
                        altText
                    }
                }
                section5 {
                    textBlock
                    repeater {
                        header
                        paragraph
                        image {
                            sourceUrl
                            altText
                        }
                    }
                }
            }
            CF_Form {
                formImage {
                    sourceUrl
                    altText
                }
            }
        }
    }
`;

//* CHARTERS OVERVIEW DATA
export const QUERY_CHARTERS_OVERVIEW_PAGE = gql`
    {
        page(id: "charters", idType: URI) {
            id
            slug
            title
            seo {
                title
                metaDesc
                fullHead
            }
            CF_ChartersOverview {
                section1 {
                    header
                    paragraph
                    textBlock
                    imageOrVideo {
                        fileType
                        image {
                            sourceUrl
                            altText
                        }
                        video {
                            mediaItemUrl
                            title
                        }
                    }
                }
                section2 {
                    content {
                        header
                        paragraph
                    }
                }
                section3 {
                    textBlock
                    header
                    paragraph
                    email
                    phone
                    imageOrVideo {
                        fileType
                        image {
                            sourceUrl
                            altText
                        }
                        video {
                            mediaItemUrl
                            title
                        }
                    }
                }
                section4 {
                    header
                    textBlock
                    paragraph
                }
            }
            CF_Form {
                formImage {
                    sourceUrl
                    altText
                }
            }
        }
        locations {
            edges {
                node {
                    id
                    title
                    content
                    slug
                    CF_Location {
                        featuredImage {
                            sourceUrl
                        }
                    }
                }
            }
        }
    }
`;

//* CONTACT PAGE DATA
export const QUERY_CONTACT_PAGE = gql`
    {
        page(id: "contact", idType: URI) {
            id
            slug
            title
            seo {
                title
                metaDesc
                fullHead
            }
            CF_Contact {
                section1 {
                    imageOrVideo {
                        image {
                            altText
                            sourceUrl
                        }
                        video {
                            title
                            mediaItemUrl
                        }
                    }
                    locations {
                        ... on Location {
                            id
                            title
                            CF_Location {
                                email
                                phone
                                address {
                                    streetName
                                    streetNumber
                                    postCode
                                    city
                                    country
                                }
                            }
                        }
                    }
                }
            }
            CF_Form {
                formImage {
                    sourceUrl
                    altText
                }
            }
        }
    }
`;

//* GALLERY PAGES DATA
export const QUERY_GALLERY_PAGE = gql`
    {
        page(id: "gallery", idType: URI) {
            id
            slug
            title
            seo {
                title
                metaDesc
                fullHead
            }
            CF_Gallery {
                imageOrVideo {
                    fileType
                    image {
                        sourceUrl
                        altText
                    }
                    video {
                        mediaItemUrl
                        title
                    }
                }
                gallery {
                    imageOrVideo {
                        fileType
                        image {
                            sourceUrl
                            altText
                        }
                        video {
                            mediaItemUrl
                            title
                        }
                    }
                }
            }
            CF_Form {
                formImage {
                    sourceUrl
                    altText
                }
            }
        }
    }
`;

//* LIFESTYLE MAGAZINES PAGES DATA
export const QUERY_MAGAZINE_PAGE = gql`
    {
        page(id: "lifestyle-magazines", idType: URI) {
            id
            slug
            title
            seo {
                title
                metaDesc
                fullHead
            }
            CF_LifestyleMagazines {
                header
                textBlock
                magazine {
                    year
                    url
                    image {
                        sourceUrl
                        altText
                    }
                }
            }
            CF_Form {
                formImage {
                    sourceUrl
                    altText
                }
            }
        }
    }
`;

//* MODELS PAGE DATA
export const QUERY_MODELS_PAGE = gql`
    {
        page(id: "models", idType: URI) {
            id
            slug
            title
            seo {
                title
                metaDesc
                fullHead
            }
            CF_Models {
                section1 {
                    header
                    paragraph
                    textBlock
                }
                section2 {
                    header
                    textBlock
                    paragraph
                    imageOrVideo {
                        fileType
                        image {
                            sourceUrl
                            altText
                        }
                        video {
                            mediaItemUrl
                            title
                        }
                    }
                }
                section3 {
                    multiBlock {
                        header
                        paragraph
                        image {
                            sourceUrl
                            altText
                        }
                    }
                }
                section4 {
                    header
                    placeholder {
                        sourceUrl
                        altText
                    }
                    imageOrVideo {
                        fileType
                        image {
                            sourceUrl
                            altText
                        }
                        video {
                            mediaItemUrl
                            title
                        }
                    }
                }
                section5 {
                    header
                    multiBlock {
                        header
                        paragraph
                        image {
                            sourceUrl
                            altText
                        }
                    }
                }
            }
            CF_Form {
                formImage {
                    sourceUrl
                    altText
                }
            }
        }
    }
`;

//* NEWS PAGE DATA
export const QUERY_NEWS_PAGE = gql`
    {
        page(id: "news", idType: URI) {
            id
            slug
            title
            seo {
                title
                metaDesc
                fullHead
            }
            CF_News {
                imageOrVideo {
                    fileType
                    image {
                        sourceUrl
                        altText
                    }
                    video {
                        mediaItemUrl
                        title
                    }
                }
            }
            CF_Form {
                formImage {
                    sourceUrl
                    altText
                }
            }
        }
    }
`;

//* ALUMINIUM PAGE DATA
export const QUERY_ALUMINIUM_PAGE = gql`
    {
        page(id: "why-aluminium", idType: URI) {
            id
            slug
            title
            seo {
                title
                metaDesc
                fullHead
            }
            CF_WhyAluminium {
                section1 {
                    header
                    paragraph
                    imageOrVideo {
                        fileType
                        image {
                            sourceUrl
                            altText
                        }
                        video {
                            mediaItemUrl
                            title
                        }
                    }
                    button {
                        title
                        url
                    }
                }
                section2 {
                    header
                    multiBlock {
                        header
                        paragraph
                        image {
                            sourceUrl
                            altText
                        }
                    }
                }
                section3 {
                    header
                    video {
                        mediaItemUrl
                        title
                    }
                    paragraphRepeater {
                        paragraph
                    }
                }
            }
            CF_Form {
                formImage {
                    sourceUrl
                    altText
                }
            }
        }
    }
`;

//* EVENTS PAGE DATA
export const QUERY_EVENTS_PAGE = gql`
    {
        page(id: "events", idType: URI) {
            id
            slug
            title
            seo {
                title
                metaDesc
                fullHead
            }
            CF_Events {
                section1 {
                    header
                    paragraph
                    button {
                        title
                        url
                        target
                    }
                    imageOrVideo {
                        fileType
                        image {
                            sourceUrl
                            altText
                        }
                        video {
                            mediaItemUrl
                            title
                        }
                    }
                }
                section2 {
                    header
                    textBlock
                    paragraph
                    imageOrVideo {
                        fileType
                        image {
                            sourceUrl
                            altText
                        }
                        video {
                            mediaItemUrl
                            title
                        }
                    }
                }
            }
            CF_Form {
                formImage {
                    sourceUrl
                    altText
                }
            }
        }
    }
`;

//* CAREERS PAGE DATA
export const QUERY_CAREERS_PAGE = gql`
    {
        page(id: "careers", idType: URI) {
            id
            slug
            title
            seo {
                title
                metaDesc
                fullHead
            }
            CF_Careers {
                section1 {
                    header
                    paragraph
                    button {
                        title
                        url
                        target
                    }
                    imageOrVideo {
                        fileType
                        image {
                            sourceUrl
                            altText
                        }
                        video {
                            mediaItemUrl
                            title
                        }
                    }
                }
                section2 {
                    header
                    textBlock
                    paragraph
                }
            }
            CF_Form {
                formImage {
                    sourceUrl
                    altText
                }
            }
        }
    }
`;

//* SERVICE PAGE DATA
export const QUERY_SERVICE_PAGE = gql`
    {
        page(id: "service", idType: URI) {
            seo {
                title
                metaDesc
                fullHead
            }
            CF_Service {
                section1 {
                    header
                    paragraph
                    button {
                        title
                        url
                        target
                    }
                    imageOrVideo {
                        fileType
                        image {
                            sourceUrl
                            altText
                        }
                        video {
                            mediaItemUrl
                            title
                        }
                    }
                }
                section2 {
                    textBlock
                    repeater {
                        header
                        paragraph
                        image {
                            sourceUrl
                            altText
                        }
                    }
                }
                section3 {
                    header
                    multiBlock {
                        header
                        paragraph
                        image {
                            sourceUrl
                            altText
                        }
                        button {
                            title
                            url
                            target
                        }
                    }
                }
                section4 {
                    header
                    paragraph
                    image {
                        sourceUrl
                        altText
                    }
                }
            }
            CF_Form {
                formImage {
                    sourceUrl
                }
            }
        }
    }
`;

//* QUERY ALL PAGES BY SLUG
// export const QUERY_PAGE_BY_URI = gql`
//     query PageByUri($slug: ID!) {
//         page(id: $slug, idType: URI) {
//             id
//             slug
//             title
//         }
//     }
// `;
