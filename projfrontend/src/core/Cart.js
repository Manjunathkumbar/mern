import React, {useState, useEffect} from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";
import { loadCart } from "./helper/CartHelper";
import Home from "./Home";

const Cart=()=>{
    
const [products, setProducts]=useState([]);
const [error, setError]=useState(false);



useEffect(() =>{
    setProducts(loadCart)
}, [])

const loadAllproducts =() =>{

    return(
        <div>
            <h2>This Section is to Load cart products</h2>
            {products.map((product, index) =>(
                <Card
                key={index}
                product={product}
                removeFromCart={true}
                addtoCart={false}
                />
            ))}
        </div>
    )
}

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
    <div className="col-6">{loadAllproducts()}</div>
    <div className="col-6">{loadCheckout()}</div>
                
                    
                </div>
        </Base>
    );
}


export default Cart;