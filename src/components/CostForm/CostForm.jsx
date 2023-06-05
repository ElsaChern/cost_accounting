import React, { useState } from "react";

const CostForm = ({ addCost, onCancel }) => {
  const [userInput, setUserInput] = useState({
    title: "",
    price: "",
    date: "",
  });

  const titleChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      title: e.target.value,
    });
  };

  const priceChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      price: e.target.value,
    });
  };

  const dateChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      date: e.target.value,
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
      <div>
        <label>Название</label>
        <input
          type="text"
          value={userInput.title}
          onChange={titleChangeHandler}
        ></input>
      </div>
      <div>
        <label>Сумма</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          value={userInput.price}
          onChange={priceChangeHandler}
        ></input>
      </div>
      <div>
        <label>Дата</label>
        <input
          type="date"
          value={userInput.date}
          onChange={dateChangeHandler}
        ></input>
      </div>
      <button type="submit">Добавить расход</button>
      <button onClick={onCancel}>Отмена</button>
    </form>
  );
};

export default CostForm;
