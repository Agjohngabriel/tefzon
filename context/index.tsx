import { createContext, useContext, useState } from "react";

export const FormContext = createContext();

export default function FormProvider({ children }) {
  const [data, setData] = useState({});

  const setFormValues = (values) => {
    setData((prevalues) => ({
      ...prevalues,
      ...values,
    }));
  };

  return (
    <FormContext.Provider value={{ data, setFormValues }}>
      {children}
    </FormContext.Provider>
  );
}

export const useFormData = () => useContext(FormContext);
