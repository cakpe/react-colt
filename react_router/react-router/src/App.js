import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Book from './pages/Book';
import BookList from './pages/BookList';
import Contact from './pages/Contact';
import NewBook from './pages/NewBook';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/book" element={<Book />}/>
      <Route path="/booklist" element={<BookList />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/newbook" element={<NewBook />}/>
      <Route path="/notfound" element={<NotFound />}/>
    </Routes>
  );
}

export default App;
