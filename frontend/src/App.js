import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/card';
import Navbar from './components/navbar';
import Homepage from './pages/homepage';

function App() {

  const [data,setData]=useState([]);
  

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(jsonForm=>setData(jsonForm))
            .then(console.log(data))
  },[]);
  return (
    <div className="App">
        <Navbar/>
        <Homepage  data = {data}/>
    </div>
  );
}

export default App;
