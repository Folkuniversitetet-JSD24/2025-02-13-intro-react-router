import { ReactElement } from 'react';
import { useParams } from 'react-router-dom';

const products = [
  {
    id: '1',
    name: 'Jacket',
  },
  {
    id: '2',
    name: 'Trousers',
  },
  {
    id: '3',
    name: 'T-Shirt',
  },
  {
    id: '4',
    name: 'Shoes',
  },
];

export function ProductsPage(): ReactElement {
  const params = useParams();
  const productToShow = products.find((product) => product.id === params.id);

  // Early return if 'productToShow' is undefined.
  if (productToShow === undefined) {
    return (
      <main className="products-page">
        <h1>Prodcuts Page</h1>
        <p>No product was found...</p>
      </main>
    );
  }

  return (
    <main className="products-page">
      <h1>Prodcuts Page</h1>
      <p>The products that is being display:</p>
      <p>
        id: {productToShow.id} - {productToShow.name}
      </p>
    </main>
  );
}
