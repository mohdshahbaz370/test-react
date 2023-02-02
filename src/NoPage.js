const NoPage = () => {
    return <h1>404</h1>
}

export default NoPage;
/*import { useState, createContext } from 'react';

function App() {
  const [arr, setArr] = useState([{name: "sameer", id: 3}]);
  const [temp, setTemp] = useState("")
  const [id, setId] = useState("")
const handleSubmit = (e) => {
  e.preventDefault();
  setArr([...arr, { name: temp, id: id }]);
}
  return (<>
    <p>Enter a element to insert a value</p>
    <form onSubmit={handleSubmit}>
    <input type="text" value={temp} onChange={(e) => setTemp([e.target.value])}  />
    <input type="text" value={id} onChange={(e) => setId([e.target.value])}  />
    <input type="submit" value="Submit" />
    </form>
  </>
  )
}

export default App;*/