
import './App.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home';

import Login from './Login';
import Layout from './Layout';
import Registraionfrom from './Registraionfrom';
// import Register from './Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route  path='/home' element={<Home/>}/>
      {/* <Route path='/register' element={<Register/>}/> */}
      <Route path='/register' element={<Registraionfrom/>}/>
        <Route path='/login' element={<Login/>}/>
        </Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
