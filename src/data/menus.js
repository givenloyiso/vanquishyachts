import { gql } from '@apollo/client';

export const QUERY_ALL_MENUS = gql`
    {
        menus {
            edges {
                node {
                    id
                    menuId
                    menuItems {
                        edges {
                            node {
                                cssClasses
                                id
                                parentId
                                label
                                title
                                target
                                path
                            }
                        }
                    }
                    name
                    slug
                    locations
                }
            }
        }
    }
`;

export const QUERY_HAMBURGER_MENU = gql`
    {
        menuItems(where: { location: HAMBURGER_MENU }) {
            nodes {
                path
                label
            }
        }
    }
`;

export const QUERY_DESKTOP_MENU = gql`
    {
        menuItems(where: { location: DESKTOP_MENU }) {
            nodes {
                path
                label
            }
        }
    }
`;

export const QUERY_404_SEARCH_MENU = gql`
    {
        menus(where: { slug: "404-search", location: _404_SEARCH_MENU }) {
            edges {
                node {
                    menuItems {
                        edges {
                            node {
                                path
                                label
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const MENU_LOCATION_NAVIGATION_DEFAULT = 'DEFAULT_NAVIGATION';

/**
 * getAllMenus
 */

export async function getAllMenus() {
    const apolloClient = getApolloClient();

    const data = await apolloClient.query({
        query: QUERY_ALL_MENUS,
    });

    const menus = data?.data.menus.edges.map(mapMenuData);

    return {
        menus,
    };
}

/**
 * mapMenuData
 */

export function mapMenuData(menu = {}) {
    const { node } = menu;
    const data = { ...node };

    data.menuItems = data.menuItems.edges.map(({ node }) => {
        return { ...node };
    });

    return data;
}

/**
 * mapPagesToMenuItems
 */

export function mapPagesToMenuItems(pages) {
    return pages.map(({ id, uri, title }) => {
        return {
            label: title,
            path: uri,
            id,
        };
    });
}

/**
 * createMenuFromPages
 */

export function createMenuFromPages({ locations, pages }) {
    return {
        menuItems: mapPagesToMenuItems(pages),
        locations,
    };
}

/**
 * parseHierarchicalMenu
 */
export const parseHierarchicalMenu = (
    data = [],
    { idKey = 'id', parentKey = 'parentId', childrenKey = 'children' } = {}
) => {
    const tree = [];
    const childrenOf = {};
    data.forEach((item) => {
        const newItem = { ...item };
        const { [idKey]: id, [parentKey]: parentId = 0 } = newItem;
        childrenOf[id] = childrenOf[id] || [];
        newItem[childrenKey] = childrenOf[id];
        parentId
            ? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem)
            : tree.push(newItem);
    });
    return tree;
};

/**
 * findMenuByLocation
 */

export function findMenuByLocation(menus, location) {
    let menu;

    if (!Array.isArray(location)) {
        location = [location];
    }

    do {
        menu = menus.find(({ locations }) =>
            locations.includes(location.shift())
        );
    } while (!menu && location.length > 0);

    return parseHierarchicalMenu(menu.menuItems);
}
