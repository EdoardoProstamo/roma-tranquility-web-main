import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Servizi from "./pages/Servizi";
import Contatti from "./pages/Contatti";
import Privacy from "./pages/Privacy";
import Cookie from "./pages/Cookie";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function ScrollToTopOnNav() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTopOnNav />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servizi" element={<Servizi />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookie" element={<Cookie />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
