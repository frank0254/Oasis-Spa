import { Link } from "react-router-dom";
import { useReservations } from "../Context/ReservationContext";

const CartWidget = () => {
  const { reservas } = useReservations(); 

  return (
    <Link to="/cart" style={{ cursor: 'pointer' }}>
      🛒 ({reservas.length}) 
    </Link>
  );
};

export default CartWidget;
