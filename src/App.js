import React, { useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Tips from './pages/Tips';
import layoutStyles from './styles/Layout.module.css';




function App() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'home': return <Home />;
      case 'destinations': return <Destinations />;
      case 'tips': return <Tips />;
      default: return <Home />;
    }
  };

  return (
    <div className={layoutStyles.app}>
      <Header />
      <Navigation onNavigate={setPage} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
