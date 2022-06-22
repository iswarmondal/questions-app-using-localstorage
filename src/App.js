import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Questions from './pages/Questions';
import EditQuestion from './pages/EditQuestion';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route index element={<Questions />} />
          <Route to='edit'>
            <Route to="/:id" element={<EditQuestion />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
