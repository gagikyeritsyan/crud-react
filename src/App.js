import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AddUserPage from './pages/AddUserPage';
import UserPage from './pages/UserPage';
import EditPage from './pages/EditPage';

export default function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/add" element={<AddUserPage />} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="/user/edit/:id" element={<EditPage />} />
      </Routes>
    </div>
  )
}
