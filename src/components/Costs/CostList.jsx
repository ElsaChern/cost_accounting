import React, { useState } from "react";
import CostItem from "./CostItem";
import CostFilter from "./CostFilter";

const CostList = ({ costs }) => {
  const [selectedYear, setSelectedYear] = useState("2023");
  console.log(costs);

  return (
    <>
      <CostFilter
        setSelectedYear={setSelectedYear}
        selectedYear={selectedYear}
      />
      {costs.map((cost) => (
        <CostItem
          key={cost.title}
          date={cost.date}
          title={cost.title}
          price={cost.price}
        />
      ))}
    </>
  );
};

export default CostList;
