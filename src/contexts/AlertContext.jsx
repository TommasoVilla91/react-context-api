import { createContext, useState } from "react";

const AlertContext = createContext();

function AlertProvider({children}) {

    const [error, setError] = useState("");
    const providerValue = {error, setError};

    return (
        <AlertContext.Provider value={providerValue}>
            {children}
        </AlertContext.Provider>
    );
};

export {AlertProvider};