import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Introduction from './Components/Introduction';
import Photogallery from './Components/Photogallery';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/gallery" element={<Photogallery />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
