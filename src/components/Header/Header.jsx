import styles from "./Header.module.css";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { useDarkMode } from "../Context/DarkModeContext";

export default function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <header className={styles.header}>
      <button className={styles.toggle} onClick={toggleDarkMode}>
        {!darkMode && <BsMoonFill />}
        {darkMode && <BsSunFill />}
      </button>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${
                filter === value && styles.selected
              }`}
              onClick={() => onFilterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}

/*
    1. use back tick(JS method) to add two class under one tag
        ..while filter = value(true) and class is styles'selected'
*/
