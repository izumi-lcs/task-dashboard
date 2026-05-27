import { useState } from "react";
import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [filter, setFilter] = useState("すべて");
  const [theme, setTheme] = useState("light");

  const tasks = [
    {
      id: 1,
      title: "ログイン画面制作",
      assignee: "泉",
      priority: "高",
      status: "未着手",
    },
    {
      id: 2,
      title: "サインイン画面制作",
      assignee: "泉",
      priority: "高",
      status: "進行中",
    },
    {
      id: 3,
      title: "アカウント画面制作",
      assignee: "泉",
      priority: "高",
      status: "進行中",
    },
    {
      id: 4,
      title: "サインイン画面制作",
      assignee: "泉",
      priority: "高",
      status: "進行中",
    },
    {
      id: 5,
      title: "サインイン画面制作",
      assignee: "泉",
      priority: "中",
      status: "進行中",
    },
    {
      id: 6,
      title: "サインイン画面制作",
      assignee: "泉",
      priority: "低",
      status: "進行中",
    },
  ];

  const filteredTasks =
    filter === "すべて"
      ? tasks
      : tasks.filter((task) => task.status === filter);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`app ${theme}`}>
      <aside className="sidebar">
        <nav>
          <ul>
            <li className="active">ダッシュボード</li>
            <li>タスク一覧</li>
            <li>カレンダー</li>
            <li>チーム</li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <Header theme={theme} toggleTheme={toggleTheme} />

        <FilterBar filter={filter} setFilter={setFilter} />

        <TaskList tasks={filteredTasks} theme={theme} />
      </main>
    </div>
  );
}

export default App;