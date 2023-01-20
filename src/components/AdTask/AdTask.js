import React from "react";
import "./AdTask.css";
import NewTask from "../NewTask/NewTask";

const AdTask = (props) => {
  const saveNewTaskHandler = (enteredTaskData) => {
    const taskData = {
      ...enteredTaskData,
      id: Math.random().toString(),
    };
    props.onAddTask(taskData);
  };

  return (
    <div>
      <NewTask onSaveTaskData={saveNewTaskHandler} />
    </div>
  );
};

export default AdTask;
