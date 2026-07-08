import {Routes, Route} from 'react-router-dom';
import Inventory from './pages/Inventory';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </div>
  );
}

export default App;