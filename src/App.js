import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Questions from './pages/Questions';
import EditQuestion from './pages/EditQuestion';
import AddQuestion from './pages/AddQuestion';
import { QuestionsProvider } from './utils/QuestionsContext';

function App() {
  return (
    <QuestionsProvider>
      <main>
        <BrowserRouter>
          <Routes>
            <Route index element={<Questions />} />
            <Route path="/edit/:id" element={<EditQuestion />} />
            <Route path="/add" element={<AddQuestion />} />
          </Routes>
        </BrowserRouter>
      </main>
    </QuestionsProvider>
  );
}

export default App;
