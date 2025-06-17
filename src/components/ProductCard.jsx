
// import { useCart } from '../CartContext';

// const ProductCard = ({ car }) => {
//   const { addToCart } = useCart();

//   return (
//     <div className="card">
//       <img src={car.image} className="card-img-top" alt={car.name} />
//       <div className="card-body">
//         <h5 className="card-title">{car.name}</h5>
//         <p className="card-text">£{car.price}</p>
//         <button className="btn btn-primary me-2" onClick={() => addToCart(car)}>
//           Add to Cart
//         </button>
//         <button className="btn btn-success">Buy Now</button>
//       </div>
//     </div>
//   );
// };



import { useCart } from '../CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="card p-3">
      <h5>{product.name}</h5>
      <p>${product.price}</p>
      <button className="btn btn-primary" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};
