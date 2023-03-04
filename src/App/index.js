import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./indexUI";


function App() {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;