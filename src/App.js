// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DownloadPage from './pages/DownloadPage';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="text-neonGreen min-h-screen2">
        <audio
          src="/background.mp3"
          autoPlay
          loop
          controls={false}
          className="hidden"
        />
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/:slug" element={<DownloadPage/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
