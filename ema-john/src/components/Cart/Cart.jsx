import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart=props.cart;

    let total=0;
    let totalShipping=0;
    let quantity=0;
    
    for(const product of cart){
        product.quantity=product.quantity || 1;
        total=total+product.price*product.quantity;
        totalShipping=totalShipping+product.shipping;
        quantity=quantity+product.quantity;
    }
    const tax=total*7/100;
    const grandTotal=total+totalShipping+tax;
    return (
        <div className='cart'>
            <h1>Order Summary</h1>
            <p>Selected Items :{quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax :${tax}</p>
            <p>Grandtotal: ${grandTotal}</p>
        </div>
    );
};

export default Cart;