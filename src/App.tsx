import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";

import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Partner } from "./pages/Partner";
import { Episodes } from "./pages/Episodes";
import { Contact } from "./pages/Contact";

export function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#14161A] text-[#E8E6E1] antialiased">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/episodes" element={<Episodes />} />
            <Route path="/contact" element={<Contact />} />
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
