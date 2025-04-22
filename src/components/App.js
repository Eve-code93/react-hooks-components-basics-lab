// src/components/App.js
import React from "react";

const App = () => {
  return (
    <div>
      <nav>
        <h1>My App</h1>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>

      <main>
        <section id="home">
          <h2>Welcome to the Home Page</h2>
          <p>This is the home section.</p>
        </section>

        <section id="about">
          <h2>About Us</h2>
          <p>This section is all about us.</p>
        </section>
      </main>
    </div>
  );
};

export default App;
