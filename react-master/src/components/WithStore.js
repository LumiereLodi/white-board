import {nanoid} from "nanoid";
import React from "react";
import {useLocalStore} from 'mobx-react'
import {createAppStore} from "../components/AppState/AppState";
const AppContext = React.createContext(null)

const StateProvider = ({children}) => {

    const StateStore = useLocalStore(createAppStore)
    return <AppContext.Provider value={StateStore}>
        {children}
    </AppContext.Provider>
}


export const useAppState = () => React.useContext(AppContext)



export default StateProvider