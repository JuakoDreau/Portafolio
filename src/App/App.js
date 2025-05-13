import './App.css';
import {AboutMe} from '../AboutMe/aboutMe';
import { Banner } from '../Banner/banner';
import {Experience} from '../Experience/expercience';

function App() {
  return (
    <div className="App">
      <Banner />
      <AboutMe />
      <Experience />
    </div>
  );
}

export default App;
