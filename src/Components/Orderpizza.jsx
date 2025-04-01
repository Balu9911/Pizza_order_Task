import React from 'react'
import pizzaData from '../Data/pizza.json'

const Orderpizza = () => {
  return (
    <div className="order-container">
      {/* Menu */}
      <div className="pizza-tab">
        {pizzaData.map(pizza => (
          <div key={pizza.id} className="pizza-cards">
            <div>
            <h3>{pizza.name}</h3>
            <span className="type-indicator">{pizza.type === 'veg' ? '🟩' : '🟥'}</span>
            <p>₹{pizza.price}.00</p>
            </div>
            
            <div>
            <p>{pizza.description}</p>
            <p><strong>Ingredients : </strong> {pizza.ingredients.join(', ')}</p>
            <p><strong>Toppings : </strong> {pizza.topping.join(', ')}</p>
            </div>

            <div>
            <img src={pizza.image} alt={pizza.name} className='pizza-img' />
            <button  className="button">
              Add to Cart
            </button>
            </div>
          </div>

        ))}

      </div>
    </div>
  )
}

export default Orderpizza
