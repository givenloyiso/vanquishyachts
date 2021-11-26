import { gql } from '@apollo/client';

export const QUERY_ALL_LOCATIONS_DATA = gql`
    {
        locations {
            edges {
                node {
                    id
                    title
                    content
                    slug
                    seo {
                        title
                        metaDesc
                        fullHead
                    }
                    CF_Location {
                        featuredImage {
                            sourceUrl
                        }
                        email
                        phone
                        address {
                            latitude
                            longitude
                            city
                            country
                            countryShort
                            placeId
                            postCode
                            state
                            stateShort
                            streetAddress
                            streetName
                            streetNumber
                            zoom
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
        }
    }
`;

export const QUERY_ALL_CHARTERS_DATA = gql`
    {
        locations(where: { categoryName: "charter-locations" }) {
            edges {
                node {
                    id
                    slug
                    title
                    CF_Location {
                        featuredImage {
                            sourceUrl
                            altText
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
        }
    }
`;

export const QUERY_ALL_CHARTER_BY_SLUG_DATA = gql`
    query ChartersLocationBySlug($slug: String!) {
        locationBy(slug: $slug) {
            id
            title
            content
            slug
            seo {
                title
                metaDesc
                fullHead
            }
            CF_Charters {
                section1 {
                    header
                    textBlock
                    paragraph
                    imageOrVideo {
                        fileType
                        image {
                            sourceUrl
                        }
                        video {
                            mediaItemUrl
                        }
                    }
                }
                section2 {
                    repeater {
                        header
                        paragraph
                    }
                    image {
                        sourceUrl
                        altText
                    }
                }
                section3 {
                    imageOrVideo {
                        fileType
                        image {
                            sourceUrl
                        }
                        video {
                            mediaItemUrl
                        }
                    }
                    header
                    dropdown {
                        dropdownInfo
                        dropdownTitle
                    }
                    contact {
                        email
                        phone
                    }
                }
                section4 {
                    charters {
                        ... on Yacht {
                            id
                            title
                            slug
                            CF_Charter {
                                specifications {
                                    beam {
                                        feet
                                        meters
                                    }
                                    guests
                                    speed
                                    length {
                                        feet
                                        meters
                                    }
                                    image {
                                        altText
                                        sourceUrl
                                    }
                                }
                                pricing {
                                    price
                                    timePeriod
                                }
                                additionalInformation {
                                    text
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
