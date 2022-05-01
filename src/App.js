import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './App.css';
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Top from './components/Top';
import AboutUs from './components/AboutUs';
import Tracking from './components/Tracking';
import TrackingDetails from './components/TrackingDetails';

function App() {
  return (
   <BrowserRouter>
        <Header />
          <Container fluid>
             <Routes>
                <Route  path="/" element={<Home />} exact/>
                <Route  path="/about" element={<AboutUs />} />
                <Route  path="/tracking" element={<Tracking />} />
                <Route  path="/trackingDetails" element={<TrackingDetails />} />
             </Routes>
             <Footer />
          </Container>
   </BrowserRouter>

         
          
         
  );
}

export default App;
