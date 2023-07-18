import { Navigate, createBrowserRouter } from "react-router-dom";
import Hedar from "./Hedar/Hedar.jsx";
import Error from "./Comancoponert/Error.jsx";
import Home from "./Page/Home.jsx";
import Link from "./Page/Link.jsx";
import Login from "./Page/Login.jsx";
import React, { Suspense } from "react";

const API = React.lazy(() => import('../API/APIS.jsx'))
const Hooks = React.lazy(() => import('../Coponet/Hooks.jsx'))
const router = createBrowserRouter([
    {
        path: "*",
        element: <><Hedar /><Error /></>,
    },
    {
        path: "/",
        element: <Navigate to='/home' replace={true} />,
    },
    {
        path: "/home",
        element: <><Hedar /><Home /></>,
    },
    {
        path: "/link",
        element: <><Hedar /><Link /></>,
        children: [
            {
                path: "hooks/*",
                element: <><Suspense fallback={<div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>}>
                    <Hooks />
                </Suspense>,</>
            },
            {
                path: "API/*",
                element: <><Suspense fallback={<div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>}>
                    <API />
                </Suspense>,</>
            }
        ]
    },
    {
        path: "/login",
        element: <><Hedar /><Login /></>,
    },
]);
export default router;