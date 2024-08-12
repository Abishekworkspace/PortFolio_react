import './Header.css'
import Header from './Header';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import Skills from './skills';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
         <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
