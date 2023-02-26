import React, { useState } from 'react';
import data from './data';

const PizzaOrderingApp = ({ data }) => {
  const [selectedToppings, setSelectedToppings] = useState([]);

  const handleToppingSelection = (topping) => {
    if (selectedToppings.length >= 5) {
      alert('You have reached the maximum number of toppings!');
      return;
    }

    if (selectedToppings.includes(topping)) {
      alert('This topping is already selected!');
      return;
    }

    setSelectedToppings([...selectedToppings, topping]);
  };

  return (
    <div>
      <h1>Pizza Ordering App</h1>

      <div className="turtle-cards">
        {data.map((turtle) => (
          <div key={turtle.name} className="turtle-card">
            <h2>{turtle.name}</h2>
            <img src={turtle.img} alt={turtle.name} />

            <div className="topping-buttons">
              {turtle.pizzaToppings.map((topping) => (
                <button key={topping.name} onClick={() => handleToppingSelection(topping)}>
                  {topping.name}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="selected-toppings">
        <h2>Selected Toppings:</h2>
        <ul>
          {selectedToppings.map((topping) => (
            <li key={topping.name}>
              <img src={topping.img} alt={topping.name} />
              {topping.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PizzaOrderingApp;
