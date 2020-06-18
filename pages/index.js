import { useEffect } from 'react';
import axios from 'axios';

function Home({ products }) {
  console.log(products);
  const getProducts = async () => {
    const url = 'http://localhost:3000/api/products';
    const response = await axios.get(url);
    console.log(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return <>home</>;
}

Home.getInitialProps = async () => {
  // fetch data on server
  const url = 'http://localhost:3000/api/products';
  const response = await axios.get(url);
  return { products: response.data };
  // return response data as an object
  // note: this object will be merged with existing props
};

export default Home;
