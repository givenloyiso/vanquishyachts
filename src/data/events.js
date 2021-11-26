import { gql } from '@apollo/client';

export const QUERY_ALL_EVENTS = gql`
    query AllEvents($maxCount: Int!) {
        events(first: $maxCount) {
            edges {
                node {
                    id
                    content
                    date
                    eventId
                    title
                    slug
                    seo {
                        title
                        metaDesc
                        fullHead
                    }
                    CF_SingleEvent {
                        eventInformation {
                            paragraph
                            date
                            imageOrVideo {
                                fileType
                                image {
                                    altText
                                    sourceUrl
                                }
                                video {
                                    title
                                    mediaItemUrl
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

//* HERITAGE BY SLUG DATA
export const QUERY_EVENTS_BY_SLUG = gql`
    query EventsBySlug($slug: String!) {
        events(where: { name: $slug }) {
            edges {
                node {
                    id
                    content
                    date
                    eventId
                    title
                    slug
                    seo {
                        title
                        metaDesc
                        fullHead
                    }
                    CF_SingleEvent {
                        eventInformation {
                            paragraph
                            date
                            imageOrVideo {
                                fileType
                                image {
                                    altText
                                    sourceUrl
                                }
                                video {
                                    title
                                    mediaItemUrl
                                }
                            }
                        }
                        section2 {
                            header
                            multiBlock {
                                header
                                paragraph
                                button {
                                    title
                                    url
                                    target
                                }
                                image {
                                    altText
                                    sourceUrl
                                }
                            }
                        }
                        section3 {
                            header
                            quote
                            quotationFrom
                        }
                        section4 {
                            header
                            textBlock
                            image {
                                altText
                                sourceUrl
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
        }
    }
`;
