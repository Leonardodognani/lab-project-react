import Tasks from "./components/Tasks";
import "./App.css";
import TaskBlock from "./components/TaskBlock";

function App() {
  return (
    <div className="backImage">
      <div className="allContent">
        <div className="container">
          <header className="header">Lista de Afazeres:</header>
          <div>
            <p className="newTask">
              Nova tarefa
              <input
                placeholder="Insira aqui sua Nova tarefa"
                className="newInput"
                type="text"
              ></input>
              <button className="btn">Adicionar</button>
            </p>

            <TaskBlock></TaskBlock>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
