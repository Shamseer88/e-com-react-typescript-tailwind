import { Navigate, Route, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import Home from "../pages/Home";
import ProductsPage from "../pages/ProductsPage";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import Wishlist from "../pages/Wishlist";
import Cart from "../pages/Cart";
import Product from "../pages/Product";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        }
      />
      <Route
        path="/products/:gender"
        element={
          <DefaultLayout>
            <ProductsPage />
          </DefaultLayout>
        }
      />
      <Route
        path="/login"
        element={
          <DefaultLayout>
            <Login />
          </DefaultLayout>
        }
      />
      <Route
        path="/register"
        element={
          <DefaultLayout>
            <Register />
          </DefaultLayout>
        }
      />
      <Route
        path="/forgot-password"
        element={
          <DefaultLayout>
            <ForgotPassword />
          </DefaultLayout>
        }
      />
      <Route
        path="/wishlist"
        element={
          <DefaultLayout>
            <Wishlist />
          </DefaultLayout>
        }
      />
      <Route
        path="/cart"
        element={
          <DefaultLayout>
            <Cart />
          </DefaultLayout>
        }
      />
      <Route
        path="/product/:id"
        element={
          <DefaultLayout>
            <Product />
          </DefaultLayout>
        }
      />
      <Route
        path="/category/:gender/:categoryId"
        element={
          <DefaultLayout>
            <ProductsPage />
          </DefaultLayout>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
