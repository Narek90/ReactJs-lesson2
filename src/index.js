import React from 'react';
import ReactDOM from 'react-dom';



export default function App() {
  return (
    <div className="contenier">
      <Header />
      <List />
      <NewTaskButton />
      <NewTaskInputAndBtn />
    </div>
  );
}


function List() {
  return (
    <div className="list">
      <ListItems />
    </div>
  );
}
function ListItems() {
  return <div className="ul" id="list"></div>;
}

function NewTaskButton() {
  return (
    <div className="button" id="button">
      <button onclick="show()">
        <span>+New task</span>
      </button>
    </div>
  );
}

function NewTaskInputAndBtn() {
  return (
    <div className="input " id="input">
      <input type="text" id="newTaskInput" />
      <button onclick="addNewTask()">
        <span>add</span>
      </button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
