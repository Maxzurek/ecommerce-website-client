import "./SearchBar.scss";

import { useContext, useRef, useState } from "react";
import Close from "../../assets/Close.icon";
import Search from "../../assets/Search.icon";
import { withClassNames } from "../../utilities/WithClassNames";
import { products } from "../../Products";
import { Link, UNSAFE_DataRouterContext, useLocation } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";
import { Product } from "../../interfaces/Product.interfaces";
import Spinner from "../../assets/Spinner.icon";

interface SearchItem {
    id: string;
    name: string;
    path?: string;
    product?: Product;
}

interface SearchResult {
    title: string;
    items: SearchItem[];
}

const SearchBar = ({
    ...inputProps
}: Omit<
    React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "value" & "onChange"
>) => {
    const [query, setQuery] = useState("");
    const [queryResults, setQueryResults] = useState<SearchResult[]>([]);
    const [isFocused, setIsFocused] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const location = useLocation();
    const routerContext = useContext(UNSAFE_DataRouterContext);
    const debounce = useDebounce();

    const searchBarRef = useRef<HTMLDivElement>();
    const inputRef = useRef<HTMLInputElement>();

    const queryDebounce = 750;

    const handleClearQuery = () => {
        setQuery("");
        setQueryResults([]);
    };

    const handleSearch = debounce((value: string) => {
        setIsLoading(false);

        if (!value) {
            setQueryResults([]);
            return;
        }

        const valueToLower = value.toLowerCase();

        const filteredProducts: SearchItem[] = [];
        for (const product of products) {
            const matches = product.title.toLowerCase().includes(valueToLower);
            if (matches) {
                filteredProducts.push({ id: product.id, name: product.title, product });
            }
        }

        const filteredRoutes: SearchItem[] = [];
        for (const route of routerContext.router.routes) {
            for (const child of route.children) {
                let formattedPath = child.path.replace(/\/(.)/g, (_, p1) => p1.toUpperCase());
                formattedPath = formattedPath.replace(/-(.)/g, (_, p1) => " " + p1.toUpperCase());

                const isMatch =
                    formattedPath !== location.pathname &&
                    formattedPath.toLowerCase().includes(valueToLower) &&
                    !formattedPath.includes(":productId");

                const isHome =
                    valueToLower.includes("home") &&
                    formattedPath === "/" &&
                    location.pathname !== "/";

                if (isHome) {
                    filteredRoutes.push({
                        id: child.id,
                        name: "Home",
                        path: child.path
                    });
                } else if (isMatch && value !== "/") {
                    filteredRoutes.push({
                        id: child.id,
                        name: formattedPath,
                        path: child.path
                    });
                }
            }
        }

        const result: SearchResult[] = [];
        if (filteredProducts.length > 0) {
            result.push({
                title: "Products",
                items: filteredProducts
            });
        }
        if (filteredRoutes.length > 0) {
            result.push({
                title: "Other Pages",
                items: filteredRoutes
            });
        }

        setQueryResults(result);
    }, queryDebounce);

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        setIsLoading(true);
        setQuery(value);
        handleSearch(value);
    };

    const handleClearSearchBar = () => {
        handleClearQuery();
        inputRef.current?.focus();
    };

    const handleFocusInput = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        setIsFocused(true);
        inputProps.onFocus?.(e);
    };

    const handleBlurInput = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        if (!searchBarRef.current.contains(e.relatedTarget)) {
            setIsFocused(false);
        }
        inputProps.onBlur?.(e);
    };

    return (
        <div
            ref={searchBarRef}
            className={withClassNames(["search-bar", isFocused && "search-bar--focused"])}
        >
            <input
                {...inputProps}
                ref={inputRef}
                className="search-bar__input"
                placeholder="Search..."
                value={query}
                onBlur={handleBlurInput}
                onChange={handleChangeInput}
                onFocus={handleFocusInput}
            />
            {isLoading ? (
                <Spinner className="search-bar__spinner" />
            ) : (
                <Close
                    className={withClassNames([
                        "search-bar__clear-button",
                        query && "search-bar__clear-button--visible"
                    ])}
                    onClick={handleClearSearchBar}
                />
            )}
            <Search className="search-bar__search-icon" />
            <div
                className={withClassNames([
                    "search-bar__results",
                    isFocused && "search-bar__results--visible"
                ])}
            >
                {queryResults.map((result) => (
                    <div key={result.title}>
                        <div className="search-bar__result-group-title">{result.title}</div>
                        {result.items.map((item) => (
                            <div key={item.id} className="search-bar__result-item">
                                {item.path ? (
                                    <Link
                                        className="search-bar__result-link"
                                        to={item.path}
                                        onClick={handleClearQuery}
                                    >
                                        {item.name}
                                    </Link>
                                ) : (
                                    <Link
                                        className="search-bar__result-link"
                                        to={`/product-page/${item.id}`}
                                        onClick={handleClearQuery}
                                    >
                                        <div className="search-bar__product-card">
                                            <img
                                                alt="product"
                                                className="search-bar__product-card-image"
                                                src={item.product.imageSrc}
                                            />
                                            <div className="search-bar__product-card-title">
                                                {item.product.title}
                                            </div>
                                        </div>
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

SearchBar.displayName = "SearchBar";
export default SearchBar;
