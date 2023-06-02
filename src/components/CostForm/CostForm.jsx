import React, { useState } from "react";

const CostForm = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    sum: "",
    date: "",
  });

  const nameChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      name: e.target.value,
    });
  };

  const sumChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      sum: e.target.value,
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
      name: userInput.name,
      sum: userInput.sum,
      date: new Date(userInput.date),
    };
    console.log(costData);
    // How can I simplify this?
    setUserInput({
      ...userInput,
      name: "",
      sum: "",
      date: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Название</label>
        <input
          type="text"
          value={userInput.name}
          onChange={nameChangeHandler}
        ></input>
      </div>
      <div>
        <label>Сумма</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          value={userInput.sum}
          onChange={sumChangeHandler}
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
