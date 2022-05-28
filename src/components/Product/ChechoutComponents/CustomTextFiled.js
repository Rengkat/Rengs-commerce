import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";
function FormInput({ label, name }) {
  const { control } = useFormContext();
  return (
    <div>
      <Controller
        render={() => (
          <TextField label={label} required className="w-[20rem]" />
        )}
        name={name}
        control={control}
      />
    </div>
  );
}

export default FormInput;
