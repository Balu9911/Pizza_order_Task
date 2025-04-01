import React, { useState } from 'react';
import toppingsdata from '../Data/ingredients.json'

const Buildpizza = () => {
  const [selectedtoppings, setSelectedtoppings] = useState([])
  const [totalcost, setTotalcost] = useState()

  const handletoppings=(topping)=>{
    if(selectedtoppings.includes(topping)){
      setSelectedtoppings(selectedtoppings.filter(t=>t.id !== topping.id))
    }
    else{
      setSelectedtoppings([...selectedtoppings,topping])
    }
  }

  const Bill=()=>{
    setTotalcost(selectedtoppings.reduce((a,b)=>(a+b.price),0))

  }
  return (
<div className="build-container">
      <p>Pizzeria now gives you options to build your own pizza. Customize your pizza by choosing ingredients from the list below</p>
      <table className="toppings-table">
        <tbody>
          {toppingsdata.map(topping => (
            <tr key={topping.id} className="topping-row">
              <td className="image-box">
                <img src={topping.image} alt={topping.tname} className="topping-image" />
              </td>
              <td className="topping-details">
                <span>{topping.tname}  ₹{topping.price}.00</span>
              </td>
              <td className="topping-checkbox">
                <label>
                  <input className='checkbox'
                    type="checkbox"
                    onChange={() => handletoppings(topping)}
                  />
                  Add
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total-cost">
        <h3>Total Cost: ₹{totalcost}</h3>
        <button className="build-button" onClick={Bill}>Build Ur Pizza</button>
      </div>
    </div>
  );
}

export default Buildpizza





















                    // checked={selectedtoppings.some(t => t.id === topping.id)}
