import './App.css';

function App() {

  const products = [
    {
      name: 'Laptoop',
      price: 41000,
      storage: '500GB'
    },
    {
      name: 'iPhone',
      price: 40000,
      storage: '16GB'
    },
    {
      name: 'Smart Watch',
      price: 1800,
      storage: '2Gb'
    }

  ]

  return (
    <div className="App">
      {
        products.map(product =>
          <Products
            name={product.name}
            price={product.price}
            storage={product.storage}>
          </Products>)
      }
    </div>
  );
}


function Products(props) {
  return (
    <div className='product'>
      <h2>Name: {props.name}</h2>
      <h4>Price: {props.price}</h4>
      <h4>Storage: {props.storage}</h4>
    </div>
  )
}



export default App;
