import React, { useState } from "react";
import CostItem from "./CostItem";
import CostFilter from "./CostFilter";

const CostList = () => {
  const [selectedYear, setSelectedYear] = useState("2023");
  console.log(selectedYear);
  return (
    <>
      <CostFilter
        setSelectedYear={setSelectedYear}
        selectedYear={selectedYear}
      />
      <CostItem />
    </>
  );
};

export default CostList;
