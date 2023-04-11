import "./App.css";
import Home from "./screens/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Blog from "./screens/Blog";
import About from "./screens/About";

function App() {
  return (
    <BrowserRouter basename="/">
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/blog" Component={Blog} />
            <Route exact path="/about" Component={About} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
