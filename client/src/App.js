import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import AddEdit from './pages/AddEdit';

import './App.css';
import View from './pages/ViewData';
import Header from './pages/Header';
import Footer from './pages/Footer';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <ToastContainer position='top-center' />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/addContact' element={<AddEdit/>} />
          <Route path='/update/:id' element={<AddEdit/>} />
          <Route path='/view/:id' element={<View/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
