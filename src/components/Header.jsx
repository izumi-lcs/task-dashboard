import ThemeToggleButton from "./ThemeToggleButton";

function Header({ theme, toggleTheme }) {
  return (
    <header className="header">
      <h1>タスク管理ダッシュボード</h1>

      <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
    </header>
  );
}

export default Header;