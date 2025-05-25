
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LendAHand from "./pages/LendAHand";
import PartnerWithUs from "./pages/PartnerWithUs";
import Donate from "./pages/Donate";
import PaymentSuccess from "./pages/PaymentSuccess";
import Volunteer from "./pages/Volunteer";
import JigawaProject from "./pages/JigawaProject";
import GirlsProject from "./pages/GirlsProject";
import EconomicEmpowerment from "./pages/EconomicEmpowerment";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/lend-a-hand" element={<LendAHand />} />
          <Route path="/partner-with-us" element={<PartnerWithUs />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/jigawa-project" element={<JigawaProject />} />
          <Route path="/girls-project" element={<GirlsProject />} />
          <Route path="/economic-empowerment" element={<EconomicEmpowerment />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
