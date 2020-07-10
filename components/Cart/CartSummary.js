import { useState, useEffect } from 'react';
import { Divider, Segment, Button } from 'semantic-ui-react';
import calculateCartTotal from '../../utils/calculateCartTotal';

const CartSummary = ({ products }) => {
  const [cartAmount, setCartAmount] = useState(false);
  const [stripeAmount, setStripeAmount] = useState(false);

  const [isCartEmpty, setCartEmpty] = useState(false);

  useEffect(() => {
    const { cartTotal, stripeTotal } = calculateCartTotal(products);
    setCartAmount(cartTotal);
    setStripeAmount(stripeTotal);
    setCartEmpty(products.length === 0);
  }, [products]);
  return (
    <>
      <Divider />
      <Segment clearing size='large'>
        <strong> Sub total:</strong> ${cartAmount}
        <Button
          icon='cart'
          color='teal'
          floated='right'
          content='checkout'
          disabled={isCartEmpty}
        />
      </Segment>
    </>
  );
};

export default CartSummary;
