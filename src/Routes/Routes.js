import React, { lazy, Suspense } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import NotFound from "../pages/PageNotFound";
// import OrdersTab from "../pages/Orders";

const Home = lazy(() => import("../pages/Home"));
const Admin = lazy(() => import("../pages/Admin"));
const Cart = lazy(() => import("../pages/Cart"));
const FinalizationOrder = lazy(() => import("../pages/FinalizationOrder"));
const Payment = lazy(() => import("../pages/Payment"));
const Layout = lazy(() => import("../layouts/Layout"));
const AdministrationPanel = lazy(() => import("../pages/AdministrationPanel"));
const PriceAndAvailability = lazy(() => import("../pages/Price&Availability"));
const OrdersTab = lazy(() => import("../pages/Orders"));
const AdminProducts = lazy(() => import("../pages/AdminProducts"));
export default function AppRoutes() {
  const navigate = useNavigate();

  // Function to handle the Admin button click and navigate to the Admin route
  const handleAdminClick = () => {
    navigate("/admin");
  };
  return (
    <>
      <header>
        <nav>
          <h1>
            <Link to="/">Home</Link>
            <button onClick={handleAdminClick}>Admin</button>
            <Link to="/cart">Cart</Link>
          </h1>
        </nav>
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Layout />
              </Suspense>
            }
          >
            <Route
              index
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="admin"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Admin />
                </Suspense>
              }
            />
            <Route
              path="cart"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Cart />
                </Suspense>
              }
            />
            <Route
              path="/cart/finalizationOrder/"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <FinalizationOrder />
                </Suspense>
              }
            />
            <Route
              path="/cart/finalizationOrder/payment"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Payment />
                </Suspense>
              }
            />
            <Route
              path="admin/administrationPanel"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <AdministrationPanel />
                </Suspense>
              }
            />
            <Route
              path="/admin/administrationPanel/adminHeader/ordersTab"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <OrdersTab />
                </Suspense>
              }
            />
            <Route
              path="/admin/administrationPanel/adminHeader/priceAndAvailability"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <PriceAndAvailability />
                </Suspense>
              }
            />
            <Route
              path="/admin/administrationPanel/adminHeader/AdminProducts"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <AdminProducts />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </main>
    </>
  );
}
