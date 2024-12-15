import { useState } from "react";

export const useGetInputValues = () => {
  const [values, setValues] = useState({ name: "", email: "" });

  const getInputValues = () => {
    return values;
  };

  const clearValues = () => {
    setValues({ name: "", email: "" });
  };

  return { getInputValues, clearValues };
};
