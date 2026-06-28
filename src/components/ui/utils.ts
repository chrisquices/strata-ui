import {twMerge} from '../../../deps/tailwind-merge/bundle-mjs.mjs';

export type ClassValue = string | number | boolean | null | undefined | ClassArray | ClassDictionary;
type ClassArray = readonly ClassValue[];
type ClassDictionary = Record<string, unknown>;

function appendClass(classes: string[], value: ClassValue): void {
    if (!value || typeof value === 'boolean') {
        return;
    }

    if (typeof value === 'string' || typeof value === 'number') {
        classes.push(String(value));
        return;
    }

    if (Array.isArray(value)) {
        for (const item of value) {
            appendClass(classes, item);
        }

        return;
    }

    for (const key in value) {
        if (value[key]) {
            classes.push(key);
        }
    }
}

export function clsx(...values: ClassValue[]): string {
    const classes: string[] = [];

    for (const value of values) {
        appendClass(classes, value);
    }

    return classes.join(' ');
}

export function cn(...values: ClassValue[]): string {
    return twMerge(clsx(...values));
}
