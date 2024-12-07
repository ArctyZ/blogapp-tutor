import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from './pages/Homepage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import PostListPage from './pages/PostListPage.jsx';
import SinglePostPage from './pages/SinglePostPage.jsx';
import WritePage from './pages/WritePage.jsx';
import MainLayout from './layouts/MainLayout.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
        <Route path='/' element={<HomePage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/post-list' element={<PostListPage/>} />
        <Route path='/:slug' element={<SinglePostPage/>} />
        <Route path='/write' element={<WritePage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
