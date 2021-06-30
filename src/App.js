import React from "react";
import AppRouter from "./router/Router";
import AuthContextProvider from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </div>
  );
}

export default App;
