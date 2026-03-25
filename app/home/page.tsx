// app/home/page.tsx
import ProductCard from '../../components/ProductCard';

const products = [
  { id: '1', name: 'Product 1', price: 100, image: '/product1.jpg' },
  { id: '2', name: 'Product 2', price: 150, image: '/product2.jpg' },
  { id: '3', name: 'Product 3', price: 200, image: '/product3.jpg' },
 
];

const Home = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;