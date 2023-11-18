import './App.css';

function App() {
  return (
    <div className="App">
      <Person name="Mehedi Hasan" age="21"></Person>
      <Person name="Hasan" age="20"></Person>
      <Person name="Omar Faruk" age="22"></Person> 
      <Person name="Ali Vai" age="25"></Person>
      <Person></Person>
       
    </div>
  );
}

function Person(props) {
  console.log(props)
  return (
    <div className='person'>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  )
}

function Person2() {
  return (
    <div className='person2'>
      <h2>Hasan Mehedi</h2>
    </div>
  )
}

export default App;
