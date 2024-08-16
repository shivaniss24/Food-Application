import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Menu from "../pages/shop/Menu";
import HomePage from "../pages/home/HomePage";
import SignUp from "../Components/SignUp";
import PrivateRouter from "../layout/PrivateRouter/PrivateRouter";
import UpdateProfile from "../pages/dashboard/UpdateProfile";


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
    ]
},
]);

export default router;