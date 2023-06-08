import React from "react";
import "./CostItem.sass";

const CostItem = ({ date, title, price }) => {
  const year = date.getFullYear();
  const month = date.toLocaleString("ru-RU", { month: "long" });
  const day = date.toLocaleString("ru-RU", { day: "2-digit" });

  return (
    <>
      <div className="cost_item">
        <div className="cost_date">
          <div className="year">{year}</div>
          <div className="month">{month}</div>
          <div className="day">{day}</div>
        </div>
        <p className="description">{title}</p>
        <div className="price">{`${price} руб.`}</div>
      </div>
    </>
  );
};

export default CostItem;
