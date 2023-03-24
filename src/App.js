import React from "react";
import '../src/App.css';
import '../src/Components/Header/Header.css';
import '../src/Components/Home/Home.css';
import '../src/Components/Counter/Counter.css'
import '../src/Components/About/About.css'
import './Components/Courses/Courses.css'
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Counter from "./Components/Counter/Counter";
import About from "./Components/About/About";
import Courses from "./Components/Courses/Courses";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Counter />
      <About />
      <Courses />
    </div>
  );
}

export default App;
