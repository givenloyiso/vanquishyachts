import { gql } from '@apollo/client';

export const QUERY_ALL_YACHTS = gql`
    query AllYachts($maxCount: Int!) {
        yachts(first: $maxCount) {
            edges {
                node {
                    yachtId
                    title
                    slug
                    categories {
                        edges {
                            node {
                                slug
                            }
                        }
                    }
                    seo {
                        title
                        metaDesc
                        fullHead
                    }
                    CF_Composite {
                        specifications {
                            yachtIcon {
                                sourceUrl
                            }
                            maxSpeed {
                                knots
                                version
                            }
                            people
                            length {
                                meters
                                feet
                            }
                            beam {
                                meters
                                feet
                            }
                            engines {
                                engineType
                            }
                            draught {
                                meters
                                feet
                            }
                            displacement
                            fuel {
                                liters
                                usGallon
                            }
                        }
                        section1 {
                            header
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
                            button {
                                url
                            }
                        }
                        section2 {
                            header
                            paragraph
                            textBlock
                            image {
                                sourceUrl
                            }
                        }
                        section3 {
                            header
                            multiBlock {
                                button {
                                    url
                                }
                                header
                                paragraph
                                image {
                                    sourceUrl
                                }
                            }
                        }
                        section4 {
                            header
                            quote
                            image {
                                sourceUrl
                            }
                            audio {
                                mediaItemUrl
                            }
                        }
                        section5 {
                            header
                            imageGallery {
                                sourceUrl
                            }
                        }
                        section6 {
                            viewText
                            viewImage {
                                sourceUrl
                            }
                        }
                        section7 {
                            header
                            textBlock
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
                        section8 {
                            header
                            multiBlock {
                                paragraph
                                header
                                image {
                                    sourceUrl
                                }
                            }
                        }
                    }
                    CF_Aluminium {
                        specifications {
                            beam {
                                feet
                                meters
                            }
                            displacement
                            draught {
                                feet
                                meters
                            }
                            engines {
                                engineType
                            }
                            fuel {
                                liters
                                usGallon
                            }
                            length {
                                feet
                                meters
                            }
                            maxSpeed {
                                knots
                                version
                            }
                            people
                            yachtIcon {
                                sourceUrl
                                altText
                            }
                        }
                        yachtType {
                            yachtType
                            yachtTypeFootage {
                                sourceUrl
                                altText
                            }
                        }
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
                            header
                            paragraph
                        }
                        section3 {
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
                                    sourceUrl
                                    altText
                                }
                            }
                        }
                        section4 {
                            header
                            quote
                            image {
                                sourceUrl
                                altText
                            }
                            audio {
                                mediaItemUrl
                            }
                        }
                        section5 {
                            header
                            customizationGallery {
                                title
                                icon {
                                    sourceUrl
                                    altText
                                }
                                image {
                                    sourceUrl
                                    altText
                                }
                            }
                        }
                        section6 {
                            header
                            imageGallery {
                                sourceUrl
                                altText
                            }
                        }
                        section7 {
                            levelText
                            viewImage {
                                sourceUrl
                                altText
                            }
                        }
                        section8 {
                            header
                            textBlock
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
                        section9 {
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
                    CF_Concept {
                        specifications {
                            speed
                            people
                            length {
                                meters
                                feet
                            }
                            beam {
                                meters
                                feet
                            }
                        }
                        section1 {
                            header
                            paragraph
                            button {
                                url
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
                            paragraph
                            textBlock
                            image {
                                sourceUrl
                                altText
                            }
                        }
                        section3 {
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
                                    sourceUrl
                                    altText
                                }
                            }
                        }
                    }
                    CF_Heritage {
                        specifications {
                            maxSpeed
                            people
                            length {
                                meters
                                feet
                            }
                            beam {
                                meters
                                feet
                            }
                        }
                        section1 {
                            header
                            paragraph
                            button {
                                url
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
                            paragraph
                            textBlock
                            image {
                                sourceUrl
                                altText
                            }
                        }
                        section3 {
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
                                    sourceUrl
                                    altText
                                }
                            }
                        }
                        section4 {
                            header
                            imageGallery {
                                sourceUrl
                                altText
                            }
                        }
                        section5 {
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
        }
    }
`;

