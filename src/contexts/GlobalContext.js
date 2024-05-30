import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children}) => {
    const [usuarioLogado, setUsuarioLogado] = useState ();

    return (
        <GlobalContext.Provider value={{usuarioLogado, setUsuarioLogado}}>
            {children}
        </GlobalContext.Provider>
    )
}