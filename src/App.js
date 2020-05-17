import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Card from './components/Card/Card';
import Heading from './components/Heading/Heading';

function App() {
   const [data, setData] = useState([]);

   useEffect(() => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=z1ai1KAnu9Yv9igrdGPzZJHSn5023TLvvrpCmIjA`)
         .then(response => {
            console.log(response.data);
            setData(response.data);

         })
         .catch(err => {
            console.log(`Error: ${err}`);
         })
   }, []);

   document.title = 'NASA Photo of the Day';

   return (
      <div className="app">
         <Heading/>
         <Card explanation={data.explanation} date={data.date} url={data.url}/>
      </div>
   );
}

export default App;
