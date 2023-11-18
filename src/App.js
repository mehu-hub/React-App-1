import './App.css';

function App() {
  const students = [
    {name:"Alomgir Vai", id:'22'},
    {name:"Nayok BappaRaz", id:'23'},
    {name:"Europe Riyaz", id:'24'},
    {name:"Mastermind Nisho", id:'25'},
  ]

  return (
    <div className="App">

    {
      students.map(student => <Person name={student.name} id={student.id}></Person>)
    } 
       
    </div>
  );
}

function Person(props) {
  console.log(props)
  return (
    <div className='person'>
      <h2>Name: {props.name}</h2>
      <p>ID: {props.id}</p>
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
