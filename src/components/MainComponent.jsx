import React, { useState } from "react";
// import CostActions from "./Buttons/CostActions";
import CostList from "./Costs/CostList";
import NewCost from "./CostForm/NewCost";

const MainComponent = () => {
  const [costs, setCosts] = useState([
    {
      title: "Холодильник",
      price: 13.499,
      date: new Date(2021, 2, 12),
    },
    {
      title: "Ноутбук",
      price: 233,
      date: new Date(2021, 5, 9),
    },
    {
      title: "Чайник",
      price: 2.399,
      date: new Date(2023, 1, 2),
    },
  ]);

  const addCostsHandler = (newCost) => {
    setCosts([...costs, newCost]);
  };

  return (
    <>
      <NewCost addCost={addCostsHandler} />
      {/* <CostActions /> */}
      <CostList costs={costs} />
    </>
  );
};

export default MainComponent;
