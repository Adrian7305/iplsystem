import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Players from './Players'
import CreatePlayers from './CreatePlayers'
import UpdatePlayers from './UpdatePlayers'
import Nav from './Nav'
function App() {


  return (
   <BrowserRouter>
   <Nav/>

    <Routes> 
      <Route path='/players' element={<Players/>}></Route>
      <Route path='/create_players' element={<CreatePlayers/>}></Route>
      <Route path='/update_players/:id' element={<UpdatePlayers/>}></Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
