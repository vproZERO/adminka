import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/main-layout";
import Add from "./pages/add/add";
import Home from "./pages/home/home";
import PageNotFound from "./pages/page-not-found/page-not-found";
import Profile from "./pages/profile/profile";
import Products from "./pages/products/products";
import Payments from "./pages/payments/payments";
import Login from "./pages/login/login";
import EditProduct from "./pages/add/components/edit-product";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="products" element={<Products />} />
          <Route path="payments" element={<Payments />} />

          <Route path="add" element={<Add />} />
          <Route path="add/edit/:id" element={<EditProduct />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
