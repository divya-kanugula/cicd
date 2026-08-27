import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Create React Application", completed: true },
    { id: 2, name: "Push Code to GitHub", completed: true },
    { id: 3, name: "Configure CI/CD Pipeline", completed: false },
    { id: 4, name: "Deploy to Ubuntu", completed: false }
  ]);

  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        name: newTask,
        completed: false
      }
    ]);

    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  return (
    <div className="container">
      <div className="card">
        <h1>🚀 DevOps Task Manager</h1>

        <p className="subtitle">
          ReactJS Application deployed using GitHub CI/CD
        </p>

        <div className="stats">
          <div>
            <strong>{tasks.length}</strong>
            <span>Total Tasks</span>
          </div>

          <div>
            <strong>{completedTasks}</strong>
            <span>Completed</span>
          </div>

          <div>
            <strong>{tasks.length - completedTasks}</strong>
            <span>Pending</span>
          </div>
        </div>

        <div className="input-section">
          <input
            type="text"
            placeholder="Enter a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />

          <button onClick={addTask}>
            Add Task
          </button>
        </div>

        <div className="task-list">
          {tasks.map((task) => (
            <div
              className={`task ${
                task.completed ? "completed" : ""
              }`}
              key={task.id}
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />

              <span>{task.name}</span>
            </div>
          ))}
        </div>

        <div className="deployment">
          <h2>Deployment Status</h2>

          <p>
            ✅ Application ready for CI/CD deployment
          </p>

          <p>
            GitHub → GitHub Actions → Ubuntu → Nginx
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;