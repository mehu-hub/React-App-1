import './App.css';

function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person2></Person2>
      <Person></Person>
      <Person2></Person2>
      <Person></Person>
      <Person2></Person2>
      <Person></Person>
      <Person2></Person2>
    </div>
  );
}

function Person() {
  return (
    <div className='person'>
      <h2>Mehedi Hasan</h2>
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
