import { Navigate, Route, Routes } from 'react-router-dom';
import TasksPage from './pages/TasksPage';
import Login from './pages/Login';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/tasks" element={<TasksPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
