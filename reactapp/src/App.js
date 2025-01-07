import logo from './logo.svg';
import './App.css';

function App() {
  let myName = " vidhi agrawal "
  let arr = [1, 2, 3, 4]
  let obj = {
    "name" : "vidhi",
    "rollno" : 2,
    "heyyyyy" : "heyyyy2"
  }
  return (
    <div className="App">
      {arr.map( (v, i) => {
        return(
          <p>{v}</p>

        )
      } )}
      {/* <h1>{obj.name}</h1>
      <h1>{obj.rollno}</h1> */}
    </div>
  );
}

export default App;
