import logo from "./logo.svg";
import "./App.css";
import Profile from "./components/Profile";
import { useCallback, useMemo, useState } from "react";

const nums = new Array(30_000_000).fill(0).map((a,i)=>{
  return{
    index: i,
    isMagical: i=== 29_000_000
  }
})

function App() {

  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(nums)
  const [adjective, setAdjective] = useState("good");

  const getAdjective = useCallback(()=>{
    return "another"
  }, [])

  const magical = useMemo(()=>number.find(item=> item.isMagical ===true), [number])
  function clickHandler(){
    setCount((count)=>count+1);
    if(count == 10){
      setNumber(new Array(10_000_000).fill(0).map((a, i)=>{
        return{
          index : i,
          isMagical : i === 9_000_000
        }
      }))
    }
  }
  return (
   
      <>
      <h3>Magical number is {magical.index}</h3>
     <button onClick={clickHandler}>count is {count}</button>

     <Profile adjective ={adjective} getAdjective={getAdjective}/>
      </>
   
  );
}

export default App;
