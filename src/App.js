import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Cloths from "./components/Cloths/Cloths";
// import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { allProducts } from "./featureimg";
import { addToDb, getStoredCart } from "./utilities/fakedb";

const App = () => {
  // product filtering states and function passing from here (parent) to Cloths & Header components (child)
  const [data, setData] = useState(allProducts);
  const filterResult = (catItem) => {
    const result = allProducts.filter((curData) => {
      return curData.category === catItem;
    });
    setData(result);
  };

  // Add to cart
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  const handleAddToCart = (selectedProduct) => {
    let newCart=[];
    const exists = cart.find(product=>product.id===selectedProduct.id);
    if(!exists){
      selectedProduct.quantity=1;
      newCart=[...cart, selectedProduct];
    }
    else{
      const rest = cart.filter(product => product.id !== selectedProduct.id);
      exists.quantity=exists.quantity+1;
      newCart=[...rest, exists];
    }

    setCart(newCart);
    addToDb(selectedProduct.id);
  };

  return (
    <div>
      <Header filterResult={filterResult} cart={cart}></Header>
      <Routes>
        <Route
          path="/"
          element={<Home handleAddToCart={handleAddToCart} products={products} />}
        ></Route>
        <Route
          path="/cloths"
          element={<Cloths handleAddToCart={handleAddToCart} filterResult={filterResult} data={data} />}
        ></Route>
       </Routes>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default App;
