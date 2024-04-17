import { ProductInCart } from '../../@types/shoppingCartTypes';
import { formatPriceWithDecimals } from '../../helpers/helpers-format';
import Icon16x16Add from '../@icons/16x16/Icon16x16Add';
import Icon16x16Close from '../@icons/16x16/Icon16x16Close';
import Icon16x16Remove from '../@icons/16x16/Icon16x16Remove';
import BoxProductImageCover from '../boxes/boxes-images/BoxProductImageCover';

type Props = {
  productInCart: ProductInCart;
};

export default function CardProductInCart({ productInCart }: Props) {
  return (
    <article className="flex h-[120px] w-[280px] gap-[8px] border border-perano-600 bg-white p-[10px] md:h-[140px] md:w-[314px] lg:h-[154px] lg:w-[370px]">
      <BoxProductImageCover photoFilename={productInCart.photoFilename} photoAlt={productInCart.photoAlt} />
      <div className="flex w-[152px] flex-col justify-between gap-2 md:w-[166px] lg:w-[208px]">
        <h3 className="truncate font-black">{productInCart.name}</h3>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <button className="flex size-[24px] items-center justify-center bg-perano-500 text-white md:size-[28px] lg:size-[32px]">
              <Icon16x16Add />
            </button>
            <span className="font-semibold">{productInCart.quantity}</span>
            <button className="flex size-[24px] items-center justify-center bg-perano-500 text-white md:size-[28px] lg:size-[32px]">
              <Icon16x16Remove />
            </button>
          </div>
          <button className="flex size-[24px] items-center justify-center bg-pink-500 text-white md:size-[28px] lg:size-[32px]">
            <Icon16x16Close />
          </button>
        </div>
        <p className="font-semibold">
          {`${productInCart.priceCurrency} ${formatPriceWithDecimals(productInCart.priceValue * productInCart.quantity)}`}
        </p>
      </div>
    </article>
  );
}
