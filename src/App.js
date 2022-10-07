import {React, useState} from "react";
import ProductList from "./Components/ProductList";
import { Route, Routes } from 'react-router-dom';
import Details from "./Components/Details";
import Filter from "./Components/Filter";
import './App.css';


function App() {
  const[filterByName,setFilterByName] = useState("");
  const[product,setProduct] = useState("");
  return (
    <div className="App">
<h1> PRODUCTS LIST :</h1>
<Filter   setFilterByName={setFilterByName}/>
<Routes>
        <Route path="/" element={<ProductList product={product} filterByName={filterByName}  />} />
        <Route path="/product/:id" element={<Details/>} />
      </Routes>

     
    </div>
  )
}

export default App;
