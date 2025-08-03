import React from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { Home, CreatePost } from './pages';
import { logo } from './assets';
import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:p-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        
        {/* Left side: Logo and Create button */}
        <div className="flex items-center gap-4">
          <Link to="/">
            <img src={logo} alt="logo" className="w-28 object-contain" />
          </Link>

          <Link
            to="/create-post"
            className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md absolute right-4 right-4 "
          >
            Create
          </Link>
        </div>

        
      </header>

      
        <main className='sm:p-8 px-4 py-4 w-full bg-blue-300 min-h-[calc(100vh-73px)] '>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-post" element={<CreatePost />} />
          </Routes>
        </main>
    </BrowserRouter>
  );
};

export default App;
