import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Menu from "../pages/shop/Menu";
import HomePage from "../pages/home/HomePage";


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
    ]
},
]);

export default router;