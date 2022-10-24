// Dependences
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import App from './App';
import Home from './pages/Home';
import NoQR from './pages/NoQR';
import Options from './pages/Options';
import AddSurvey from './pages/AddSurvey';
import ViewSurvey from './pages/ViewSurvey';

// Styles
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />}>
        <Route exact index element={<NoQR />} />
        <Route exact path=":campaign" element={<Home />} />
        <Route exact path="/start" element={<ViewSurvey />} />
        <Route exact path="/options" element={<Options />} />
        {/* <Route path="/add" element={<AddSurvey />} /> */}
        {/* <Route path="/view" element={<ViewSurvey />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
);
