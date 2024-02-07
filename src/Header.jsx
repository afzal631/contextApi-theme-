import React from "react";
import { ThemeContext } from './ThemeContextProvider.jsx';

export default function Header() {
const {toggleReactTheme} = React.useContext(ThemeContext);
  return (
    <header>
      <h1>Demo Website</h1>
      <button onClick={toggleReactTheme}>Toggle Theme</button>
    </header>
  );
}
