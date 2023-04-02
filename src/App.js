import "./App.css";
import Home from "./screens/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Blog from "./screens/Blog";

function App() {
  return (
    <BrowserRouter basename="/">
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/blog" Component={Blog} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
