import "./App.css";
import Home from "./screens/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Blog from "./screens/Blog";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Signin from "./screens/Signin";
import BlogDetails from "./screens/BlogDetails";

function App() {
  return (
    <BrowserRouter basename="/">
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/blogs" Component={Blog} />
            <Route exact path='/blogs/:id/details' Component={BlogDetails} />
            <Route exact path="/about" Component={About} />
            <Route exact path='/contact' Component={Contact}  />
            <Route exact path="/signin" Component={Signin} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
