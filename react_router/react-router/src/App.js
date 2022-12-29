import './App.css';
import {Link, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Book from './pages/Book';
import BookList from './pages/BookList';
import Contact from './pages/Contact';
import NewBook from './pages/NewBook';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/book">Book</Link></li>
          <li><Link to="/booklist">BookList</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/newbook">NewBook</Link></li>
          <li><Link to="/notfound">NotFound</Link></li>
        </ul>
      </nav>
      <Routes> {/*only the elements wrapped in routes are re-rendered. the nav bar remains static on the page */}
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>


        <Route path="/book"> {/*this is nested routing syntax */}
          <Route index element={<BookList />}/> {/*this line says what /book is meant to be */}
          <Route path="/book/:id" element={<Book />}/> {/*this is how to do a dynamic link */}
          <Route path="/book/new" element={<NewBook />}/> {/*this is to show that react would pick a specific router over dynamic */}
        </Route>

        <Route path="/contact" element={<Contact />}/>

        <Route path="*" element={<NotFound />}/> {/*routes to any incorrect route */}
      </Routes>
    </>
  );
}

export default App;
