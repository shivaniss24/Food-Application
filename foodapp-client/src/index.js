import React from 'react';
import ReactDOM from 'react-dom/client';
import router from "./router/Router.js";
import  {RouterProvider} from "react-router-dom";
import AuthProvider from './contexts/AuthProvider.js';
import reportWebVitals from './reportWebVitals.js';
import './index.css';
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<AuthProvider>
    <RouterProvider router={router}>
        <App/>
    </RouterProvider>
</AuthProvider>


);

reportWebVitals();
