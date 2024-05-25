import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";

import "./App.css"; // Styling
import ProductsPage from "./components/pages/ProductsPage";
import TutorialPage from "./components/pages/TutorialPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/yt-tutorial" element={<TutorialPage /> } />
      </Routes>
    </Router>
  );
}

export default App;
