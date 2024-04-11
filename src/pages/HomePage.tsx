import AppHeader from '../components/common/header/AppHeader';
import SectionComputers from '../components/sections/SectionComputers';
import ProductsProvider from '../providers/ProductsProvider';

export default function HomePage() {
  return (
    <ProductsProvider>
      <div className="bg-perano-200">
        <div className="mx-auto flex min-h-screen flex-col items-center gap-4 p-4 lg:w-[67.5rem]">
          <AppHeader />
          <SectionComputers />
        </div>
      </div>
    </ProductsProvider>
  );
}
