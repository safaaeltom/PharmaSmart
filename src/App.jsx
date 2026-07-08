import {Routes, Route} from 'react-router-dom';
import Inventory from './pages/Inventory';
import Dashboard from './pages/Dashboard';

function App() {
  return (
      <Routes>
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
  );
}

export default App;