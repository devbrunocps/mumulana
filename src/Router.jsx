import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Dapp from './pages/Dapp'

const router = createBrowserRouter([
    { path: "/", element: <Home/> },
    { path: "/dapp", element: <Dapp /> }
])

export default router