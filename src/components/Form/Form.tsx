import "./Form.scss";
import { useContext } from "react";
import { ReferenceDataContext } from "../../state/ReferenceDataContext";

const Form = (props: any) => {
  const { from, to, amount, setFrom, setTo, setAmount } =
    useContext(ReferenceDataContext);

  return (
    <form onSubmit={(e) => props.cta(e)}>
      <div className="group">
        <input
          type="text"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
        <span className="highlight"></span>
        <span className="bar"></span>
        <label>From</label>
      </div>
      <div className="group">
        <input type="text" value={to} onChange={(e) => setTo(e.target.value)} />
        <span className="highlight"></span>
        <span className="bar"></span>
        <label>To</label>
      </div>
      <div className="group">
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <span className="highlight"></span>
        <span className="bar"></span>
        <label>Amount</label>
      </div>

      <button className="btn" type="submit">
        <span>Refresh</span>
      </button>
    </form>
  );
};

export default Form;
