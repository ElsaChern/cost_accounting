import React, { useState } from "react";
import CostForm from "./CostForm";

const NewCost = ({ addCost }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const inputHandler = () => {
    setIsFormVisible(true);
  };

  const cancelCostHandler = () => {
    setIsFormVisible(false);
  };
  return (
    <>
      {!isFormVisible && (
        <button onClick={inputHandler}>Добавить новый расход</button>
      )}
      {isFormVisible && (
        <CostForm addCost={addCost} onCancel={cancelCostHandler} />
      )}
    </>
  );
};

export default NewCost;
