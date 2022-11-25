import Blog from "../../Blog/Blog";
import Main from "../../Layout/Main";
import Category from "../../Pages/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import SalePost from "../../Pages/Home/SalePost/SalePost";
import Login from "../../Pages/Login/Login";
import PostCard from "../../Pages/PostCard/PostCard";
import SignUp from "../../Pages/SignUp/SignUp";

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
                path: '/sellpost/:id',
                element:<PostCard></PostCard>,
                loader: ({ params }) => fetch(`http://localhost:5000/sellpost/${params.id}`)
                
            }
        ]
    }
])
export default router;