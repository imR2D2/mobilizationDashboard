import useDarkMode from "./useDarkMode";
import  { Switch } from "@headlessui/react"
import  { useState } from "react";

const DarkModeSwitch = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const [enabled, setEnabled] = useState(darkTheme);

    const ThemeIcon = () => {
        const handleMode = () => setDarkTheme(!darkTheme);
        return (
            <span onClick={handleMode}>
                <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={`${enabled ? 'bg-gray-100 dark:bg-gray-900' : 'bg-gray-100 dark:bg-gray-900'
                    }
                        relative inline-flex h-[26px] w-[48px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                    >
                    <span className="sr-only">Use setting</span>
                    <span
                        aria-hidden="true"
                        className={`${enabled 
                            ? 'translate-x-5' 
                            : 'translate-x-0'
                        }
                        pointer-events-none inline-block h-[22px] w-[24px] transform rounded-full bg-yellow-400 dark:bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                        
                    >
                        {darkTheme ? (
                            <>
                                <i className="bg-yellow-200"></i>
                            </>
                        ): (
                            <>
                                <i></i>
                            </>
                        )}
                    </span>
                </Switch>
            </span>
        );
    }
    return ThemeIcon();
}

export default DarkModeSwitch