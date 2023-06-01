import Post from './pages/Post';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Page404 from './pages/Page404'
import Header from './assets/components/Header/Header';
import Categories from './pages/categories';
import './assets/css/base/base.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about'element={<Sobre />}/>
        <Route path='/posts/:id' element={<Post />} />
        <Route path='/categoria/:id/*' element={<Categories />}/>
        <Route path='*' element={<Page404 />}/>
      </Routes>
    </Router>

  );
}

export default App;
