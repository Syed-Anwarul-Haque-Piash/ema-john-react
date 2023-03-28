import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products,setProducts]=useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch("products.json")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    useEffect(()=>{
        const storedCart=getShoppingCart();
        const addedCart=[];
        //console.log(storedCart)
        for(const id in storedCart){
            const savedProduct=products.find(product=>product.id===id)
            if(savedProduct){
                const quantity=storedCart[id];
                savedProduct.quantity=quantity;
                addedCart.push(savedProduct)
            }
            console.log(savedProduct)
            
            setCart(addedCart)//console.log(savedProduct)
        }
    },[products])
    const handleButton=(product)=>{
        //console.log("Product added",product)
        const newCart=[...cart,product];
        setCart(newCart);
        addToDb(product.id)
      }
    return (
        <div className='shop-container'>
            <div className='product-container'>
              {products.map(product =><Product product={product} handleButton={handleButton} key={product.id}></Product>)}
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;