import React, { useState} from "react";

const ShoeCard = ({ id, name, image }) => {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    setCount(count + 1);
    
  }
  const handleSub = () => {
    setCount(count - 1);
  }
  const shoeId = null;
 
  return (
    <div data-cy={`shoe-card-wrapper-${id}`}>
      <img data-cy="shoe-card-image" alt="shoe" src={image}/>
      <div>
        <div data-cy="shoe-name">{name}</div>
        <div>
          In Cart:
          <div data-cy="shoe-count">0</div>
          <button data-cy="increment-shoe-count-button" onClick={handleAdd}>+</button>
          <button data-cy="decrement-shoe-count-button" onClick={handleSub}>-</button>
        </div>
      </div>
    
    </div>
  );

};

export default ShoeCard;