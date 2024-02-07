import React from "react";

// Todo: Create & manage context in this file
export const ThemeContext = React.createContext({
    toggle: 'light',
    toggleReactTheme:()=>{}
})

export default function ThemeContextProvider({children}) {
  // Todo: Add the component code (incl. dynamic context value)
  const [toggle, setToggle] = React.useState("light");
  
  const toggleReactTheme=()=>{
      setToggle((prev)=>{ return prev === "light"?"dark":"light"});
  }
  
  
  return (<ThemeContext.Provider value={{toggle,toggleReactTheme}}>{children}</ThemeContext.Provider>);
  
}
