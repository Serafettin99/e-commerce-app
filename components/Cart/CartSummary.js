import { useState, useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Divider, Segment, Button } from 'semantic-ui-react';
import calculateCartTotal from '../../utils/calculateCartTotal';

const CartSummary = ({ products, handleCheckout, success }) => {
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
        <StripeCheckout
          name='React Reserve'
          amount={stripeAmount}
          image={products.length > 0 ? products[0].product.mediaUrl : ''}
          currency='USD'
          shippingAddress={true}
          billingAddress={true}
          zipCode={true}
          stripeKey='pk_test_EiJEeQLzjOGqNMjUBYV6SYc400NzYDJNwG'
          token={handleCheckout}
          triggerEvent='onClick'
        >
          <Button
            icon='cart'
            color='teal'
            floated='right'
            content='checkout'
            disabled={isCartEmpty || success}
          />
        </StripeCheckout>
      </Segment>
    </>
  );
};

export default CartSummary;
