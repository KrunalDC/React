export const TaskList = (props) => {
  return (
    <div style={{ backgroundColor: props.completed ? "green" : "white" }}>
      <h1>{props.taskName}</h1>
      <button onClick={() => props.deleteTask(props.id)}>Delete</button>
      <button onClick={() => props.completeTask(props.id)}>Complete</button>
    </div>
  );
};
