import CardProduct from '../components/cards/CardProduct';
import AppHeader from '../components/common/header/AppHeader';
import useProducts from '../hooks/useProducts';
import { computer001 } from '../mocks/mock-products-computers-data';

export default function HomePage() {
  const { products } = useProducts();
  console.log('🚀 ~ HomePage ~ products:', products);

  return (
    <main className="flex min-h-screen flex-col gap-4 bg-perano-100 p-4">
      <AppHeader />
      <div>
        <CardProduct product={computer001} />
      </div>
    </main>
  );
}
