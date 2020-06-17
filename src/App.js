import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Navbar />
        <h3></h3>
      </div>
      <Footer />
    </div>
  );
}

export default App;
