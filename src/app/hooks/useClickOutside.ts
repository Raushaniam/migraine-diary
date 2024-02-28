import {useEffect} from "react";

export const useClickOutside = (ref, onClickOutside: () => void) => {
    const handleClickOutside = (event: Event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            onClickOutside();
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}