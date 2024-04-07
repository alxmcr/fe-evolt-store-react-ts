import { ProductData } from '../../@types/appTypes';
import Icon15x15Plus from '../@icons/15x15/Icon15x15Plus';
import BoxProductImage from '../boxes/BoxProductImage';

type Props = {
  product: ProductData;
};

export default function CardProduct({ product }: Props) {
  if (product === null || product === undefined) {
    return null;
  }

  return (
    <article className="h-[20.25rem] w-[9.75rem] rounded-md bg-white">
      <header className="px-[.375rem] py-[.625rem]">
        <h3 className="text-[.625rem] uppercase text-perano-200">
          {product.category}
        </h3>
        <h2 className="text-[1rem] font-bold">{product.name}</h2>
      </header>
      <BoxProductImage
        photoFilename={product.photoFilename}
        photoAlt={product.photoAlt}
      />
      <footer className="px-[.375rem] py-[.625rem]">
        <p className="text-[.9375rem] font-semibold">
          {product.priceCurrency} {product.priceValue}
        </p>
        <button className="flex items-center justify-center">
          <span className="uppercase">Add to cart</span>
          <Icon15x15Plus />
        </button>
      </footer>
    </article>
  );
}
