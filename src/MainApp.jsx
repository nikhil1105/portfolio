import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas,TopBtn} from './components'



const MainApp=()=> {

  return (
    
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <Navbar/>
      <Hero/>
      </div>
      <div id='about'>
      <About/>
      <Experience/>
      <Tech/>
      </div>
      <div id='work' >
      <Works/>
      
      </div>

      <div className='relative z-0'>

      <Contact/>
      <div id='contact'>
      <StarsCanvas/>
      </div>
      <TopBtn/>
      </div>

    </div>

    
  )
}

export default MainApp;
