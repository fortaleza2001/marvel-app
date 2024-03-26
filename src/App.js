
import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Series from './pages/Series';
import Comics from './pages/Comics';
import Error404 from './pages/Error404';
import Header from './components/header';
import useFetch from './components/hooks/useFetch';

function App() {

  const exampleAPI = useFetch("http://gateway.marvel.com/v1/public/comics?ts=1&apikey=a17fb0ce40a7e9c3cd9a895c4223d6aa&hash=dd84e86a3f80fb0ab67c737b2848eb42")
  console.log(exampleAPI)
  return (
    <div>
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element= {<Home/>}/>  
            <Route path='/inicio' element= {<Home/>}/>
            <Route path='/series' element= {<Series/>}/>
            <Route path='/comics' element= {<Comics/>}/>
            <Route path='/comics' element= {<Comics/>}/>
            <Route path='*' element={<Error404 />} />
          </Routes>
        </BrowserRouter>
  </div>
  );
}

export default App;
