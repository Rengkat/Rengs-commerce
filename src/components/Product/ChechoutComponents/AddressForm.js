import React, { useContext, useEffect, useState } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "./CustomTextFiled";
import { AppContex, cart } from "../../../Context/Context";
import { commerce } from "../../lib/commerce";

function AddressForm({ checkoutToken, next }) {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubDivisions, setShippingSubDivisions] = useState([]);
  const [shippingSubDivision, setShippingSubDivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");
  const { cart } = useContext(AppContex);
  const methods = useForm();
  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );
    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };
  const fetchShippingSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );
    setShippingSubDivisions(subdivisions);
    setShippingSubDivision(Object.keys(subdivisions)[0]);
  };
  const fetchShippingOptions = async (
    checkoutTokenId,
    country,
    stateProvince = null
  ) => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokenId,
      { country, region: stateProvince }
    );

    setShippingOptions(options);
    setShippingOption(options[0].id);
  };
  const options = shippingOptions.map((shipOp) => ({
    id: shipOp.id,
    label: `${shipOp.description} - (${shipOp.price.formatted_with_symbol})`,
  }));

  const conutries = Object.entries(shippingCountries).map(
    ([code, countryName]) => ({
      id: code,
      label: countryName,
    })
  );
  const subdivisions = Object.entries(shippingSubDivisions).map(
    ([code, name]) => ({ id: code, label: name })
  );
  useEffect(() => {
    if (shippingSubDivision)
      fetchShippingOptions(
        checkoutToken.id,
        shippingCountry,
        shippingSubDivision
      );
  }, [shippingSubDivision]);
  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, [cart]);
  useEffect(() => {
    if (shippingCountry) fetchShippingSubdivisions(shippingCountry);
  }, [shippingCountry]);

  return (
    <div className="p-7 w-full">
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) =>
            next({
              ...data,
              shippingCountry,
              shippingOption,
              shippingSubDivision,
            })
          )}>
          <div className="flex justify-between md:flex-row flex-col">
            <div>
              <FormInput name="firstName" label="First name" />
              <FormInput name="email" label="Email" />
              <FormInput name="city" label="City" />
            </div>
            <div>
              <FormInput name="lastName" label="Last name" />
              <FormInput name="address" label="Adress" />
              <FormInput name="zip" label="Zip/ Postal code" />
            </div>
          </div>
          <div className="flex justify-between md:flex-row flex-col">
            <div className="my-10">
              <InputLabel>Shipping Country </InputLabel>
              <Select
                className="w-[20rem]"
                value={shippingCountry}
                onChange={(e) => setShippingCountry(e.target.value)}>
                {conutries.map((country) => {
                  return (
                    <MenuItem value={country.label} key={country.id}>
                      {country.label}
                    </MenuItem>
                  );
                })}
              </Select>
            </div>
            <div className="my-10">
              <InputLabel>Shipping State </InputLabel>
              <Select
                className="w-[20rem]"
                value={shippingSubDivision}
                onChange={(e) => setShippingSubDivision(e.target.value)}>
                {subdivisions.map((state) => {
                  return (
                    <MenuItem value={state.label} key={state.id}>
                      {state.label}
                    </MenuItem>
                  );
                })}
              </Select>
            </div>
          </div>
          <div className="my-2">
            <InputLabel>Shipping Country </InputLabel>
            <Select
              className="w-[20rem]"
              value={shippingOption}
              onChange={(e) => setShippingOption(e.target.value)}>
              {options.map((opt) => {
                return (
                  <MenuItem value={opt.id} key={opt.id}>
                    {opt.label}
                  </MenuItem>
                );
              })}
            </Select>
          </div>
          <div className="btn flex justify-center space-x-5 my-10">
            {" "}
            <Link to="/cart">
              <button className="bg-red-800 text-xl text-white font-semibold rounded-md shadow-md py-2 px-3 w-[10rem] hover:opacity-70">
                {" "}
                Back to Cart
              </button>
            </Link>
            <button
              type="submit"
              className="bg-green-800 text-xl text-white font-semibold rounded-md shadow-md py-2 px-3 w-[10rem] hover:opacity-70">
              Next
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

export default AddressForm;
