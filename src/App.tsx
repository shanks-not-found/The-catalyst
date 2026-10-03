import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Partner } from "./pages/Partner";
import { Episodes } from "./pages/Episodes";
import { Contact } from "./pages/Contact";
import { RegistrationHub } from "./pages/RegistrationHub";
import { ScrollProgress } from "./components/ScrollProgress";
import { PageLoader } from "./components/PageLoader";

export function App() {
  return (
    <Router>
      <PageLoader />
      <ScrollProgress />
      <div className="min-h-screen flex flex-col bg-white text-[#111827] antialiased w-full max-w-full overflow-x-hidden">
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

