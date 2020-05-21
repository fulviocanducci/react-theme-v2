import React, { useContext } from "react";

import IndexProvider from "./context";
import Header from "./components/header";

import { GlobalStyled } from "./styles";
import { IndexContext } from "./context";

function App() {
  const { theme, toogleTheme } = useContext(IndexContext);
  return (
    <IndexProvider>
      <GlobalStyled theme={theme} />
      <Header toogleTheme={toogleTheme} theme={theme} />
    </IndexProvider>
  );
}

export default App;
