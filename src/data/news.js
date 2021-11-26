import { gql } from '@apollo/client';

export const QUERY_ALL_ARTICLES = gql`
    query AllPosts($maxCount: Int!) {
        posts(first: $maxCount) {
            edges {
                node {
                    id
                    postId
                    title
                    slug
                    content
                    excerpt
                    date
                    seo {
                        title
                        metaDesc
                        fullHead
                    }
                    CF_Article {
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
                    categories {
                        edges {
                            node {
                                categoryId
                                id
                                name
                                slug
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const QUERY_POST_BY_SLUG = gql`
    query PostBySlug($slug: ID!) {
        post(id: $slug, idType: SLUG) {
            id
            content
            date
            excerpt
            postId
            title
            slug
            seo {
                title
                metaDesc
                fullHead
            }
            categories {
                edges {
                    node {
                        categoryId
                        id
                        name
                        slug
                    }
                }
            }
            CF_Article {
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
                    gallery {
                        sourceUrl
                        altText
                    }
                }
            }
            categories {
                edges {
                    node {
                        name
                    }
                }
            }
        }
    }
`;

export const QUERY_RELATED_POST = gql`
    query RelatedPost($postId: [ID]!) {
        posts(where: { notIn: $postId }) {
            edges {
                node {
                    id
                    content
                    date
                    excerpt
                    modified
                    postId
                    title
                    slug
                    isSticky
                    CF_Article {
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
                            gallery {
                                sourceUrl
                                altText
                            }
                        }
                    }
                    categories {
                        edges {
                            node {
                                categoryId
                                id
                                name
                                slug
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const QUERY_POST_PER_PAGE = gql`
    query PostPerPage {
        allSettings {
            readingSettingsPostsPerPage
        }
    }
`;
