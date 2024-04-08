import { ProductData } from '../../@types/appTypes';
import Icon16x16Plus from '../@icons/16x16/Icon16x16Plus';
import BoxProductImage from '../boxes/BoxProductImage';

type Props = {
  product: ProductData;
};

export default function CardProduct({ product }: Props) {
  if (product === null || product === undefined) {
    return null;
  }

  return (
    <article className="rounded-md bg-white">
      <header className="min-h-14 px-[.375rem] py-[.625rem]">
        <h3 className="text-[.625rem] uppercase text-perano-200">
          {product.category}
        </h3>
        <h2 className="truncate text-[1rem] font-bold">{product.name}</h2>
      </header>
      <BoxProductImage
        photoFilename={product.photoFilename}
        photoAlt={product.photoAlt}
        photoSource={product.photoSource}
      />
      <footer className="flex flex-col gap-3 px-[.375rem] py-[.625rem]">
        <p className="text-[.9375rem] font-semibold">
          {product.priceCurrency} {product.priceValue}
        </p>
        <button className="flex min-h-[1.625rem] items-center justify-center gap-2 rounded-lg border border-perano-200">
          <span className="text-[.5625rem] font-semibold uppercase">
            Add to cart
          </span>
          <Icon16x16Plus />
        </button>
      </footer>
    </article>
  );
}
