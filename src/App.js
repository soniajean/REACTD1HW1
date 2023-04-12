import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './views/Home';
import News from './views/News';
import About from './views/About';
import Shop from './views/Shop';


function App() {

  return (

    <div className="App">
      <Nav />
      <Routes>
        {/*  any 'page' of our app can be defined as a route here */}
        <Route children path='/' element={<Home />} />
        <Route children path='/News' element={<News/>} />
		<Route children path='/About' element={<About />} />
        <Route children path='/Shop' element={<Shop />} />

      </Routes>

    </div>
  );
}

export default App;
