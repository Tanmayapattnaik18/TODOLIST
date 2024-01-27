import React, { useState } from "react";
import "./App.css";
import TaskItem from "./components/TaskItem";



function App() {
  const [tasks, setTasks] = useState([]);
  const [formState, setFormState] = useState({
    task: "",
    completed: false,
    taskAssignedTo: "",
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formState.task || !formState.taskAssignedTo) {
      alert("Task and Assignee are required!");
      return;
    }

    setTasks((prevTasks) => [...prevTasks, formState]);
    setFormState({
      task: "",
      completed: false,
      taskAssignedTo: "",
    });
  }

  function handleDelete(index) {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  }

  function handleToggle(index) {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            name="task"
            type="text"
            value={formState.task}
            placeholder="Add Task"
            onChange={handleChange}
          />
          <label>
            Completed:
            <input
              name="completed"
              type="checkbox"
              checked={formState.completed}
              onChange={handleChange}
            />
          </label>
          <select
            name="taskAssignedTo"
            value={formState.taskAssignedTo}
            onChange={handleChange}
          >
            <option value="">Select Assignee</option>
            <option value="Chiku">Chiku</option>
            <option value="Hitman">Hitman</option>
            <option value="Kl">Kl</option>
            <option value="Jink">Jink</option>
            <option value="Bum">Bum</option>
          </select>
          <button type="submit">Add Task</button>
        </form>
      </div>
      <hr />
      {tasks.map((item, index) => (
        <TaskItem
          key={index}
          item={item}
          onDelete={() => handleDelete(index)}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </>
  );
}

export default App;
