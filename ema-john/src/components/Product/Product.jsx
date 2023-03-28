import React from "react";
import "./Product.css";

const Product = (props) => {
  const { id, name, seller, ratings, price, stock, img } = props.product;
  const handleButton=props.handleButton;
//   const handleButton=(product)=>{
//     console.log("Product added",product)
//   }
  return (
    <div className="product">
      <img src={img} alt="" />
      <div>
        <h5>{name}</h5>
        <p>Price: ${price}</p>
        <br />
        <br />
        <span>Manufacturer : {seller}</span>
        <p>Rating : {ratings}</p>
      </div>

      <button onClick={()=>handleButton(props.product)} className="btn-add">Add To Cart</button>
    </div>
  );
};

export default Product;
