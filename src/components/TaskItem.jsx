import React from "react";

function TaskItem({ item, onDelete, onToggle }) {
  const taskStyle = {
    color: item.completed ? "green" : "red",
  };

  return (
    <div>
      <span style={taskStyle}>{item.task}</span>
      <button onClick={onToggle}>Toggle Task</button>
      <button onClick={onDelete}>Delete Task</button>
    </div>
  );
}

export default TaskItem;
