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
          {
            console.log(element);
            {
              /* Dentro do bloco, a função element funciona e pode ser chamada. Fora do bloco ela não é reconhecida e da como "não definida". Investigar o porquê da função não sair do bloco*/
            }
          }
        })}
      </>
    );
  };

  return <div className="block">{renderTarefas()}</div>;
};

export default TaskBlock;
