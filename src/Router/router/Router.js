import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from '../../component/page/Home/Home/Home'
import Login from "../../component/page/login/Login";
import Appoipnment from '../../component/page/Home/appoipnment/Appoipnment'

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:([
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/appoipnment',
                element:<Appoipnment></Appoipnment>
            }
        ])
    }
])

export default router;