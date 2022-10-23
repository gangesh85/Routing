import { Route, Routes } from "react-router-dom";
import { About } from "./Components/About";
import { Admin } from "./Components/Admin";
import { AuthProvider } from "./Components/auth";
import { FeaturedProducts } from "./Components/FeaturedProducts";
import { Home } from "./Components/Home";
import { Login } from "./Components/Login";
import { NavBar } from "./Components/NavBar";
import { NewProducts } from "./Components/NewProducts";
import { NoMatch } from "./Components/NoMatch";
import { OrderSummery } from "./Components/OrderSummery";
import { Products } from "./Components/Products";
import { Profile } from "./Components/Profile";
import { UserDetails } from "./Components/UserDetails";
import { Users } from "./Components/Users";

function App() {
  return (
    <AuthProvider>
    <div className="App">
      <NavBar className="primary-nav" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order-summery" element={<OrderSummery />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<Users />} />
        <Route path="users/:userId" element={<UserDetails />} />
        <Route path="users/admin" element={<Admin />} />
        <Route path="profile" element={<Profile />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
    </AuthProvider>
  );
}

export default App;
