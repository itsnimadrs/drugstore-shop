import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// import OrdersTab from "../pages/Orders";
import PrivateRoute from "../pages/privateRoute";

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
const ProductDetails = lazy(() => import("../utils/ProductDetails"));
const Success = lazy(() => import("../pages/success"));
const Notsuccess = lazy(() => import("../pages/Notsuccess"));
export default function AppRoutes() {
  // const navigate = useNavigate();

  // // Function to handle the Admin button click and navigate to the Admin route
  // const handleAdminClick = () => {
  //   navigate("/admin");
  // };
  return (
    <>
      {/* <header>
        <nav>
          <h1>
            <Link to="/">Home</Link>
            <button onClick={handleAdminClick}>Admin</button>
            <Link to="/cart">Cart</Link>
          </h1>
        </nav>
      </header> */}
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
              path="/"
              exact
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="admin"
              element={
                <PrivateRoute>
                  <Suspense fallback={<div>Loading...</div>}>
                    <Admin />
                  </Suspense>
                </PrivateRoute>
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
              path="/cart/finalizationOrder/payment/success"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Success />
                </Suspense>
              }
            />
            <Route
              path="/cart/finalizationOrder/payment/Notsuccess"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Notsuccess />
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
            <Route
              path="ProductDetails"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <ProductDetails />
                </Suspense>
              }
            />
          </Route>
          {/* <Route path={HOME_ROUTE} element={Home}></Route> */}
        </Routes>
      </main>
    </>
  );
}
