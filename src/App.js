
import './App.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Error from './Pages/Error';
import About from './Pages/About';
import SharedLayout from './Pages/SharedLayout';
import Display from './Pages/Display';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
        <Route index element={<Display/>}/> 
        {/* <Route index element={<Home/>}/> */}
        <Route path ='home'element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='profile' element={<Profile/>}/>
        <Route path='*' element={<Error/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
