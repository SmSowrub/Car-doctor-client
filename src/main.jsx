import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./component/Pages/Home/Home/Home";
import Main from "./Layout/Main";
import Login from "./component/Pages/Login/Login";
import AuthProviders from "./Providers/AuthProviders";
import SignUp from "./component/Pages/Login/SignUp";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path:'/signUp',
        element:<SignUp></SignUp>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <div className="max-w-7xl mx-auto">
        <RouterProvider router={router} />
      </div>
    </AuthProviders>
  </React.StrictMode>
);