import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_15PgvUal6CHi1iceGZqPOhxX00zQfBuJb8";

  const onTokenHandler = token => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      Name="CRWN Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      amount={priceForStripe}
      description={`Your total is $${price}`}
      panelLabel="Pay Now"
      token={onTokenHandler}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
