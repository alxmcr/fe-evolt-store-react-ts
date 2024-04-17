import { ProductToCartAction, ShoppingCart } from '../@types/reducerTypes';

export default function shoppingCartReducer(state: ShoppingCart, action: ProductToCartAction): ShoppingCart {
  switch (action.type) {
    case 'add_product_to_cart': {
      return { ...state, productsInCart: [...state.productsInCart, action.payload] };
    }

    case 'remove_product_from_cart': {
      return {
        ...state,
        productsInCart: state.productsInCart.filter((p) => p.id !== action.payload.productId),
      };
    }

    case 'update_product_to_cart': {
      return {
        ...state,
        productsInCart: state.productsInCart.map((p) => {
          if (p.id === action.payload.id) {
            return action.payload;
          }
          return p;
        }),
      };
    }

    case 'increase_quantity_one_by_one_product_in_cart': {
      return {
        ...state,
        productsInCart: state.productsInCart.map((p) => {
          if (p.id === action.payload.productId) {
            if (p.quantity + 1 <= p.stock) {
              return {
                ...p,
                quantity: p.quantity + 1,
              };
            }
          }
          return p;
        }),
      };
    }

    case 'decrease_quantity_one_by_one_product_in_cart': {
      return {
        ...state,
        productsInCart: state.productsInCart.map((p) => {
          if (p.id === action.payload.productId) {
            if (p.quantity - 1 >= 1) {
              return {
                ...p,
                quantity: p.quantity - 1,
              };
            }
          }
          return p;
        }),
      };
    }

    default: {
      throw Error(`Unknown action`);
    }
  }
}
