import React from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div class="bg-gray-100">
        <div class="min-h-screen  mx-3 app-dashboard">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
