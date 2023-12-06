import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const Admin = lazy(() => import("../pages/Admin"));
const Cart = lazy(() => import("../pages/Cart"));
const FinalizationOrder = lazy(() => import("../pages/FinalizationOrder"));
const Payment = lazy(() => import("../pages/Payment"));
const Layout = lazy(() => import("../layouts/Layout"));
const AdministrationPanel = lazy(() => import("../pages/AdministrationPanel"));

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>
            <Link to="/">Home</Link>
            <NavLink to="/admin">Admin</NavLink>
            <NavLink to="/cart">Cart</NavLink>
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
              path="admin/AdministrationPanel"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <AdministrationPanel />
                </Suspense>
              }
            />
          </Route>
          
        </Routes>
      </main>
    </BrowserRouter>
  );
}
