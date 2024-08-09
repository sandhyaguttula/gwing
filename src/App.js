import { useState,useEffect } from 'react'
import './App.css'
import Background from './components/background/background';
import Hero from './components/hero/hero'
import Navbar from './components/navbar/navbar'
const App=()=>{
  let heroData=[
    {text1:"Dive into",text2:"what you love"},
    {text1:"Indulge",text2:"your passions"},
    {text1:"Give into your Passion",text2:"your passions"}
  ]

  const [heroCount,setheroCount]=useState(0);
  const [playStatus,setplayStatus]=useState(false);


  useEffect(()=>{
    setInterval(()=>{
      setheroCount((count)=>{return count===2?0:count+1})
    },3000);
  },[])

  return(
    <div>
      
        <Background playStatus={playStatus} heroCount={heroCount}/>
        <Navbar />
        
        <Hero
        
        setplayStatus={setplayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setheroCount={setheroCount}
        playStatus={playStatus}

        />


    </div>
  )
}

export default App