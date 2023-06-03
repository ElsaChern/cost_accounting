import React, { useState } from "react";
import CostActions from "./Buttons/CostActions";
import CostScale from "./CostScale";
import CostList from "./CostList";
import NewCost from "./CostForm/NewCost";

const MainComponent = () => {
  const [newCosts, setNewCosts] = useState();
  console.log(newCosts);
  return (
    <>
      <NewCost setNewCosts={setNewCosts} />
      <CostActions />
      <CostScale />
      <CostList />
    </>
  );
};

export default MainComponent;
