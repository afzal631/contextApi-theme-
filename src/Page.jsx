import React from "react";
import Header from './Header';
import { ThemeContext } from './ThemeContextProvider.jsx';

export default function Page() {
    const {toggle} = React.useContext(ThemeContext);
    console.log(toggle)
  return (
    <div id="app" className={toggle}>
      <Header />

      <article>
        <h2>React Course</h2>
        <p>
          A course that teaches you React from the ground up and in great depth!
        </p>
      </article>
    </div>
  );
}
