import React from "react";
import ReactDOM from "react-dom";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { BrowserRouter } from "react-router-dom";
import ElementDemos from "./components/ElementDemos";
import CardForm from "./components/demos/CardForm";
import FpxBankForm from "./components/demos/FpxBankForm";
import IbanForm from "./components/demos/IbanForm";
import IdealBankForm from "./components/demos/IdealBankForm";
import PaymentRequestForm from "./components/demos/PaymentRequestForm";
import SplitForm from "./components/demos/SplitForm";
import "./styles.css";

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

const demos = [
  
  {
    path: "/fpx-bank-element",
    label: "Net Banking",
    component: FpxBankForm
  },
  {
    path: "/card-element",
    label: "Debit Card",
    component: CardForm
  },
  {
    path: "/split-card-elements",
    label: "Credit Card",
    component: SplitForm
  },
  {
    path: "/ideal-bank-element",
    label: "NEFT/RTGS",
    component: IdealBankForm
  }
];

const App = () => {
  return (
    <BrowserRouter>
      <Elements stripe={stripePromise}>
        <ElementDemos demos={demos} />
      </Elements>
    </BrowserRouter>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
