import React from 'react'
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
import Header from "./component/Header"
import Home from './component/Home'
import Coins from "./component/Coins"
import Exchanges from './component/Exchanges'
import CoinDetails from './component/CoinDetails'
import Footer from './component/Footer'

const App = () => {
  return (
    <Router>
<Header/>
<Routes>

  <Route path='/' element={<Home/>}/>
  <Route path='/coins' element={<Coins/>}/>
  <Route path='/exchanges' element={<Exchanges/>}/>
 
  <Route path='/coin/:id' element={<CoinDetails/>}/>
   

</Routes>
<Footer/>

    </Router>
  )
}

export default App
