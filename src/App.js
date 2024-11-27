import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AppointmentList from './pages/AppointmentList';
import Confirmation from './pages/Confirmation'
import Booking from './pages/Booking';
import Header from './templates/Header';
import Footer from './templates/Footer';

function App() {
  return (
    <div class="wrapper">
    <Router>
      <Header />
      <div class="container">
      <main class="container my-5 content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment-list" element={<AppointmentList />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </main>
      </div>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
