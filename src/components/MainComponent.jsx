import "../styles/globals.sass";
import { useState } from "react";
import CostList from "./Costs/CostList";
import NewCost from "./CostForm/NewCost";
import INITIAL_STATE from "../store/store";

const MainComponent = () => {
  const [costs, setCosts] = useState(INITIAL_STATE);

  const addCostsHandler = (newCost) => {
    setCosts([...costs, newCost]);
  };

  return (
    <>
      <NewCost addCost={addCostsHandler} />
      <CostList costs={costs} />
    </>
  );
};

export default MainComponent;
