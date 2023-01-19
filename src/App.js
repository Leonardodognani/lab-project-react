import React from "react";
import NewTask from "./components/NewTask";

import "./App.css";
import TaskBlock from "./components/TaskBlock";
import AdTask from "./components/AdTask";

const addTaskHandler = (addedTask) => {
  console.log(addedTask);
};

function App() {
  return (
    <div className="backImage">
      <div className="allContent">
        <div className="container">
          <header className="header">Lista de Afazeres</header>
          <div>
            <AdTask onAddTask={addTaskHandler} />
            <TaskBlock />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
