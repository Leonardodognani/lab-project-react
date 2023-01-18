import React, { useState } from "react";
import "./NewTask.css";

const NewTask = () => {
  const [addedTitle, setAddedTitle] = useState("");

  const titleChangeHandler = (event) => {
    setAddedTitle(event.target.value);
  };

  return (
    <form>
      <div>
        <p className="newTask">
          Nova tarefa
          <input
            placeholder="Insira aqui sua nova tarefa"
            className="newInput"
            type="text"
            onChange={titleChangeHandler}
          />
          <button className="btn" type="submit" onClick={titleChangeHandler}>
            Adicionar
          </button>
        </p>
      </div>
    </form>
  );
};

export default NewTask;
