import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotal
} from "../../../redux/cart/cart.selectors";
import CheckoutItem from "../../checkout-item/checkout-item.component";
import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, Total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="checkout-block">
        <span>Product</span>
      </div>
      <div className="Header-block">
        <span>Description</span>
      </div>
      <div className="Header-block">
        <span>Quantity</span>
      </div>
      <div className="Header-block">
        <span>Price</span>
      </div>
      <div className="Header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={CheckoutItem.id} cartItem={cartItem} />
    ))}
    <div className="total">TOTAL : ${Total}</div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  Total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
