import React from "react";
import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Menu from "../pages/shop/Menu";
import HomePage from "../pages/home/HomePage";
import SignUp from "../Components/SignUp";
import PrivateRouter from "../layout/PrivateRouter/PrivateRouter";
import UpdateProfile from "../pages/dashboard/UpdateProfile";
import CartPage from "../pages/shop/CartPage";


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
            element:<PrivateRouter><Menu/></PrivateRouter>
        },
        {
           path:"/update-profile",
           element:<UpdateProfile/>
        },
        {
            path:"/signup",
            element:<SignUp/>,
        },
        {
            path:"/cart-page",
            element:<CartPage/>,
        },
    ]
},
]);

export default router;