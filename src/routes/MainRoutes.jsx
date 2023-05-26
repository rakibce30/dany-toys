import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Mytoys from "../pages/Mytoys/Mytoys";
import AddToys from "../pages/AddToys/AddToys";
import AllToys from "../pages/AllToys/AllToys";
import MytoysEdit from "../pages/Mytoys/MytoysEdit";
import Blog from "../pages/Blog/Blog";
import SingleToy from "../pages/SingleToy/SingleToy";
import Error from "../pages/Error/Error";

const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <Error></Error>,
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/all-toys",
          element: <AllToys></AllToys>
        },
        {
          path: "/mytoys",
          element: <PrivateRoute><Mytoys></Mytoys></PrivateRoute>
        },
        {
          path: "/addtoys",
          element: <PrivateRoute><AddToys></AddToys></PrivateRoute>
        },
        {
          path: "/my-toys/edit/:id",
          element: <PrivateRoute><MytoysEdit></MytoysEdit></PrivateRoute>

        },
        {
          path: "/blog",
          element: <Blog></Blog>
        },
        {
          path: "/toy/:id",
          element: <PrivateRoute><SingleToy></SingleToy></PrivateRoute>
        }
      ]
    },
  ]);

  export default router;