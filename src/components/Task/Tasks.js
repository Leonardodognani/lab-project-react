import "./Tasks.css";
import "./../TaskBlock/TaskBlock";
import React from "react";

const Tasks = (props) => {
  {
    console.log("oasdja");
  }
  return (
    <div className="tasksContainer">
      <div>{props.tarefa}</div>
    </div>
  );
};

export default Tasks;
