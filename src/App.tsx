import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ProductsPage from "./pages/ProductsPage";
import UserPage from "./pages/UserPage";
import SettingsPage from "./pages/SettingsPage";
import DashPage from "./pages/DashPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import { useState } from "react";
import NotFoundPage from "./pages/NotFoundPage";
import ProductCreatePage from "./pages/ProductCreatePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  return (
    <>
      <Header onSearchChange={handleSearchChange} />
      <Sidebar />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route
            path="/"
            element={<ProductsPage searchValue={searchValue} />}
          />
          <Route path="/:productId" element={<ProductDetailPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/dashboard" element={<DashPage />} />
          <Route path="/create" element={<ProductCreatePage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
