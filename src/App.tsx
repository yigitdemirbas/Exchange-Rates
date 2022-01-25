import { useContext, useEffect } from "react";
import "./App.scss";
import API from "./API/api";
import Graph from "./components/Graph/Graph";
import Form from "./components/Form/Form";
import { ReferenceDataContext } from "./state/ReferenceDataContext";
import Amount from "./components/Amount/Amount";

function App() {
  const { getCurrencyPair, getExchangeRate } = API();
  const { from, to } = useContext(ReferenceDataContext);

  useEffect(() => {
    getCurrencyPair({ from, to });
    getExchangeRate({ from, to });
  }, []);

  const cta = (e: Event) => {
    e.preventDefault();
    getCurrencyPair({ from, to });
    getExchangeRate({ from, to });
  };

  return (
    <div className="App">
      <Form cta={cta} />
      <Amount />
      <Graph />
    </div>
  );
}

export default App;
