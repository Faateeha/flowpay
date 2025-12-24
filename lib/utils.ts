import {type ClassValue, clsx } from "clsx"
import qs from "query-string";
import {twMerge } from "tailwind-merge";

export function cn (...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const formatDateTime = (dateString: Date) => {
    const dteTimeOptions: Intl.DateTimeFormatOptions = {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    };
};

export function formatAmount(amount: number): string {
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
    });

    return formatter.format(amount);
}

export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

export const removeSpecialCharacters = (value: string) => {
    return value.replace(/[^\w\s]/gi, "");
};

interface UrlQueryParms {
    params: string;
    key: string; 
    value: string;
}