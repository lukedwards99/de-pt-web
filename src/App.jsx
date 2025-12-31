import { Routes, Route } from 'react-router-dom';
import Navigation from './components/jsx/Navigation';
import Footer from './components/jsx/Footer';
import ScrollToTop from './components/jsx/ScrollToTop';
import Home from './pages/jsx/Home';
import Contact from './pages/jsx/Contact';
import Resources from './pages/jsx/Resources';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navigation />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
