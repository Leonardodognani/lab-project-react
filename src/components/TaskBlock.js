import "./TaskBlock.css";
import Tasks from "./Tasks";

function TaskBlock() {
  const newTask = [
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
      Tarefas:
      <Tasks tarefa={newTask[0].tarefa}></Tasks>
      <Tasks tarefa={newTask[1].tarefa}></Tasks>
      <Tasks tarefa={newTask[2].tarefa}></Tasks>
      <Tasks tarefa={newTask[3].tarefa}></Tasks>
      <Tasks tarefa={newTask[4].tarefa}></Tasks>
    </div>
  );
}

export default TaskBlock;
