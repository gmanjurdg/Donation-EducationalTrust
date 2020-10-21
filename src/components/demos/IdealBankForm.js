import React, { useMemo, useState } from "react";
import {
  useStripe,
  useElements,
  IdealBankElement
} from "@stripe/react-stripe-js";

// import useResponsiveFontSize from "../../useResponsiveFontSize";

const useOptions = () => {
  // const fontSize = useResponsiveFontSize();
  const options = useMemo(
    () => ({
      style: {
        base: {
          // fontSize,
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          },
          padding: "10px 14px"
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
    // [fontSize]
  );

  return options;
};

const IdealBankForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "ideal",
      ideal: elements.getElement(IdealBankElement),
      billing_details: {
        name: event.target.name.value
      }
    });
    console.log("[PaymentMethod]", payload);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input name="name" type="text" placeholder="Jane Doe" value="DEMO NAME" required />
      </label><br/>
      <label>
        Account Number
        <input name="name" type="text" placeholder="Jane Doe" value="1234567890" required />
      </label><br/>
      <label>
        IFSC
        <input name="name" type="text" placeholder="Jane Doe" value="DEMO12345" required />
      </label><br/>
      <button type="submit" disabled={!stripe} className="button">
        Pay
      </button>
    </form>
  );
};

export default IdealBankForm;
