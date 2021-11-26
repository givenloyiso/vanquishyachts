import { gql } from '@apollo/client';

export const QUERY_ALL_CAREERS = gql`
    query AllJobs($maxCount: Int!) {
        jobs(first: $maxCount) {
            edges {
                node {
                    id
                    content
                    date
                    jobId
                    title
                    slug
                    seo {
                        title
                        metaDesc
                        fullHead
                    }
                    CF_SingleCareer {
                        category
                        featuredImage {
                            altText
                            sourceUrl
                        }
                        jobType
                        publishedDate
                        location {
                            ... on Location {
                                id
                                CF_Location {
                                    address {
                                        city
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

//* JOBS BY SLUG DATA
export const QUERY_CAREERS_BY_SLUG = gql`
    query JobsBySlug($slug: String!) {
        jobs(where: { name: $slug }) {
            edges {
                node {
                    id
                    content
                    date
                    jobId
                    title
                    slug
                    seo {
                        title
                        metaDesc
                        fullHead
                    }
                    CF_SingleCareer {
                        category
                        featuredImage {
                            altText
                            sourceUrl
                        }
                        jobType
                        publishedDate
                        location {
                            ... on Location {
                                id
                                CF_Location {
                                    address {
                                        city
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
        }
    }
`;
