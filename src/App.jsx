import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/page/HomePage';
import NotfoundPage from './components/page/NotFoundPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<NotfoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
