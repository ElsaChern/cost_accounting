import React from "react";

const CostFilter = ({ selectedYear, setSelectedYear }) => {
  const yearChangeHandler = (e) => {
    setSelectedYear(e.target.value);
  };

  return (
    <div>
      <div>
        <label>Фильтр по году</label>
        <select onChange={yearChangeHandler} value={selectedYear}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>
    </div>
  );
};

export default CostFilter;
