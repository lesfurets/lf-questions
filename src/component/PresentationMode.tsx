import * as React from "react";
import {createContext, useContext} from "react";

const PresentationMode = createContext<boolean>(false);

export const PresentationModeProvider = ({children}:React.PropsWithChildren<{}>) => (
    <PresentationMode.Provider value={window.location.search.includes('?presentation')}>
        {children}
    </PresentationMode.Provider>
)

export const usePresentationMode = () => useContext(PresentationMode);
