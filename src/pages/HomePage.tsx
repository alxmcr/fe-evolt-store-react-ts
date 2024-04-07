import CardProduct from '../components/cards/CardProduct';
import AppHeader from '../components/common/header/AppHeader';
import useProducts from '../hooks/useProducts';

export default function HomePage() {
  const { products } = useProducts();
  console.log('🚀 ~ HomePage ~ products:', products);

  return (
    <main className="h-screen bg-perano-100 p-4">
      <AppHeader />
      <div>
        <CardProduct />
      </div>
    </main>
  );
}
