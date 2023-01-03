import { BrowserRouter, Routes, Route } from "react-router-dom";

// import components and pages
import Home from "./pages/Home";
import ManageProducts from './pages/ManageProducts';
import MobilePhones from './pages/MobilePhones';
import Laptops from './pages/Laptops';
import Televisions from './pages/Televisions';
import Others from './pages/Others';
import AddNewProduct from './pages/AddNewProduct';
import UpdateProducts from './pages/UpdateProducts';
import ProductMoreDetails from './pages/ProductMoreDetails';
import AllProducts from './pages/AllProducts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route
              path = "/"
              element = {<Home/>}
            />
            <Route
              path = "/admin"
              element = {<ManageProducts/>}
            />
            <Route
              path = "/addnewproduct"
              element = {<AddNewProduct/>}
            />
            <Route
              path = "/updateproduct/:id"
              element = {<UpdateProducts/>}
            />
            <Route
              path = "/allproducts"
              element = {<AllProducts/>}
            />
            <Route
              path = "/mobilephones"
              element = {<MobilePhones/>}
            />
            <Route
              path = "/laptops"
              element = {<Laptops/>}
            />
            <Route
              path = "/televisions"
              element = {<Televisions/>}
            />
            <Route
              path = "/others"
              element = {<Others/>}
            />
            <Route
              path = "/moredetails/:id"
              element = {<ProductMoreDetails/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
