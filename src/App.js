import { Routes,Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import All from './components/Pages/All';
import Eletronics from './components/Pages/Eletronics';
import Jewelery from './components/Pages/Jewelery';
import MenCloth from './components/Pages/MenCloth';
import WomenCloth from './components/Pages/WomenCloth';
import Cart from './components/Cart/Cart';
import Wishlist from './components/Wishlist/Wishlist';


function App() {
  return (
    <>  
     <Header/>

     <Routes>


    <Route path='/all'  element={<All/>} />
    <Route path='/eletronics'  element={<Eletronics/>} />
    <Route path='/jewelery' element={<Jewelery/>} />
    <Route path='/mencloth' element={<MenCloth/>} /> 
    <Route path='/womencloth'  element={<WomenCloth/>} />
    <Route path='/login'  element={<WomenCloth/>} />
    <Route path='/signup'  element={<WomenCloth/>} />
    <Route path='/cart'  element={<Cart/>} />
    <Route path='/favourites'  element={<WomenCloth/>} />
    <Route path='/wishlist'  element={<Wishlist/>} />
    </Routes>
    </>
  );
}

export default App;
