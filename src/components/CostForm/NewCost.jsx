import React, { useState } from "react";
import CostForm from "./CostForm";
import "./NewCost.sass";

const NewCost = ({ addCost }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const inputHandler = () => {
    setIsFormVisible(true);
  };

  const cancelCostHandler = () => {
    setIsFormVisible(false);
  };
  return (
    <div className="new_cost">
      {!isFormVisible && (
        <button onClick={inputHandler}>Добавить новый расход</button>
      )}
      {isFormVisible && (
        <CostForm addCost={addCost} onCancel={cancelCostHandler} />
      )}
    </div>
  );
};

export default NewCost;
