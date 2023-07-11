
import './App.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Compontent/Home';
import About from './Compontent/About'
import Login from './Compontent/Login';
import Profile from './Compontent/Profile';
import Error from './Compontent/Error';


//nested routes
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
        {/* Rout1 */}
         {/* <Route index element={<Home/>}> */}
         <Route path='/' element={<About/>}>

         <Route path='home' element={<Home/>}/>
         <Route path='login' element={<Login/>}/>
         <Route path='profile' element={<Profile/>}/>
         <Route path='*' element={<Error/>}/>

         </Route>
      
            {/* rout2 */}
         {/* <Route path='dashboard' element={ <div>dashboard</div> }>
          <Route path='status' element={<div>status</div>}/>
         </Route> */}


     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
