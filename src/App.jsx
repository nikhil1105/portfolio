import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from './components'
import MainApp from './MainApp';
const App=()=> {

  return (
    <BrowserRouter>

    <Routes>
      <Route path='/*' element={<MainApp/>} />      
    </Routes>

    </BrowserRouter>
  )
}

export default App
