import Blog from "../../Blog/Blog";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import NotFoundPage from "../../NotFoundPage/NotFoundPage";
import AllBuyer from "../../Pages/AllBuyer/AllBuyer";
import AllPosts from "../../Pages/AllPosts/AllPosts";
import AllSeller from "../../Pages/AllSeller/AllSeller";
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
                path: '/category/:id',
                element:<Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
                
            },
            
            
            
            
            
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute> ,
        children: [
            {
                path: '/dashboard/myposts',
                element: <SellerRoute><MyPosts></MyPosts></SellerRoute>
            },
            {
                path: '/dashboard/sellpost',
                element: <SellerRoute><SalePost></SalePost></SellerRoute>
            },
            {
                path: '/dashboard/allposts',
                element: <AdminRoute><AllPosts></AllPosts></AdminRoute>

            },
            {
                path: '/dashboard/allseller',
                element: <AdminRoute><AllSeller></AllSeller></AdminRoute>

            },
            {
                path: '/dashboard/allbuyer',
                element: <AdminRoute><AllBuyer></AllBuyer></AdminRoute>

            },
        ]
        
    },
    {
        path: '*',
        element: <NotFoundPage></NotFoundPage>
    }
])
export default router;