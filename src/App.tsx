import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import FindRealEstate from "./pages/FindRealEstate";
import AboutUs from "./pages/AboutUs";
import OurServices from "./pages/OurServices";
import Contact from "./pages/Contact";
import { PropertyEvaluation } from "./pages/PropertyEvaluation";

// Import your city landing pages
import Opladen from "./pages/Opladen";
import Leichlingen from "./pages/Leichlingen";
import Leverkusen from "./pages/Leverkusen";
import Odenthal from "./pages/Odenthal";
import Wermelskirchen from "./pages/Wermelskirchen";
import Burscheid from "./pages/Burscheid";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/find-real-estate" element={<FindRealEstate />} />
            <Route path="/property-evaluation" element={<PropertyEvaluation />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-services" element={<OurServices />} />
            <Route path="/contact" element={<Contact />} />

            {/* City landing pages */}
            <Route path="/opladen" element={<Opladen />} />
            <Route path="/leichlingen" element={<Leichlingen />} />
            <Route path="/leverkusen" element={<Leverkusen />} />
            <Route path="/odenthal" element={<Odenthal />} />
            <Route path="/wermelskirchen" element={<Wermelskirchen />} />
            <Route path="/burscheid" element={<Burscheid />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
