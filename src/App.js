
import './App.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Display from './SinglePage/Display';
import Home from './SinglePage/Home';
import Login from './SinglePage/Login';
import Product from './SinglePage/Product';
import Layout from './SinglePage/Layout';
import SingleProduct from './SinglePage/SingleProduct';
import Error from './SinglePage/Error';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Display/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='product' element={<Product/>}/>
        <Route path='product/:productID' element={<SingleProduct/>}/>
        <Route path='*' element={<Error/>}/>


        </Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
