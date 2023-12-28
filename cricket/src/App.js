import './App.css';
import {BrowserRouter,Routes, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Schedule from './pages/Schedule'
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (


    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route index element = {<Home/>} />
        <Route path="/home" element = {<Home/>} />
        <Route path="/Schedule" element = {<Schedule/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
