import React from "react";

const CostItem = ({ date, title, price }) => {
  const year = date.getFullYear();
  const month = date.toLocaleString("ru-RU", { month: "long" });
  const day = date.toLocaleString("ru-RU", { day: "2-digit" });

  return (
    <>
      <div>
        <div>
          <div>{year}</div>
          <div>{month}</div>
          <div>{day}</div>
        </div>
        <p>{title}</p>
        <p>{price}р.</p>
      </div>
    </>
  );
};

export default CostItem;
