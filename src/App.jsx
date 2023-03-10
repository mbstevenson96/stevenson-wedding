import './App.css';
import { Route, Routes } from 'react-router-dom';

//components
import NavBar from './components/NavBar/NavBar';

//pages
import Faq from './pages/Faq/Faq'
import Home from './pages/Home/Home'
import OurStory from './pages/OurStory/OurStory'
import Photos from './pages/Photos/Photos'
import Registry from './pages/Registry/Registry'
import Rsvp from './pages/Rsvp/Rsvp'
import ThingsToDo from './pages/ThingsToDo/ThingsToDo'
import Travel from './pages/Travel/Travel'
import WeddingParty from './pages/WeddingParty/WeddingParty'

function App() {
  return (
<div className='container'>
  <h1>Anna & Corey</h1>
  <p>October 1, 2023 | Medina, TN</p>
  <NavBar/>
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/faq' element={<Faq />}/>
    <Route path='/our-story' element={<OurStory />}/>
    <Route path='/photos' element={<Photos />}/>
    <Route path='/registry' element={<Registry />}/>
    <Route path='/rsvp' element={<Rsvp />}/>
    <Route path='/things-to-do' element={<ThingsToDo />}/>
    <Route path='/travel' element={<Travel />}/>
    <Route path='/wedding-party' element={<WeddingParty />}/>
  </Routes>
</div>
  );
}

export default App;
