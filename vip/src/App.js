import logo from "./logo.svg";
import Button from "@mui/material/Button";
import { AppBar, IconButton, Tab, Toolbar, Tabs, colors } from "@mui/material";
import About from "./About.tsx";
import Projects from "./Projects.tsx";
import Contact from "./Contact.tsx";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [activeTab, setActiveTab] = useState("about"); // Track the active tab

  // Handle Tab Click
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue); // Update the active tab
  };

  return (
    <div className="App">
      <div className="headerComponent">
        <AppBar style={{ backgroundColor: "black" }}>
          <Tabs value={activeTab} onChange={handleTabChange}>
            <Tab label="About" value="about" sx={{ color: "white" }} />
            <Tab label="Projects" value="projects" sx={{ color: "white" }} />
            <Tab label="Contact" value="contact" sx={{ color: "white" }} />
          </Tabs>
        </AppBar>
      </div>

      {activeTab === "about" && <About />}
      {activeTab === "projects" && <Projects />}
      {activeTab === "contact" && <Contact />}

      <Button variant="contained" sx={{ backgroundColor: "black" }}>
        <a href="https://www.google.com" style={{ color: "white" }}>
          Click me
        </a>
      </Button>
    </div>
  );
};

export default App;
