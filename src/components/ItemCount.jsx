import { useState } from 'react';

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  // Asegurarse de que la cantidad no sea mayor que el stock
  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <button onClick={handleDecrement} className="btn btn-secondary">-</button>
      <span className="mx-2">{count}</span>
      <button onClick={handleIncrement} className="btn btn-secondary">+</button>
      <div className="mt-3">
        <button onClick={() => onAdd(count)} className="btn btn-primary">
          Reservar
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
