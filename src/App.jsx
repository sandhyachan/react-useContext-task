import './App.css'
import { useContext } from 'react'
import { ProductContext } from './context/ProductContext'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const {data, handleIncrement, handleDecrement, subtotal, items} = useContext(ProductContext)

  return (
    <>
    <div className='container-fluid'>
      <div className='container'>

          {data.map((product, index)=>(
            <div className='row product-card' key={index}>
            <div className='col-2 align-self-center'>
            <img src={product.image} alt={product.title}/>
          </div>
          <div className='col-7'>
            <h4>{product.title}</h4>
            <p>{product.description}</p>
          </div>
          <div className='col-1 d-flex flex-column justify-content-center text-center'>
            <button type='button' className='btn btn-light' onClick={()=>handleIncrement(index)}>+</button>
            <h5>{product.quantity}</h5>
            <button type='button' className='btn btn-light' onClick={()=>handleDecrement(index)}>-</button>
          </div>
          <div className='col-2 align-self-center'>
          <h4>${product.price}</h4>
          </div>
            </div>
          ))}
      </div>

      <div className="container">

      <div className="row">
            <div className="col-6">
              <h6>TOTAL CART ITEMS:</h6>
            </div>
            <div className="col-6 text-end">
              <h6>{items}</h6>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <h6>SUBTOTAL:</h6>
            </div>
            <div className="col-6 text-end">
              <h6>${subtotal}</h6>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <h6>SHIPPING:</h6>
            </div>
            <div className="col-6 text-end">
              <h6>FREE</h6>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <h5>TOTAL:</h5>
            </div>
            <div className="col-6 text-end">
              <h5>${subtotal}</h5>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default App
