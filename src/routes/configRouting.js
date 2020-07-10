import Home from "../pages/HomePage";
import Albums from "../pages/CollectionPage";
import Blog from "../pages/BlogPage";
import BlogPost from "../pages/BlogPostPage";


export const routes =  [
{
    path:"/",
    exact:true,
    page: Home
},
{
    path:"/coleccion",
    exact:true,
    page: Albums
},
{
    path:"/blog",
    exact:true,
    page: Blog 
},
{
    path: "/blog/:postName",
    exact: true,
    page: BlogPost

}]