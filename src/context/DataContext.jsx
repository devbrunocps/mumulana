import { createContext, useState } from "react"

export const DataContext = createContext({})

export function DataContextProvider({ children }) {
    const [teste, setTeste] = useState()

    const data = {
        teste,
    }

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    )
}