import { gql } from '@apollo/client';

export const QUERY_ALL_SEARCH = gql`
    query AllSearch($maxCount: Int!, $search: String!) {
        posts(where: { search: $search }, first: $maxCount) {
            edges {
                node {
                    id
                    title
                    slug
                    excerpt
                }
            }
        }
        yachts(
            where: {
                categoryName: "composite, aluminium, heritage, concept"
                search: $search
            }
            first: $maxCount
        ) {
            edges {
                node {
                    id
                    title
                    slug
                    categories {
                        edges {
                            node {
                                slug
                            }
                        }
                    }
                }
            }
        }
        pages(where: { search: $search }, first: $maxCount) {
            edges {
                node {
                    id
                    title
                    slug
                }
            }
        }
        locations(
            where: { search: $search, categoryName: "charter-locations" }
            first: $maxCount
        ) {
            edges {
                node {
                    id
                    title
                    slug
                    CF_Charters {
                        section1 {
                            paragraph
                        }
                    }
                }
            }
        }
        events(where: { search: $search }, first: $maxCount) {
            edges {
                node {
                    id
                    title
                    slug
                    CF_SingleEvent {
                        eventInformation {
                            paragraph
                        }
                    }
                }
            }
        }
        jobs(where: { search: $search }, first: $maxCount) {
            edges {
                node {
                    id
                    title
                    slug
                    CF_SingleCareer {
                        jobType
                        category
                    }
                }
            }
        }
    }
`;
