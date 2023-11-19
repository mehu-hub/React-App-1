import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
      .then(res => res.json())
      .then(data => setUsers(data))

  }, [])

  return (
    <div className="App">
      <h2>Load User From API</h2>
      {
        users.map(user => <Users name={user.name} email={user.email}></Users>)
      }
    </div>
  );
}

function Users(props) {
  return (
    <div className='user-con'>
      <div className='user'>
        <h4>User: {props.name}</h4>
        <p>Email: {props.email}</p>
      </div>
    </div>
  )
}

// const [count, setCount] = useState(0)
// const increaseCount = () => setCount(count + 1);
// const decreaseCount = () => setCount(count - 1);
{/* <h2>Count: {count}</h2>
<button onClick={increaseCount}>Increase</button>
<button onClick={decreaseCount}>Decrease</button> */}

export default App;
