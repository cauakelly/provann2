import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import PostsPage from './pages/PostsPage';
import PostDetailPage from './pages/PostDetailPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<PostsPage />} />
          <Route path="/post" element={<PostsPage />} />
          <Route path="/dados/:id" element={<PostDetailPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;