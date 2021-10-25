import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { handleToken } from "../store/actions/authActions";

function Payments() {
  const dispatch = useDispatch();
  return (
    <StripeCheckout
      name="Feedback System"
      description="Rs.50 for 5 email credits"
      currency="inr"
      amount={5000}
      token={(token) => dispatch(handleToken(token))}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    >
      <Button variant="secondary" size="sm">
        Add Credits
      </Button>
    </StripeCheckout>
  );
}

export default Payments;
