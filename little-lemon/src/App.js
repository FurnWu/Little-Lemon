import React from 'react';
import Nav from './Nav.js';
import './App.css';
import Footer from "./Footer";
import MainRoutes from './MainRoutes.js';
function App() {
  return (
    <div className="App">
      <Nav />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
