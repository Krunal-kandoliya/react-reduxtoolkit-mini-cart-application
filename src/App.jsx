import React from 'react'
import  {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Cartpage from './components/Cartpage'

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Navbar/>
<Routes>
  <Route path='/' element={<Product/>}/>
  <Route path='/cart' element={<Cartpage/>}/>

</Routes>
     
    </div>
    </BrowserRouter>
  )
}

export default App
