import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas,TopBtn} from './components'
import { useState,useEffect } from "react";


const MainApp=()=> {
  const [mob , setmob ] = useState(false)

  useEffect(()=>{
    const meadiaquery = window.matchMedia('(max-width:500px)');
    setmob(meadiaquery.matches);

    const handle = (e) => (setmob(e.matches));

    meadiaquery.addEventListener('change',handle)

    return()=>{
      meadiaquery.removeEventListener('change',handle)
    }

  },[]);

  return (
    
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <Navbar/>
      <Hero mob={mob}/>
      </div>
      <div id='about'>
      <About/>
      <Experience/>
      <Tech />
      </div>
      <div id='work' >
      <Works/>
      
      </div>

      <div className='relative z-0'>

      <Contact/>
      <div id='contact'>
      <span className={`${mob?'hidden':'block'}`} >
      <StarsCanvas/>
      </span>
      </div>
      <TopBtn/>
      </div>

    </div>

    
  )
}

export default MainApp;
