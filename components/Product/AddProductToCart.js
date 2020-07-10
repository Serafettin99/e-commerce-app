import { useState, useEffect } from 'react';
import { Input } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import baseUrl from '../../utils/baseUrl';
import axios from 'axios';
import catchErrors from '../../utils/catchErrors';
import cookie from 'js-cookie';

const AddProductToCart = ({ user, productId }) => {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let timeout;
    if (success) {
      timeout = setTimeout(() => {
        setSuccess(false);
      }, 5000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [success]);

  const handleAddProductToCart = async () => {
    try {
      setLoading(true);
      const url = `${baseUrl}/api/cart`;
      const payload = { quantity, productId };
      const token = cookie.get('token');
      const headers = { headers: { Authorization: token } };
      await axios.put(url, payload, headers);
      setSuccess(true);
    } catch (error) {
      catchErrors(error, window.alert);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Input
      type='number'
      min='1'
      placeholder='Quantity'
      value={quantity}
      onChange={(e) => setQuantity(Number(e.target.value))}
      action={
        user && success
          ? {
              color: 'blue',
              content: 'Item Added!',
              icon: 'plus cart',
              disabled: true,
            }
          : user
          ? {
              color: 'orange',
              content: 'Add to Cart',
              icon: 'plus cart',
              loading: loading,
              disabled: loading,
              onClick: handleAddProductToCart,
            }
          : {
              color: 'blue',
              content: 'Sign Up To Purchase',
              icon: 'signup',
              onClick: () => router.push('/signup'),
            }
      }
    />
  );
};

export default AddProductToCart;
