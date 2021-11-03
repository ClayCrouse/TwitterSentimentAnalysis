import React from "react";
import Navbar from "./components/Navbar";
import Links from "./components/Links";

// TODO:
// Seperate Pages with routes
// Add github link (how to keep servers running)
// Make sure plots work in links
// Delete db data after 5 days

const App = () => {
  return (
    <div>
      <Navbar />
      <Links />
    </div>
  );
};

export default App;
