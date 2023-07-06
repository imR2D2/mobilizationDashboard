import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
    //Guardamos el valor de una llave en el localstorage
    //Si existe hace todo esto
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        }  catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    //Si no existe la agrega al localstorage

    const setValue = (value) => {
        try {
            const ValueToStore = 
                value instanceof Function ? value(storedValue) : value;
            
            setStoredValue(ValueToStore);

            window.localStorage.setItem(key, JSON.stringify(ValueToStore));
        } catch (error) {
            console.log(error);
        }
    };
    return [storedValue, setValue]
}

const useDarkMode = () => {
    const [enabled, setEnabled] = useLocalStorage("dark-theme");
    const isEnabled = typeof enabledState === "undefined" && enabled;

    useEffect(() => {
        const className = "dark";
        const bodyClass = window.document.body.classList;

        isEnabled ? bodyClass.add(className) : bodyClass.remove(className);
    }, [enabled, isEnabled]);

    return [enabled, setEnabled]
};

export default useDarkMode;
