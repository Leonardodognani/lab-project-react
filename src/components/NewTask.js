import React, { useState } from "react";
import "./NewTask.css";
import "./AdTask";

const NewTask = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const taskData = {
      title: enteredTitle,
    };

    props.onSaveTaskData(taskData);
    setEnteredTitle("");
  };

  return (
    <form onSubmit={submitHandler}>
      <p className="newTask">
        Nova tarefa
        <input
          placeholder="Insira aqui sua nova tarefa"
          className="newInput"
          type="text"
          value={enteredTitle}
          onChange={titleChangeHandler}
        />
        <button
          className="btn"
          type="submit"
          value={enteredTitle}
          onClick={titleChangeHandler}
        >
          Adicionar
        </button>
      </p>
    </form>
  );
};

export default NewTask;
