import "./TaskBlock.css";
import Tasks from "./../Task/Tasks";
import React from "react";

const TaskBlock = () => {
  const addedTask = [
    {
      tarefa: "fazer almoço",
    },
    {
      tarefa: "treinar",
    },
    {
      tarefa: "estudar",
    },
    {
      tarefa: "ler",
    },
    {
      tarefa: "faxina",
    },
  ];

  const renderTarefas = () => {
    return (
      <>
        {addedTask.forEach((element) => {
          <Tasks tarefa={element.tarefa} />;
        })}
      </>
    );
  };

  return <div className="block">{renderTarefas()}</div>;
};

export default TaskBlock;
