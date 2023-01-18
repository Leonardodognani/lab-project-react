import "./TaskBlock.css";
import Tasks from "./Tasks";

function TaskBlock() {
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

  return (
    <div className="block">
      Tarefas
      <Tasks tarefa={addedTask[0].tarefa}></Tasks>
      <Tasks tarefa={addedTask[1].tarefa}></Tasks>
      <Tasks tarefa={addedTask[2].tarefa}></Tasks>
      <Tasks tarefa={addedTask[3].tarefa}></Tasks>
      <Tasks tarefa={addedTask[4].tarefa}></Tasks>
    </div>
  );
}

export default TaskBlock;