//* GET ALL YACHTS BY SLUG
export const QUERY_ALL_YACHTS_BY_SLUG = gql`
    query GetYachtsBySlug($slug: String!) {
        yachts(where: { name: $slug }) {
            edges {
                node {
                    yachtId
                    title
                    slug
                    categories {
                        edges {
                            node {
                                slug
                            }
                        }
                    }
                    seo {
                        title
                        metaDesc
                        fullHead
                    }
                    CF_Composite {
                        specifications {
                            yachtIcon {
                                sourceUrl
                            }
                            maxSpeed {
                                knots
                                version
                            }
                            people
                            length {
                                meters
                                feet
                            }
                            beam {
                                meters
                                feet
                            }
                            engines {
                                engineType
                            }
                            draught {
                                meters
                                feet
                            }
                            displacement
                            fuel {
                                liters
                                usGallon
                            }
                        }
                        section1 {
                            header
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
                            button {
                                url
                            }
                        }
                        section2 {
                            header
                            paragraph
                            textBlock
                            image {
                                sourceUrl
                            }
                        }
                        section3 {
                            header
                            multiBlock {
                                button {
                                    url
                                }
                                header
                                paragraph
                                image {
                                    sourceUrl
                                }
                            }
                        }
                        section4 {
                            header
                            quote
                            image {
                                sourceUrl
                            }
                            audio {
                                mediaItemUrl
                            }
                        }
                        section5 {
                            header
                            imageGallery {
                                sourceUrl
                            }
                        }
                        section6 {
                            viewText
                            viewImage {
                                sourceUrl
                            }
                        }
                        section7 {
                            header
                            textBlock
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
                        section8 {
                            header
                            multiBlock {
                                paragraph
                                header
                                image {
                                    sourceUrl
                                }
                            }
                        }
                    }
                    CF_Aluminium {
                        specifications {
                            beam {
                                feet
                                meters
                            }
                            displacement
                            draught {
                                feet
                                meters
                            }
                            engines {
                                engineType
                            }
                            fuel {
                                liters
                                usGallon
                            }
                            length {
                                feet
                                meters
                            }
                            maxSpeed {
                                knots
                                version
                            }
                            people
                            yachtIcon {
                                sourceUrl
                                altText
                            }
                        }
                        yachtType {
                            yachtType
                            yachtTypeFootage {
                                sourceUrl
                                altText
                            }
                        }
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
                            header
                            paragraph
                            image {
                                altText
                                sourceUrl
                            }
                        }
                        section3 {
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
                                    sourceUrl
                                    altText
                                }
                            }
                        }
                        section4 {
                            header
                            quote
                            image {
                                sourceUrl
                                altText
                            }
                            audio {
                                mediaItemUrl
                            }
                        }
                        section5 {
                            header
                            customizationGallery {
                                title
                                icon {
                                    sourceUrl
                                    altText
                                }
                                image {
                                    sourceUrl
                                    altText
                                }
                            }
                        }
                        section6 {
                            header
                            imageGallery {
                                sourceUrl
                                altText
                            }
                        }
                        section7 {
                            levelText
                            viewImage {
                                sourceUrl
                                altText
                            }
                        }
                        section8 {
                            header
                            textBlock
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
                        section9 {
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
                    CF_Concept {
                        specifications {
                            speed
                            people
                            length {
                                meters
                                feet
                            }
                            beam {
                                meters
                                feet
                            }
                        }
                        section1 {
                            header
                            paragraph
                            button {
                                url
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
                            paragraph
                            textBlock
                            image {
                                sourceUrl
                                altText
                            }
                        }
                        section3 {
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
                                    sourceUrl
                                    altText
                                }
                            }
                        }
                    }
                    CF_Heritage {
                        specifications {
                            maxSpeed
                            people
                            length {
                                meters
                                feet
                            }
                            beam {
                                meters
                                feet
                            }
                        }
                        section1 {
                            header
                            paragraph
                            button {
                                url
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
                            paragraph
                            textBlock
                            image {
                                sourceUrl
                                altText
                            }
                        }
                        section3 {
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
                                    sourceUrl
                                    altText
                                }
                            }
                        }
                        section4 {
                            header
                            imageGallery {
                                sourceUrl
                                altText
                            }
                        }
                        section5 {
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
        }
    }
`;

