import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext(); //export 없앰. 아래 훅을 대신 사용

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode); //true였다가 false였다가, toggle
    updateDarkMode(!darkMode);
  };

  // 11-15-22 Tailwind css >docs>darkmode
  useEffect(() => {
    // darkmode 상태를 검사후 변수 isdark에 넣어줌
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    //darkmode or not 내부상태 업데이트
    setDarkMode(isDark);
    updateDarkMode(isDark);
  }, []); //처음 로딩될때만 작동함

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

// Hooks 생성
export const useDarkMode = () => useContext(DarkModeContext);

// 11-15-22
//다크모드가 트루였을때 제일 상위 엘리먼트에 dark 클라스를 넣어준다
function updateDarkMode(darkMode) {
  if (darkMode) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark"; //업데이트 될때마다 로컬 스토리지에 저장
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
}
