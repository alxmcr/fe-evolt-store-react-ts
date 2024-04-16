import { TagFilterAction, TagFilterProduct } from '../@types/filterTypes';
import { ProductInCart } from '../@types/shoppingCartTypes';

export const checkExistsRangePriceByCategory = (tags: TagFilterProduct[] = [], categoryTag = '') => {
  if (tags.length === 0) return true;

  return tags.findIndex((t) => t.category === categoryTag) === -1;
};

export const checkIfProductWasAddedToCart = (
  productsInCart: ProductInCart[] = [],
  productToCheck: ProductInCart,
) => {
  if (productsInCart.length === 0) return false;
  if (productToCheck === null || productToCheck === undefined) return false;

  return productsInCart.findIndex((pr) => pr.id === productToCheck.id) === -1;
};

export const findProductInCartById = (productsInCart: ProductInCart[] = [], productId = '') => {
  if (productsInCart.length === 0) return null;
  if (productId === '') return null;

  for (const productInCart of productsInCart) {
    if (productInCart.id === productId) {
      return productInCart;
    }
  }
  return null;
};

export const handleAddTagRangePrice = (
  tagFilters: TagFilterProduct[] = [],
  minPrice = 0,
  maxPrice = 0,
  dispatchTagsFilter: (value: TagFilterAction) => void,
) => {
  const textTag = `${minPrice} - ${maxPrice}`;
  const isNewTag = checkExistsRangePriceByCategory(tagFilters, 'range-price');

  // Build tag
  const tag: TagFilterProduct = {
    id: 'tag-price-range-001',
    category: 'range-price',
    valueText: textTag,
    valueId: 'range-price',
  };

  if (isNewTag) {
    dispatchTagsFilter({
      type: 'added_tag_filter',
      payload: tag,
    });
  } else {
    dispatchTagsFilter({
      type: 'updated_tag_filter',
      payload: { ...tag, valueText: textTag },
    });
  }
};
