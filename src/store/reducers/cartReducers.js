import { ADD_TO_CART, REMOVE_FROM_CART } from "../action/cartActions";
import { cartItems } from "../initialValues/cartItems";
const initialState = {
  cartItems: cartItems,
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      let product = state.cartItems.find((c) => c.product.id === payload.id);
      //   ekledigim producttan varsa
      if (product) {
        product.quentity++;
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { quentity: 1, product: payload }],
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((c) => c.product.id !== payload.id),
      };

    default:
      return state;
  }
};

export default cartReducer;
