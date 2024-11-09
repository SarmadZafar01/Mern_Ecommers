import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/policy";
import PagenotFound from "./pages/PagenotFound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Dashbord from "./pages/Dashbord";
import PrivateRoute from "./Routes/Private";
import ForgotPasssword from "./pages/Auth/ForgotPassword";
import AdminDashboard from "./pages/Admin/AdminDashbord";
import AdminRoute from "./Routes/adminRoutes";
import CreateCategory from "./pages/Admin/AdminCategory";
import CreateProduct from "./pages/Admin/adminCreateProduct";
import Users from "./pages/Admin/AdminUsers";
import Dashboard from "./pages/Dashbord";
import Profile from "./pages/users/Profile";
import Products from "./pages/Admin/Product";
import UpdateProduct from "./pages/Admin/UpdateProduct";
import Search from "./pages/Search";
import ProductDetails from "./pages/productDetail";
import CartPage from "./pages/cartPage";
import Orders from "./pages/users/Order";
import AdminOrders from "./pages/Admin/Adminorder";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/users" element={<Users />} />
          <Route path="admin/orders" element={<AdminOrders />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPasssword />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<PagenotFound />} />
      </Routes>
    </>
  );
}

export default App;
