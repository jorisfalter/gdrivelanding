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
        <h2>Register now to do regular backups!</h2>
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
        <img
          src={`${process.env.PUBLIC_URL}/pricing-image.jpg`}
          alt="Pricing"
        />
      </section>
    </div>
  );
}

export default App;
