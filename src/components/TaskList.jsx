import TaskCard from "./TaskCard";

function TaskList({ tasks, theme }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} theme={theme} />
      ))}
    </div>
  );
}

export default TaskList;