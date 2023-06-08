import React, { useState } from "react";
import "./CostForm.sass";

const CostForm = ({ addCost, onCancel }) => {
  const [userInput, setUserInput] = useState({
    title: "",
    price: "",
    date: "",
  });

  const handleChange = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let costData = {
      ...userInput,
      date: new Date(userInput.date),
    };

    addCost(costData);
    onCancel();
    setUserInput({
      title: "",
      price: "",
      date: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form_control">
        <div>
          <label>Название</label>
          <input
            type="text"
            name="title"
            value={userInput.title}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Сумма</label>
          <input
            type="number"
            name="price"
            min="0.01"
            step="0.01"
            value={userInput.price}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Дата</label>
          <input
            type="date"
            name="date"
            value={userInput.date}
            onChange={handleChange}
          ></input>
        </div>
      </div>
      <div className="action">
        <button type="submit">Добавить расход</button>
        <button onClick={onCancel}>Отмена</button>
      </div>
    </form>
  );
};

export default CostForm;
