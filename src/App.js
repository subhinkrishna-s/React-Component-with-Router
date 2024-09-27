
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Header from './Header';
import Contact from './Contact';
import Page from './Page';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='*' element={<Page/>} />
    </Routes>
    
    </>
  );
}

export default App;
