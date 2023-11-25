import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from './layout/header';
import { Footer } from './layout/footer';
import { Routers } from './routes';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routers />
        <Footer />
      </div>
    </Router>
  );
}

export default App;