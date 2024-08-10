import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Menu from "../pages/shop/Menu";
import HomePage from "../pages/home/HomePage";
import SignUp from "../Components/SignUp";


const router =createBrowserRouter([{
    path:"/",
    element:<Main/>,
    children:[
        {
            path:"/",
            element:<HomePage/>
        },
        {
            path:"/menu",
            element:<Menu/>
        },
        {
            path:"/signup",
            element:<SignUp/>,
        },
    ]
},
]);

export default router;