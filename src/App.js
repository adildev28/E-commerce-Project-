import React from "react";
import { Navbar } from "./E-commerce/front-end/components/Navbar";
import Shop from "./E-commerce/front-end/pages/Shop";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import ShopCategory from "./E-commerce/front-end/pages/ShopCategory";
import Product from "./E-commerce/front-end/pages/Product";
import Cart from "./E-commerce/front-end/pages/Cart";
import LoginSignUp from "./E-commerce/front-end/pages/LoginSignUp";
import Footer from "./E-commerce/front-end/components/Footer/Footer";
import banner_mens from './E-commerce/front-end/components/Assets/banner_mens.png';
import banner_women from './E-commerce/front-end/components/Assets/banner_women.png';
import banner_kids from './E-commerce/front-end/components/Assets/banner_kids.png';





const App=()=> {
    return (
        <div>
            <Router>
                 <Navbar />
                <Routes>
                    <Route path="/"element={<Shop/>} />
                    <Route path="/mens"element={<ShopCategory banner={banner_mens} category="men"/>} />
                    <Route path="/womens"element={<ShopCategory banner={banner_women}category="women"/>} />
                    <Route path="/kids"element={<ShopCategory banner={banner_kids} category="kid"/>} />

                    <Route path="/product"element={<Product/>} >
                        <Route  path=":productId" element={<Product/>}/>
                        
                    </Route>
                    <Route path="/cart"element={<Cart/>} />
                    <Route path="/login"element={<LoginSignUp/>} />

                </Routes>
                  <Footer/>


{/* 
                  <Routes>
                    <Route path="/" element={<Catalogue/>}/>
                    <Route path="/admin"element={ <Main/> }/>
                    <Route path="/edit" element={<Edit/>}/>
                  </Routes> */}

            </Router>

        </div>
       
        
   
           );
};

export default App;