//* GET ALL ALUMINIUM DATA
export const QUERY_ALL_ALUMINIUM_YACHTS = gql`
    {
        yachts(
            where: {
                categoryName: "aluminium"
                orderby: { field: TITLE, order: ASC }
            }
        ) {
            edges {
                node {
                    yachtId
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
                                slug
                                name
                            }
                        }
                    }
                    CF_Aluminium {
                        specifications {
                            yachtIcon {
                                sourceUrl
                            }
                            maxSpeed {
                                knots
                                version
                            }
                            people
                            length {
                                meters
                                feet
                            }
                            beam {
                                meters
                                feet
                            }
                            engines {
                                engineType
                            }
                            draught {
                                meters
                                feet
                            }
                            displacement
                            fuel {
                                liters
                                usGallon
                            }
                        }
                        yachtType {
                            yachtType
                            yachtTypeFootage {
                                sourceUrl
                                altText
                            }
                        }
                        section1 {
                            header
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
                            button {
                                url
                            }
                        }
                        section2 {
                            header
                            paragraph
                            textBlock
                            image {
                                sourceUrl
                            }
                        }
                        section3 {
                            header
                            multiBlock {
                                header
                                paragraph
                                button {
                                    url
                                }
                                image {
                                    sourceUrl
                                }
                            }
                        }
                        section4 {
                            header
                            quote
                            image {
                                sourceUrl
                            }
                            audio {
                                mediaItemUrl
                            }
                        }
                        section5 {
                            header
                            customizationGallery {
                                title
                                image {
                                    sourceUrl
                                }
                                icon {
                                    sourceUrl
                                }
                            }
                        }
                        section6 {
                            header
                            imageGallery {
                                sourceUrl
                            }
                        }
                        section7 {
                            levelText
                            viewImage {
                                sourceUrl
                            }
                        }
                        section8 {
                            header
                            textBlock
                            imageOrVideo {
                                fileType
                                image {
                                    sourceUrl
                                }
                                video {
                                    mediaItemUrl
                                }
                            }
                            placeholder {
                                sourceUrl
                            }
                        }
                        section9 {
                            header
                            multiBlock {
                                header
                                paragraph
                                image {
                                    sourceUrl
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

//* ALUMINIUM BY SLUG DATA
export const QUERY_ALUMINIUM_SLUG_YACHTS = gql`
    query AluminiumSlug($slug: String!) {
        yachts(
            where: {
                name: $slug
                categoryName: "aluminium"
                orderby: { field: TITLE, order: ASC }
            }
        ) {
            edges {
                node {
                    yachtId
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
                                slug
                                name
                            }
                        }
                    }
                    CF_Aluminium {
                        specifications {
                            yachtIcon {
                                sourceUrl
                            }
                            maxSpeed {
                                knots
                                version
                            }
                            people
                            length {
                                meters
                                feet
                            }
                            beam {
                                meters
                                feet
                            }
                            engines {
                                engineType
                            }
                            draught {
                                meters
                                feet
                            }
                            displacement
                            fuel {
                                liters
                                usGallon
                            }
                        }
                        section1 {
                            header
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
                            button {
                                url
                            }
                        }
                        section2 {
                            header
                            paragraph
                            textBlock
                            image {
                                sourceUrl
                            }
                        }
                        section3 {
                            header
                            multiBlock {
                                header
                                paragraph
                                button {
                                    url
                                }
                                image {
                                    sourceUrl
                                }
                            }
                        }
                        section4 {
                            header
                            quote
                            image {
                                sourceUrl
                            }
                            audio {
                                mediaItemUrl
                            }
                        }
                        section5 {
                            header
                            customizationGallery {
                                title
                                image {
                                    sourceUrl
                                }
                                icon {
                                    sourceUrl
                                }
                            }
                        }
                        section6 {
                            header
                            imageGallery {
                                sourceUrl
                            }
                        }
                        section7 {
                            levelText
                            viewImage {
                                sourceUrl
                            }
                        }
                        section8 {
                            header
                            textBlock
                            imageOrVideo {
                                fileType
                                image {
                                    sourceUrl
                                }
                                video {
                                    mediaItemUrl
                                }
                            }
                            placeholder {
                                sourceUrl
                            }
                        }
                        section9 {
                            header
                            multiBlock {
                                header
                                paragraph
                                image {
                                    sourceUrl
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

//* GET ALL COMPOSITE DATA
export const QUERY_ALL_COMPOSITE_YACHTS = gql`
    {
        yachts(
            where: {
                categoryName: "composite"
                orderby: { field: TITLE, order: ASC }
            }
        ) {
            edges {
                node {
                    yachtId
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
                                slug
                                name
                            }
                        }
                    }
                    CF_Composite {
                        specifications {
                            beam {
                                feet
                                meters
                            }
                            displacement
                            draught {
                                feet
                                meters
                            }
                            engines {
                                engineType
                            }
                            fuel {
                                liters
                                usGallon
                            }
                            length {
                                feet
                                meters
                            }
                            maxSpeed {
                                knots
                                version
                            }
                            people
                            yachtIcon {
                                sourceUrl
                                altText
                            }
                        }
                        yachtType {
                            yachtType
                            yachtTypeFootage {
                                sourceUrl
                                altText
                            }
                        }
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
                                url
                            }
                        }
                        section2 {
                            header
                            paragraph
                            textBlock
                            image {
                                sourceUrl
                                altText
                            }
                        }
                        section3 {
                            header
                            multiBlock {
                                button {
                                    title
                                    url
                                    target
                                }
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
                            quote
                            image {
                                sourceUrl
                                altText
                            }
                            audio {
                                mediaItemUrl
                            }
                        }
                        section5 {
                            header
                            imageGallery {
                                sourceUrl
                                altText
                            }
                        }
                        section6 {
                            viewText
                            viewImage {
                                sourceUrl
                                altText
                            }
                        }
                        section7 {
                            header
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
                        section8 {
                            header
                            multiBlock {
                                paragraph
                                header
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
        }
    }
`;

//* COMPOSITE BY SLUG DATA
export const QUERY_COMPOSITE_SLUG_YACHTS = gql`
    query CompositeSlug($slug: String!) {
        yachts(
            where: {
                name: $slug
                categoryName: "composite"
                orderby: { field: TITLE, order: ASC }
            }
        ) {
            edges {
                node {
                    yachtId
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
                                slug
                                name
                            }
                        }
                    }
                    CF_Composite {
                        specifications {
                            beam {
                                feet
                                meters
                            }
                            displacement
                            draught {
                                feet
                                meters
                            }
                            engines {
                                engineType
                            }
                            fuel {
                                liters
                                usGallon
                            }
                            length {
                                feet
                                meters
                            }
                            maxSpeed {
                                knots
                                version
                            }
                            people
                            yachtIcon {
                                sourceUrl
                                altText
                            }
                        }
                        yachtType {
                            yachtType
                            yachtTypeFootage {
                                sourceUrl
                                altText
                            }
                        }
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
                                url
                            }
                        }
                        section2 {
                            header
                            paragraph
                            textBlock
                            image {
                                sourceUrl
                                altText
                            }
                        }
                        section3 {
                            header
                            multiBlock {
                                button {
                                    title
                                    url
                                    target
                                }
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
                            quote
                            image {
                                sourceUrl
                                altText
                            }
                            audio {
                                mediaItemUrl
                            }
                        }
                        section5 {
                            header
                            imageGallery {
                                sourceUrl
                                altText
                            }
                        }
                        section6 {
                            viewText
                            viewImage {
                                sourceUrl
                                altText
                            }
                        }
                        section7 {
                            header
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
                        section8 {
                            header
                            multiBlock {
                                paragraph
                                header
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
                        }
                    }
                }
            }
        }
    }
`;

//* CONCEPT DATA
export const QUERY_ALL_CONCEPT_YACHTS = gql`
    {
        yachts(
            where: {
                categoryName: "concept"
                orderby: { field: TITLE, order: ASC }
            }
        ) {
            edges {
                node {
                    yachtId
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
                                slug
                                name
                            }
                        }
                    }
                    CF_Concept {
                        specifications {
                            speed
                            people
                            length {
                                meters
                                feet
                            }
                            beam {
                                meters
                                feet
                            }
                        }
                        section1 {
                            header
                            paragraph
                            button {
                                url
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
                            paragraph
                            textBlock
                            image {
                                sourceUrl
                                altText
                            }
                        }
                        section3 {
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
        }
    }
`;

//* CONCEPT BY SLUG DATA
export const QUERY_CONCEPT_SLUG_YACHTS = gql`
    query ConceptSlug($slug: String!) {
        yachts(
            where: {
                name: $slug
                categoryName: "concept"
                orderby: { field: TITLE, order: ASC }
            }
        ) {
            edges {
                node {
                    yachtId
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
                                slug
                                name
                            }
                        }
                    }
                    CF_Concept {
                        specifications {
                            speed
                            people
                            length {
                                meters
                                feet
                            }
                            beam {
                                meters
                                feet
                            }
                        }
                        section1 {
                            header
                            paragraph
                            button {
                                url
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
                            paragraph
                            textBlock
                            image {
                                sourceUrl
                                altText
                            }
                        }
                        section3 {
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
        }
    }
`;

//* HERITAGE DATA
export const QUERY_ALL_HERITAGE_YACHTS = gql`
    {
        yachts(
            where: {
                categoryName: "heritage"
                orderby: { field: TITLE, order: ASC }
            }
        ) {
            edges {
                node {
                    yachtId
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
                                slug
                                name
                            }
                        }
                    }
                    CF_Heritage {
                        specifications {
                            maxSpeed
                            people
                            length {
                                meters
                                feet
                            }
                            beam {
                                meters
                                feet
                            }
                        }
                        section1 {
                            header
                            paragraph
                            button {
                                url
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
                            paragraph
                            textBlock
                            image {
                                sourceUrl
                                altText
                            }
                        }
                        section3 {
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
                                    sourceUrl
                                    altText
                                }
                            }
                        }
                        section4 {
                            header
                            imageGallery {
                                sourceUrl
                                altText
                            }
                        }
                        section5 {
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
                            altText
                        }
                    }
                }
            }
        }
    }
`;

//* HERITAGE BY SLUG DATA
export const QUERY_HERITAGE_SLUG_YACHTS = gql`
    query HeritageSlug($slug: String!) {
        yachts(
            where: {
                name: $slug
                categoryName: "heritage"
                orderby: { field: TITLE, order: ASC }
            }
        ) {
            edges {
                node {
                    yachtId
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
                                slug
                                name
                            }
                        }
                    }
                    CF_Heritage {
                        specifications {
                            maxSpeed
                            people
                            length {
                                meters
                                feet
                            }
                            beam {
                                meters
                                feet
                            }
                        }
                        section1 {
                            header
                            paragraph
                            button {
                                url
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
                            paragraph
                            textBlock
                            image {
                                sourceUrl
                                altText
                            }
                        }
                        section3 {
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
                                    sourceUrl
                                    altText
                                }
                            }
                        }
                        section4 {
                            header
                            imageGallery {
                                sourceUrl
                                altText
                            }
                        }
                        section5 {
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
                            altText
                        }
                    }
                }
            }
        }
    }
`;
