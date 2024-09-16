import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VehicleForm from './components/VehicleForm.js';
import VehicleList from './components/VehicleList.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VehicleForm />} />
        <Route path="/vehicles" element={<VehicleList />} />
      </Routes>
    </Router>
  );
}

export default App;
