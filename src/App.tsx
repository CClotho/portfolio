import './styles/app.scss';
import Contact from './components/Contact';
import About from './components/About';
import Showcase from './components/Showcase';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    function handleResize() {
      console.log(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const contact = `kelisi4@outlook.com`
  const about = `...`
  return (
    <>
      <h1 id="WIP"> Work In Progress</h1>
      <div id="author">K  &lt; &gt; Dev  </div> 
      <div className="flex-container">
       
        <div className="main-container">       

          <Contact title="Contact" content={contact}/>
          <Showcase title="Showcase" content="Projects"/>
          <About title="About" content={about}/>
         

        </div>  
      </div>
      
    </>
  );
}

export default App;
