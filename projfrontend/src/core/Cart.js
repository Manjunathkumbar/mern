import React, {useState, useEffect} from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";
import { loadCart } from "./helper/CartHelper";
import Home from "./Home";
import Paymentb from "./Paymentb";


const Cart=()=>{
    
const [products, setProducts]=useState([]);
const [reload, setReload]=useState(false);



useEffect(() =>{
    setProducts(loadCart());
}, [reload]);

const loadAllProducts = products => {
    return (
      <div>
        <h2>This section is to load products</h2>
        {products.map((product, index) => (
          <Card
            key={index}
            product={product}
            removeFromCart={true}
            addtoCart={false}
            setReload={setReload}
            reload={reload}
          />
        ))}
      </div>
    );
  };

const loadCheckout =() =>{
    return(
        <div>
            <h2>This Section is to Load  Checkout</h2>
        </div>
    )
}



    return(
        <Base title="Cart Page" description="Ready to Check-out">
            <div className="row text-center">
    <div className="col-6">{products.length > 0 ? loadAllProducts(products) : (<h4>NO products in Cart</h4>
    )}
    </div>
    <div className="col-6">
      <h3>checkout your purchses from here</h3>
      <Paymentb products={products} setReload={setReload}/>

    </div>         
        </div>
        </Base>
    );
}


export default Cart;