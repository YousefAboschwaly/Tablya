import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./myComponents/AppLayout";
import Features from "./pages/Features";
import Reviews from "./pages/Reviews";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
