import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    const totalPrice = cart.reduce((total, subject) => total + subject.courseFee, 0);
    return (
        <div>
            <h4>Course Summery</h4>
            <p> Items Course: {cart.length}</p>
                <p>Total Price:${totalPrice}</p>
        </div>
    );
};

export default Cart;