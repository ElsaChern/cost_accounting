import React, { useState } from "react";

const CostForm = ({ addCost }) => {
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

    // let costData = {
    //   title: userInput.title,
    //   price: userInput.price,
    //   date: new Date(userInput.date),
    // };

    let costData = {
      ...userInput,
      date: new Date(userInput.date),
    };

    addCost(costData);
    // How can I simplify this?
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
      <button>Отмена</button>
    </form>
  );
};

export default CostForm;
