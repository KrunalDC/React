import { useState } from "react";
import "./App.css";
import { TaskList } from "./TaskList";

function App() {
  const [newTask, setNewTask] = useState("");
  const [toDolist, setTodolist] = useState([]);
  const handleOnchange = (event) => {
    setNewTask(event.target.value);
  };
  const addTask = () => {
    const task = {
      id: toDolist.length === 0 ? 1 : toDolist[toDolist.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodolist([...toDolist, task]);
  };
  const deleteTask = (id) => {
    const updatedList = toDolist.filter((item) => item.id !== id);
    setTodolist(updatedList);
  };
  const completeTask = (id) => {
    setTodolist(
      toDolist.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  };
  return (
    <div className="App">
      <div>
        <input type="text" onChange={handleOnchange}></input>
        <button onClick={addTask}>Add</button>
      </div>
      <div>
        {toDolist.map((item) => {
          return (
            <TaskList
              id={item.id}
              completed={item.completed}
              taskName={item.taskName}
              deleteTask={deleteTask}
              completeTask={completeTask}
            ></TaskList>
          );
        })}
      </div>
    </div>
  );
}
export default App;
