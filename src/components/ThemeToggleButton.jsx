function ThemeToggleButton({ theme, toggleTheme }) {
  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      <span className={`toggle-circle ${theme === "dark" ? "dark" : ""}`}></span>
    </button>
  );
}

export default ThemeToggleButton;