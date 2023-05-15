/* eslint-disable @typescript-eslint/no-explicit-any */

import { useRef } from "react";

const useDebounce = () => {
    const timeoutId = useRef<NodeJS.Timeout>();

    const debounce = (func: (...args: any[]) => void, delay: number) => {
        return (...args: any[]) => {
            clearTimeout(timeoutId.current);

            timeoutId.current = setTimeout(() => {
                func(...args);
            }, delay);
        };
    };

    return debounce;
};

export default useDebounce;
