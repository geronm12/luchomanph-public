import Home from "../pages/HomePage";
import Albums from "../pages/CollectionPage";
import Blog from "../pages/BlogPage";
import BlogPost from "../pages/BlogPostPage";
import Contact from "../pages/ContacPage";
import About from "../pages/AboutPage";


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
    path: "/blog/:postTitle",
    exact: true,
    page: BlogPost

},
{
    path: "/contacto",
    exact: true,
    page: Contact

},
{
    path: "/about",
    exact: true,
    page: About

}]