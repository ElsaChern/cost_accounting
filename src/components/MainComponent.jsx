import React, { useState } from "react";
import CostActions from "./Buttons/CostActions";
import CostList from "./Costs/CostList";
import NewCost from "./CostForm/NewCost";

const MainComponent = () => {
  const [newCosts, setNewCosts] = useState();
  console.log(newCosts);

  return (
    <>
      <NewCost setNewCosts={setNewCosts} />
      <CostActions />
      <CostList />
    </>
  );
};

export default MainComponent;
