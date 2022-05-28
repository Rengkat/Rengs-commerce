import React, { useContext, useEffect, useState } from "react";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from "@material-ui/core";
import Confirmation from "./Confirmation";
import PaymentForm from "./PaymentForm";
import AddressForm from "./AddressForm";
import { commerce } from "../../lib/commerce";
import { AppContex } from "../../../Context/Context";

const steps = ["Shipping address", "Payment"];
function CheckoutMain() {
  const [activeStep, setActiveStep] = useState(0);
  const { cart } = useContext(AppContex);
  const [checkoutToken, setCheckoutToken] = useState("");
  const [shippinData, setShippingData] = useState({});

  useEffect(() => {
    const generateToken = async () => {
      try {
        // the generating token takes two paras 1, cart id and type
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });
        setCheckoutToken(token);
        // console.log(token);
      } catch (error) {}
    };
    generateToken();
  }, [cart]);
  const nextStep = () => setActiveStep((prev) => prev + 1);
  const backStep = () => setActiveStep((prev) => prev - 1);

  const next = (data) => {
    setShippingData(data);
    nextStep();
  };
  const Form = () =>
    activeStep === 0 ? (
      <AddressForm
        checkoutToken={checkoutToken}
        next={next}
        backStep={backStep}
      />
    ) : (
      <PaymentForm
        backStep={backStep}
        shippinData={shippinData}
        checkoutToken={checkoutToken}
      />
    );

  return (
    <div className="pt-10">
      <main className="class.layout">
        <Paper className="class.paper w-[90%] lg:w-[50%]  text-center mx-auto md:text-left p-5">
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className="class.stepper  ">
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel className=""> {step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {steps.length == activeStep ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
        </Paper>
      </main>
    </div>
  );
}

export default CheckoutMain;
