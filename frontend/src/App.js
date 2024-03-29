import "./App.css";
import Home from "./screens/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Cart from "./screens/Cart";
import Checkout from "./screens/Checkout";
import Favorite from "./screens/Favorite";

import axios from "axios";
import UserProfile from "./screens/UserProfile";
import Payment from "./screens/Payment";
import PlaceOrder from "./screens/PlaceOrder";
import OrderDetails from "./screens/OrderDetails";
import UserOrders from "./screens/UserOrders";
import Dashboard from "./screens/admin/Dashboard";
import Customers from "./screens/admin/Customers";
import Users from "./screens/admin/Users";
import Books from "./screens/admin/Books";
import Orders from "./screens/admin/Orders";
import AuthorList from "./screens/admin/AuthorList";
import BlogList from "./screens/admin/BlogList";
import AddEditAuthor from "./screens/admin/AddEditAuthor";
import AddEditUser from "./screens/admin/AddEditUser";
import AddEditBook from "./screens/admin/AddEditBook";
import Reviews from "./screens/admin/Reviews";
import CreateEditBlog from "./screens/CreateEditBlog";
import Messages from "./screens/admin/Messages";

axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter basename="/">
      <div className="App" style={{ backgroundColor: "#F5F5F5" }}>
        <main style={{ minHeight: "75vh" }}>
          <Routes>
            <Route exact path="/" Component={Home} />

            <Route exact path="/shop/?" Component={Shop} />
            <Route exact path="/shop/new-arrivals" Component={Shop} />
            <Route exact path="/shop/popular" Component={Shop} />
            <Route exact path="/shop/sale" Component={Shop} />
            <Route exact path="/book/:id/details" Component={BookDetails} />

            <Route exact path="/blogs" Component={Blogs} />
            <Route exact path="/blog/create" Component={CreateEditBlog} />
            <Route exact path="/blog/:id/edit" Component={CreateEditBlog} />
            <Route exact path="/blog/:id/details" Component={BlogDetails} />

            <Route exact path="/authors" Component={Authors} />
            <Route exact path="/author/:id/profile" Component={AuthorProfile} />

            <Route exact path="/signin" Component={Signin} />
            <Route exact path="/signup" Component={Signup} />

            <Route exact path="/favorite/:id?" Component={Favorite} />
            <Route exact path="/cart/:id?" Component={Cart} />
            <Route exact path="/checkout" Component={Checkout} />
            <Route exact path="/payment" Component={Payment} />
            <Route exact path="/place_order" Component={PlaceOrder} />

            <Route exact path="/myorders" Component={UserOrders} />
            <Route exact path="/order/:id" Component={OrderDetails} />

            <Route exact path="/profile" Component={UserProfile} />

            <Route exact path="/about" Component={About} />
            <Route exact path="/contact" Component={Contact} />

            {/* ......................Admin Routes......................... */}
            <Route exact path="/admin/dashboard" Component={Dashboard} />
            <Route exact path="/admin/orders" Component={Orders} />
            <Route exact path="/admin/customers" Component={Customers} />
            <Route exact path="/admin/blogs" Component={BlogList} />
            <Route exact path="/admin/reviews" Component={Reviews} />
            <Route exact path="/admin/messages" Component={Messages} />

            <Route exact path="/admin/users" Component={Users} />
            <Route exact path="/admin/add_user" Component={AddEditUser} />
            <Route exact path="/admin/user/:id/edit" Component={AddEditUser} />

            <Route exact path="/admin/books" Component={Books} />
            <Route exact path="/admin/add_book" Component={AddEditBook} />
            <Route exact path="/admin/book/:id/edit" Component={AddEditBook} />

            <Route exact path="/admin/authors" Component={AuthorList} />
            <Route exact path="/admin/add_author" Component={AddEditAuthor} />
            <Route
              exact
              path="/admin/author/:id/edit"
              Component={AddEditAuthor}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
