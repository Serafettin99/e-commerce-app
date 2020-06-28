import { useEffect } from 'react';
import axios from 'axios';
import ProductList from '../components/Index/ProductList';

function Home({ products }) {
  return <ProductList products={products} />;
}

// So in order to use this home function we have to execute it as a kind of method on the component.
Home.getInitialProps = async () => {
  // fetch data on server
  const url = 'http://localhost:3000/api/products';
  const response = await axios.get(url);
  return { products: response.data };
  // return response data as an object
  // note: this object will be merged with existing props
};

export default Home;
