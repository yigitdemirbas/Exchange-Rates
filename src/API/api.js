import axios from "axios";
import { ReferenceDataContext } from "../state/ReferenceDataContext";
import { useContext } from "react";

const BASE_URL = "https://www.alphavantage.co/";

const API = () => {
  const {
    setForexData,
    setLabels,
    setValues,
    setExchangeRate,
    amount,
    setCalculatedAmount,
    setLoading,
    setError,
  } = useContext(ReferenceDataContext);

  const getCurrencyPair = async ({ from, to }) => {
    setLoading(true);
    await axios(
      `${BASE_URL}query?function=FX_DAILY&from_symbol=${from}&to_symbol=${to}&apikey=BWJY7F89MCQD15FE`
    )
      .then((res) => {
        if (res.data["Time Series FX (Daily)"]) {
          const dateList = [];
          const valueList = [];
          setForexData(res.data);
          for (const date of Object.keys(res.data?.["Time Series FX (Daily)"])) {
            if (dateList.length <= 30) {
              dateList.push(date);
              valueList.push(
                res.data["Time Series FX (Daily)"]?.[date]?.["4. close"]
              );
            }
          }
          setLabels(dateList);
          setValues(valueList);
        } else throw res.data.Note;
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getExchangeRate = async ({ from, to }) => {
    setLoading(true);
    await axios(
      `${BASE_URL}query?function=CURRENCY_EXCHANGE_RATE&from_currency=${from}&to_currency=${to}&apikey=BWJY7F89MCQD15FE`
    )
      .then((res) => {
        setExchangeRate(res.data);
        setCalculatedAmount(
          parseFloat(
            res.data["Realtime Currency Exchange Rate"]?.["5. Exchange Rate"]
          ) * amount
        );
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    getCurrencyPair,
    getExchangeRate,
  };
};

export default API;
