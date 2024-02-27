import './App.css';
import TopBar from './components/TopBar';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Experience from './pages/experience';
import Misc from './pages/misc';
import Contact from './pages/contact';

function App() {
    return (
        <div>
            <TopBar/>
            <Routes>
                <Route exact path='/' exact element={<Home/>} />
                <Route exact path='/experience/' element={<Experience/>} />
                <Route exact path='/misc/' element={<Misc/>} />
                <Route exact path='/contact/' element={<Contact/>} />
            </Routes>
        </div>
    );
}

export default App;
