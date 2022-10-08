import React, { useState } from 'react';

const data = [
  {
    id: 1,
    product: "Awesome product",
    price: 10.99
  }
];

function App() {

  const [products, setProducts] = useState(data);

  const [amount, setAmount] = useState(1);

  const increaseAmount = (id) => {
    setAmount(amount + 1);
    }
  
  const decreaseAmount = (id) => {
    if (amount > 0) {
        setAmount(amount - 1);
    }
    else {
      setAmount(0);
    }
  }

  const removeAll = () => {
    setProducts([]);
    document.querySelector(".empty").style.display = "none";
    setAmount(0);
  }

  return (
    <div className='container'>
      <h1>Your shopping cart</h1>
      <p>You have {amount} product(s) in your cart.</p>
      {products.map((item) => {
        const {id, product, price} = item;
        const total = () => {return price * amount}
        return (
          <div key={id} className="item">
            <span>{product}</span>
            <span>${total()}</span>
            <button className="btn" onClick={() => decreaseAmount(id)}>-</button>
            <span>{amount}</span>
            <button className="btn" onClick={() => increaseAmount(id)}>+</button>
          </div>
        )
      })}
      <button className="remove empty" onClick={() => removeAll()}>Empty cart</button>
    </div>
  )
};    

export default App;
