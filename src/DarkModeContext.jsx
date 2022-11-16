import { createContext, useState } from "react";

// 1. 외부로 보낼수있겠금 export
export const DarkModeContext = createContext();
// 변수에 value 할당

// 데이터를 가지고 보여주고 있는 우산역할(부모 우산 컴포넌트)
export function DarkModeProvider({ children }) {
  // 2. ContextApp 에 onClick 설정,
  const [darkMode, setDarkMode] = useState(false);
  //다크모드인지 아닌지 기억하는 상태 , 초기값은 다크모드가 아닌 상태
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

// 11-15-22
function updateDarkMode(darkMode) {
  if (darkMode) {
    document.documentElement.clssList.add("dark");
    console.log("dd");
  } else {
    document.documentElemenet.classList.remove("dark");
  }
}

//컨텍스트(DMC)에는 내장 프로퍼티 Provider가 있음
//DMC.Provider를 통해 value 값 설정
