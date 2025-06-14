import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <div className="logo-container">
            <img src="/favicon.ico" alt="SaltyPro" className="logo" />
            <h1>SaltyPro</h1>
          </div>
          <p className="tagline">Automatic betting & more for SaltyBet</p>
        </div>

        <div className="content">
          <div className="description">
            <p>
              This is the official website for <strong>SaltyPro</strong> - the Chrome extension 
              that enhances your SaltyBet experience with automatic betting tools and fighter analytics.
            </p>
          </div>

          <div className="buttons">
            <a 
              href="https://chromewebstore.google.com/detail/saltypro/eocgcmccjmhiheelnmpkgohneocaongn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Get SaltyPro Extension
            </a>
            
            <a 
              href="https://discord.gg/7yxvac5xgh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Support Server
            </a>
          </div>

        </div>

        <div className="footer">
          <p>SaltyPro © 2025 - Not affiliated with SaltyBet.com</p>
        </div>
      </div>
    </div>
  );
}

export default App;
