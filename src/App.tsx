import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Partner } from "./pages/Partner";
import { Episodes } from "./pages/Episodes";
import { Contact } from "./pages/Contact";
import { RegistrationHub } from "./pages/RegistrationHub";
import { useEffect } from "react";
import { ScrollProgress } from "./components/ScrollProgress";
import { PageLoader } from "./components/PageLoader";
import { AmbientParticles } from "./components/AmbientParticles";

function RouteScrollManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset scroll position instantly on page change so opening animation starts at top
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  useEffect(() => {
    // Smooth, cinematic scroll for in-page anchors without global scroll conflicts
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!target) return;
      const href = target.getAttribute("href");
      if (!href || href === "#") return;
      const targetEl = document.querySelector(href);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(null, "", href);
      }
    };
    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return null;
}

export function App() {
  return (
    <Router>
      <RouteScrollManager />
      <PageLoader />
      <AmbientParticles />
      <ScrollProgress />
      <div className="min-h-screen flex flex-col bg-white text-[#111827] antialiased w-full max-w-full overflow-x-hidden relative">
        <Header />
        <main className="flex-grow w-full max-w-full overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/episodes" element={<Episodes />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<RegistrationHub />} />
            <Route path="/register/guest" element={<Navigate to="/register" replace />} />
            <Route path="/register/founder" element={<Navigate to="/register" replace />} />
            <Route path="/register/partner" element={<Navigate to="/register" replace />} />
            {/* Catch-all fallback */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

