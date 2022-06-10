import Rating from './Rating';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useContext } from 'react';
import { Store } from '../Store';

function Product(props) {
  const { product } = props;
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };

  return (
    <div className="product">
      <a href={`/product/${product.slug}`}>
        <img src={product.image} alt={product.name} />
      </a>
      <div className="product-info">
        <a href={`/product/${product.slug}`}>
          <p>{product.name}</p>
        </a>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <p>
          <strong>₹{product.price}</strong>
        </p>
        {product.countInStock === 0 ? (
          <Button variant="light" disabled>
            Out of stock
          </Button>
        ) : (
          <Button onClick={() => addToCartHandler(product)}>Add to cart</Button>
        )}
      </div>
    </div>
  );
}
export default Product;
