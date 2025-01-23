import './App.css';
import Heading from './Component/Heading';
import {vidhi} from './Data/blog'
function App() {
  const obj = {
    name : "Vidhi",
    pwd : "1235kk"
  }
  let user =  vidhi.filter((v) => (v.title == "Anshul"))[0];
  console.log(user.title)
  // const { name } = obj
  return (
    <div className="App">
      {
        vidhi.map( (v) => (
          <Heading name = {v.userId} name2 = {v.id} user = {user.title}/>
        ) )
      }    
    </div>
    // I have randomly inserted my name "Anshul" in one title, get my id using filter
    // add my id and userid using reduce and show me
  );
}

export default App;
