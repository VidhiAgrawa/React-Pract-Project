import { useState } from 'react';
import './App.css';
import Heading from './Component/Heading';
import {vidhi} from './Data/blog'
function App() {
  const obj = {
    name : "Vidhi",
    pwd : "1235kk"
  }
  let templete = ''
  let [num, countNum] = useState(1)
  let display = ()=>{
    countNum(num+1)
  }
  if( num == 6 ){
    templete =<button className = "butn" onClick={num}>reached limit</button>

  }
  else{
    templete = <button className = "butn" onClick={display}>{num}</button>
  }
  // let user = vidhi.filter((v) => (v.title == "Anshul"))[0]
  // console.log(user.title)
  // const { name } = obj
  return (
    <div className="App">
    {templete}      
    </div>
    // I have randomly inserted my name "Anshul" in one title, get my id using filter
    // add my id and userid using reduce and show me
  );
}

export default App;
