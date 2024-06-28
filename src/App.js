import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Google Is Flaky...</h1>
        <h1>
          ...And your Google Drive contains the most important docs in your
          live?
        </h1>
        <h2>Register to do daily backups!</h2>
      </header>
      <section className="pricing">
        <div className="pricing-item">
          <h2>Basic Plan</h2>
          <p>$10/month</p>
          <p>Includes basic features</p>
          <button>Sign Up</button>
        </div>
        <div className="pricing-item">
          <h2>Standard Plan</h2>
          <p>$20/month</p>
          <p>Includes standard features</p>
          <button>Sign Up</button>
        </div>
        <div className="pricing-item">
          <h2>Premium Plan</h2>
          <p>$30/month</p>
          <p>Includes all features</p>
          <button>Sign Up</button>
        </div>
      </section>
      <section className="image-section">
        <h1>This is not the image you want to see ...</h1>
        <img src={`no-access.png`} alt="Pricing" />
      </section>
    </div>
  );
}

export default App;
