export function assertIsNode(e: EventTarget | null): asserts e is Node {
    if (!e || !("nodeType" in e)) {
        throw new Error("Node expected");
    }
}

/**
 * Formats a router route path name by removing forward slashes and hyphens,
 * replacing hyphens with spaces and capitalizing the next character,
 * and capitalizing the first character of the resulting string.
 *
 * @param {string} pathName - The path name of the router route.
 * @returns {string} The formatted path name.
 */
export const getFormattedRouterRoutePathName = (pathName: string): string => {
    let formattedPathName = "";

    if (!pathName || pathName === "/") {
        formattedPathName = "Home";
    } else {
        formattedPathName = pathName
            .replace(/\//g, "") // Remove forward slashes
            .replace(
                /-(\w)/g,
                (_, p1) => " " + p1.toUpperCase() // Replace hyphen with space and capitalize next character
            )
            .replace(
                /^\w/,
                (c) => c.toUpperCase() // Capitalize first character
            );
    }

    return formattedPathName;
};
