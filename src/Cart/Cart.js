import React from 'react';

const Cart = (props) => {

    const cart = props.cart;
    
    

    let totalbudget = 0;

    for (let i = 0; i < cart.length; i++) {
        const newCart = cart[i];
        totalbudget = totalbudget + newCart.salary;

        
    }

    return (
        <div>

            
            <h1>Total Spent : {totalbudget} </h1>
        </div>
    );
};

export default Cart;