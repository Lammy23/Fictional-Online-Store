import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import NotFoundPage from "./components/pages/NotFoundPage";
import ProductsPage from "./components/pages/ProductsPage";
import BlogPage from "./components/pages/BlogPage";

import "./App.css"; // Styling

function App() {
  return (
    <Router>
      <div className="app-background">
        <div className="app-foreground">
          <div className="app-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/phones" element={<ProductsPage type={"phone"} />} />
              <Route
                path="/laptops"
                element={<ProductsPage type={"laptop"} />}
              />
              <Route
                path="/consoles"
                element={<ProductsPage type={"console"} />}
              />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
