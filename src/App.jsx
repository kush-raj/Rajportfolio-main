import Contact from './Contact'
import './App.css'
import Certificates from './Certificates'
import Home from './Home'

import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Skills from './Skills'
import About from './About'
import Project from './Project'

function App() {
 

  return (
   <BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}></Route>
   <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/certificates' element={<Certificates/>}></Route>
      <Route path='/skills' element={<Skills/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/project' element={<Project/>}></Route>
</Routes>



  
   </BrowserRouter>
  )
}

export default App
