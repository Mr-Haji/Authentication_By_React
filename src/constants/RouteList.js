import Home from '../Screens/Home/Home'
import About from '../Screens/About/About'
import Products from '../Screens/Product Data/Products'
import LogIn from '../Screens/Log In/LogIn';
import SignUp from '../Screens/Sign Up/SignUp';

export const RouteList = [{
    path: "/home",
    element: <Home />
}, {
    path: "/about",
    element: <About />
}, {
    path: "/products",
    element: <Products />
}, {
    path: "/products/:id",
    element: <Products />
}, {
    path: "/login",
    element: <LogIn />
}, {
    path: "/",
    element: <SignUp />
}];
