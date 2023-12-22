import { twMerge } from "tailwind-merge";

export const classNames = (...classes) => {
    return twMerge(classes.filter(Boolean).join(" "));
};