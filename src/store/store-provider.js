import React, {createContext, useReducer, useContext, useEffect} from "react";
import {defaultState} from "./state";
import {initializerOfState, reducer} from "./reducer";

const StoreContext = createContext(null);

export const StoreProvider = ({children}) => {
    const [store, dispatch] = useReducer(reducer, defaultState, initializerOfState);

    useEffect(() => {
        localStorage.setItem("state", JSON.stringify(store));
    }, [store]);

    return <StoreContext.Provider value={{store, dispatch}}>{children}</StoreContext.Provider>
}

export const useStore = () => useContext(StoreContext);
