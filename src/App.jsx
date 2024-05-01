import { RouterProvider } from "react-router-dom"
import { DataContextProvider } from './context/DataContext'
import router from "./Router"

function App() {
    return (
        <DataContextProvider>
            <RouterProvider router={router} />
        </DataContextProvider>
    )
}

export default App