import Blog from "../../Blog/Blog";
import Main from "../../Layout/Main";
import NotFoundPage from "../../NotFoundPage/NotFoundPage";
import AllPosts from "../../Pages/AllPosts/AllPosts";
import AllUsers from "../../Pages/AllUser/AllUser";
import Category from "../../Pages/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import SalePost from "../../Pages/Home/SalePost/SalePost";
import Login from "../../Pages/Login/Login";
import MyPosts from "../../Pages/SellerPost/MyPosts/MyPosts";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/blog',
                element:<Blog></Blog>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/signup',
                element:<SignUp></SignUp>
            },
            {
                path: '/sellpost',
                element:<SalePost></SalePost>
            },
            {
                path: '/category/:id',
                element:<Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
                
            },
            {
                path: '/admin/allusers',
                element: <PrivateRoute><AdminRoute><AllUsers></AllUsers></AdminRoute></PrivateRoute>

            },
            {
                path: '/admin/allposts',
                element: <PrivateRoute><AdminRoute><AllPosts></AllPosts></AdminRoute></PrivateRoute>

            },
            
            {
                path:'/myposts',
                element:<PrivateRoute><SellerRoute><MyPosts></MyPosts></SellerRoute></PrivateRoute>
            },
            
        ]
    },
    
    {
        path: '*',
        element: <NotFoundPage></NotFoundPage>
    }
])
export default router;