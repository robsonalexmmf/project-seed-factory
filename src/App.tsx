import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Subscription from "./pages/Subscription";
import Checkout from "./pages/Checkout";
import NewAdmin from "./pages/NewAdmin";
import CreateAdmin from "./pages/CreateAdmin";
import NotFound from "./pages/NotFound";
import CRMMain from "./pages/CRMMain";
import DeliveryDashboard from "./pages/DeliveryDashboard";
import DeliveryRestaurants from "./pages/DeliveryRestaurants";
import DeliveryProducts from "./pages/DeliveryProducts";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/generator" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/admin" element={<NewAdmin />} />
          <Route path="/create-admin" element={<CreateAdmin />} />
          <Route path="/crm" element={<CRMMain />} />
          <Route path="/delivery" element={<DeliveryDashboard />} />
          <Route path="/delivery/restaurants" element={<DeliveryRestaurants />} />
          <Route path="/delivery/products" element={<DeliveryProducts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
