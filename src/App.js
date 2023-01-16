import Tasks from "./components/Tasks";
import "./App.css";

function App() {
  return (
    <div className="allContent">
      <div className="container">
        <header className="header">To do List:</header>
        <div>
          <p className="newTask">
            Nova tarefa <input className="newInput" type="text"></input>
            <button className="btn">Adicionar</button>
          </p>
          <Tasks></Tasks>
        </div>
      </div>
    </div>
  );
}

export default App;
