import { useState } from "react";
import { contextUser } from "../models/models";

export const useLocalStorage = (keyName:string, defaultValue:contextUser|null) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const value = window.localStorage.getItem(keyName);
            if (value) {
                return JSON.parse(value);
                } else {
                    window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
                    return defaultValue;
                }
            } catch (err) {
                return defaultValue;
            }
        }
    );
    const setValue = (newValue:string) => {
        try {
            window.localStorage.setItem(keyName, JSON.stringify(newValue));
        } catch (err) {}
        setStoredValue(newValue);
    };
    return [storedValue, setValue];
};