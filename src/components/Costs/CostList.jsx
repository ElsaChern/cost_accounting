import { useState } from "react";
import "./CostList.sass";
import CostItem from "./CostItem";
import CostFilter from "./CostFilter";
import CostsDiagram from "./CostsDiagram";

const CostList = ({ costs }) => {
  const [selectedYear, setSelectedYear] = useState("2023");

  const filteredCosts = costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div className="costs_list">
      <CostFilter
        setSelectedYear={setSelectedYear}
        selectedYear={selectedYear}
      />
      <CostsDiagram costs={filteredCosts} />
      {!filteredCosts.length ? (
        <p className="empty_list">За данный период расходов не найдено</p>
      ) : (
        filteredCosts.map((cost) => (
          <CostItem
            key={cost.title}
            title={cost.title}
            price={cost.price}
            date={cost.date}
          />
        ))
      )}
    </div>
  );
};

export default CostList;
