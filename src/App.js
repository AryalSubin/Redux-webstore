import Header from "./containers/Header";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";
import ProductListing from "./containers/ProductListing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" exact element={<ProductListing />} />
          <Route
            path="/product/:productId"
            exact
            element={<ProductDetails />}
          />
          <Route>404 not found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
