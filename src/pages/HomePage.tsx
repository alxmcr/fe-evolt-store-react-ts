import CartDialogProvider from '../@providers/CartDialogProvider';
import FilterCriteriasProvider from '../@providers/FilterCriteriasProvider';
import ProductsProvider from '../@providers/ProductsProvider';
import ShoppingCartProvider from '../@providers/ShoppingCartProvider';
import TagsFilterProvider from '../@providers/TagsFilterProvider';
import AppHeader from '../components/common/header/AppHeader';
import ModalShoppingCart from '../components/modals/ModalShoppingCart';
import SectionComputers from '../components/sections/SectionComputers';

export default function HomePage() {
  return (
    <CartDialogProvider>
      <ProductsProvider>
        <FilterCriteriasProvider>
          <TagsFilterProvider>
            <ShoppingCartProvider>
              <div className="bg-perano-200">
                <div className="mx-auto flex min-h-screen flex-col items-center gap-4 p-4 lg:w-[67.5rem]">
                  <AppHeader />
                  <SectionComputers />
                  <ModalShoppingCart />
                </div>
              </div>
            </ShoppingCartProvider>
          </TagsFilterProvider>
        </FilterCriteriasProvider>
      </ProductsProvider>
    </CartDialogProvider>
  );
}
