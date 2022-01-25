import React, { createContext, useState } from "react";

export const ReferenceDataContext = createContext();

export const ReferenceDataProvider = ({ children }) => {
  const [forexData, setForexData] = useState(null);
  const [labels, setLabels] = useState([]);
  const [values, setValues] = useState([]);
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [calculatedAmount, setCalculatedAmount] = useState(0);
  const [exchangeRate, setExchangeRate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <ReferenceDataContext.Provider
      value={{
        forexData,
        loading,
        error,
        labels,
        values,
        from,
        to,
        amount,
        calculatedAmount,
        exchangeRate,
        setExchangeRate,
        setCalculatedAmount,
        setAmount,
        setFrom,
        setTo,
        setLabels,
        setValues,
        setForexData,
        setLoading,
        setError,
      }}
    >
      {children}
    </ReferenceDataContext.Provider>
  );
};
