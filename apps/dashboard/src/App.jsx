import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Dashboard from './Dashboard';
import PondDetails from './components/PondDetails';
import Analysis from './components/Analysis';
import ControlPanel from './components/ControlPanel';
import Settings from './components/Settings';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analysis/:id?" element={<Analysis />} />
          <Route path="/control-panel" element={<ControlPanel />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/pond/:id" element={<PondDetails />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
