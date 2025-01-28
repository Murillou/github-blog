import { Route, Routes } from 'react-router-dom';
import { BlogMain } from './pages/BlogMain';
import { PostDetails } from './pages/PostDetails';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<BlogMain />} />
      <Route path="/post/:id" element={<PostDetails />} />
    </Routes>
  );
}
