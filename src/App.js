import { useState, useEffect } from 'react'
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './componrnts/Home'

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://northwind.vercel.app/api/suppliers")
        .then(res => res.json())
        .then((d) => {
          console.log("ddddd---test ")
          setData(d)
          console.log("ddddd", d)
        })
  }, []);
  console.log(data)
  return (
    <>
      <div className="App">
        <Link to="/">Home</Link>
      </div>
      <Routes>
        <Route path='/' element={<Home data = {data}/>} />
      </Routes>


    </>


  );
}

export default App;
