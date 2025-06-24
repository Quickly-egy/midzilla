import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import MainLayout from "../components/layouts/MainLayout";
import Products from "../pages/products/AllProducts/Products";
import SingleProduct from "../pages/products/SingleProduct/SingleProduct";
import StarsSystem from "../pages/starsSystem/StarsSystem";
import Offers from "../pages/offers/Offers";
import Cart from "../pages/cart/Cart";
import ContactUs from "../pages/contactUs/ContactUs";
import Faq from "../pages/faq/Faq";
import About from '../pages/about/About';
import ShippingPolicy from '../pages/shippingPolicy/ShippingPolicy';
import Payment from "../pages/payment/Payment";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "product/:id",
        element: <SingleProduct />,
      },
      {
        path: "stars-system",
        element: <StarsSystem />,
      },
      {
        path: "offers",
        element: <Offers />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "faq",
        element: <Faq />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/shipping-policy",
        element: <ShippingPolicy />,
      }, {
        path: "/payment",
        element: <Payment />,
      }
    ],
  },
]);
export default routes;
