import "./Amount.scss";
import { useContext } from "react";
import { ReferenceDataContext } from "../../state/ReferenceDataContext";

const Amount = () => {
  const { calculatedAmount } = useContext(ReferenceDataContext);

  return (
    <div className="amount">
        <span>Calculated Amount :</span>
        <span>{calculatedAmount}</span>
    </div>
  );
};

export default Amount;
