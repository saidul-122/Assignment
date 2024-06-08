import React, { useState, useEffect } from 'react';
import './App.css';
import AuthButtons from './components/AuthButtons';
import SignIn from './components/SignIn'; // Corrected import name
import SignUp from './components/SignUp'; // Assuming SignUp component exists
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedTheme);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  return (
    <BrowserRouter>
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <header className="header">
          <h1 className="title">My Weather App</h1>
          <button className="theme-toggle-button" onClick={toggleDarkMode}>
            {darkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
          </button>
        </header>
        <main className="main-content">
          <Switch>
            <Route path="/" exact>
              <AuthButtons />
            </Route>
            <Route path="/signin">
              <SignIn/>
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  
  );
};

export default App;
