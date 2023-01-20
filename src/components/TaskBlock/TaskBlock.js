import "./TaskBlock.css";
import Tasks from "./../Task/Tasks";

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

  console.log(addedTask);
  return (
    <div className="block">
      Tarefas
      <Tasks tarefa={addedTask[0].tarefa} />{" "}
      {/* colocar um MAP ou um ForEach, pesquisar sobre add objeto que eu defino */}
      <Tasks tarefa={addedTask[1].tarefa} />
      <Tasks tarefa={addedTask[2].tarefa} />
      <Tasks tarefa={addedTask[3].tarefa} />
      <Tasks tarefa={addedTask[4].tarefa} />
    </div>
  );
}

export default TaskBlock;
