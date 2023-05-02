import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Page/Home';
import Categories from './Page/categories/Categories';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories/:id' element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
