import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
//pages
import Home from "../pages/Home";
import Admin from "../pages/Admin";
import Cart from "../pages/Cart";
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>
            Jobarouter
            <Link to="/">Home</Link>
            <NavLink to="Admin">Admin</NavLink>
            <NavLink to="Cart">Cart</NavLink>
          </h1>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Admin" element={<Admin />} />
          <Route path="Cart" element={<Cart/>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
