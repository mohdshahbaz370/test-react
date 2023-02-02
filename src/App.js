import { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Car from './Car';
import Degree from './Degree';
import Food from './Food';
import NoPage from './NoPage';

function App() {

  const dom = useRef(null)
function handleEvent() {

console.log("hello Aateer")
dom.current.focus();
dom.current.style.color= "yellow"
dom.current.style.display="none"
}

  return (<>
  <input type="text" ref={dom}/>
  <button onClick={handleEvent}>Click Me</button>
  </>

  );
  }

/*function App() {
  const [num, setNum] = useState([{name: "shahbaz", id: 3}, {name: "sameer", id: 4}]);

function handleDelete(id) {

const newData = num.filter((num) => num.id !== id)
setNum(newData)
}

  return (<>
  {num.map((item) => <p style={{color: "black"}}>{item.id} : {item.name}<button onClick={() => handleDelete(item.id)}>remove</button></p>)}
  </>

  );
  }*/

/*function App() {
  const [num, setNum] = useState(0)

  useEffect(() => {setTimeout(() => {setNum(num + 1)}, 5000)})


  return (
  <>
<p>{num}</p>
</>
  );

}*/

/*function App() {
  const [query, setQuery] = useState("")
  const [word, setWord] = useState("")
  const [num, setNum] = useState(0)

  useEffect(() => {setTimeout(() => {setNum(num + 1)}, 3000)}, [])


  function handleSubmit(event) {
event.preventDefault();
setQuery(word)
//setNum("")
  }

  return (
  <>
  
<input type="text" onChange={(event) => setWord(event.target.value)} />
<button type="button" onClick={handleSubmit}>Submit</button>
  
<p>input: {query}</p>
<p>{num}</p>
</>
  );
  }*/
/*function App() {
  const [num, setNum] = useState([{name: "shahbaz", id: 3}, {name: "sameer", id: 4}]);


  return (<>
  {num.map((item) => <p style={{color: "black"}}>{item.id} : {item.name}<button onClick={(event) => event.target.parentNode.remove()}>remove</button></p>)}
  </>

  );
  }*/

/*function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Degree />} />
        <Route path="car" element={<Car />} />
        <Route path="food" element={<Food />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}*/


export default App;