import Page from './Page';
import React from "react";
import ThemeContextProvider from "./ThemeContextProvider.jsx"

function App() {
  
  return (<ThemeContextProvider>
             <Page />
          </ThemeContextProvider>);
}

export default App;
