import { Landing } from './Components/Landing';
import { Header } from './Components/Header';
import "./App.css";
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import {Routes , Route} from 'react-router-dom';
import { Projects } from './Components/Projects';
import { Footer } from './Components/Footer';
function App() {
  
  return (
    <div className="App">
       <Header/> 
      <Routes>
        <Route index path='/' element={<Landing/>}/>
        <Route index path='/About' element={<About/>}/>
        <Route index path='/Projects' element={<Projects/>}/>
        <Route index path='/Contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
