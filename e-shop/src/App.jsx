import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import Wrapper from "./pages/Wrapper";
import ProductDescriptionPage from "./pages/ProductDescriptionPage";
import WrapperAdmin from "./adminPages/WrapperAdmin";
import Products from "./adminPages/Products";
import Orders from "./adminPages/Orders";
import Alerts from "./adminPages/Alerts";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Wrapper />}>
          <Route path="/shop" element={<ProductsPage />} />
          <Route path="/shop/:id" element={<ProductDescriptionPage />} />
        </Route>

        <Route path="/admin/dashboard" element={<WrapperAdmin />}>
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="alerts" element={<Alerts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
