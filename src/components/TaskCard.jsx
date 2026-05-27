function TaskCard({ task, theme }) {
  return (
    <div className={`task-card ${theme}`}>
      <h2>{task.title}</h2>

      <p className="assignee">担当：{task.assignee}</p>

      <div className="card-footer">
        <div className="info-group">
          <span className="label">優先度</span>
          <span className={`badge priority-${task.priority}`}>
            {task.priority}
          </span>
        </div>

        <div className="info-group">
          <span className="label">ステータス</span>
          <span className={`badge status-${task.status}`}>
            {task.status}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;