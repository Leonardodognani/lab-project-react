import "./Tasks.css";
import "./TaskBlock";

function Tasks(prop) {
  return (
    <div className="tasksContainer">
      <div>{prop.tarefa}</div>
    </div>
  );
}

export default Tasks;
