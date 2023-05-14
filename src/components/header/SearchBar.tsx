import "./SearchBar.scss";

import { HTMLProps, forwardRef, useState } from "react";
import Close from "../../assets/Close.icon";
import Search from "../../assets/Search.icon";
import { withClassNames } from "../../utilities/WithClassNames";

interface SearchBarProps extends HTMLProps<HTMLInputElement> {
    onClear: () => void;
}

const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
    ({ onClear, ...inputProps }, ref) => {
        const [isFocused, setIsFocused] = useState(false);

        const handleFocusInput = () => {
            setIsFocused(true);
        };

        const handleBlurInput = () => {
            setIsFocused(false);
        };

        // TODO Finish SearchBar

        return (
            <div className={withClassNames(["search-bar", isFocused && "search-bar--focused"])}>
                <input
                    {...inputProps}
                    ref={ref}
                    className="search-bar__input"
                    placeholder="Search..."
                    onFocus={handleFocusInput}
                    onBlur={handleBlurInput}
                />
                <Close
                    className={withClassNames([
                        "search-bar__clear-button",
                        inputProps.value && "search-bar__clear-button--visible"
                    ])}
                    onClick={onClear}
                />
                <Search className="search-bar__search-icon" />
            </div>
        );
    }
);

SearchBar.displayName = "SearchBar";
export default SearchBar;
