import React from "react";
import "./App.css";
import Contact from "./components/contact/contact";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Typewriters from "./components/typewriter/typewriters";

const App = () => {
  return (
    <div className="App">
      <React.StrictMode>
        <Navbar />
        <div className="section--1">
          <Typewriters />
          <div className="b tc">
            <p>
              Frontend Developer<br></br>Amsterdam Area
            </p>
          </div>
          <About />
        </div>
        <Projects />
        <Contact />
        <Footer />
      </React.StrictMode>
    </div>
  );
};

export default App;
