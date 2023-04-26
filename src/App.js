import "./App.css";
import Home from "./screens/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Blogs from "./screens/Blogs";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Signin from "./screens/Signin";
import BlogDetails from "./screens/BlogDetails";
import Shop from "./screens/Shop";
import BookDetails from "./screens/BookDetails";
import Signup from "./screens/Signup";
import Authors from "./screens/Authors";
import AuthorProfile from "./screens/AuthorProfile";

function App() {
  return (
    <BrowserRouter basename="/">
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/shop" Component={Shop} />
            <Route exact path="/shop/new-arrivals" Component={Shop} />
            <Route exact path="/shop/popular" Component={Shop} />
            <Route exact path="/shop/sale" Component={Shop} />
            <Route exact path='/book/:id/details' Component={BookDetails} />
            <Route exact path="/blogs" Component={Blogs} />
            <Route exact path='/blogs/:id/details' Component={BlogDetails} />
            <Route exact path='/authors' Component={Authors} />
            <Route exact path='/authors/:id/profile' Component={AuthorProfile} />
            <Route exact path="/signin" Component={Signin} />
            <Route exact path="/signup" Component={Signup} />
            <Route exact path="/about" Component={About} />
            <Route exact path='/contact' Component={Contact}  />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
