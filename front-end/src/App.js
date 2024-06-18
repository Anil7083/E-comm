import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import SignUp from './components/signUp';
import Footer from './components/footer';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/login';
import AddProduct from './components/AddProduct';
import ProductList from './components/productList';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path='/' element={<ProductList/>}></Route>
            <Route path='/add' element={<AddProduct/>}></Route>
            <Route path='/update/:id' element={<UpdateProduct/>}></Route>
            <Route path='/logout' element={<h1>Logout Component</h1>}></Route>
          </Route>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
