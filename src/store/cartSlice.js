import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const initialState = {
  cartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  cartTotalAmount: 0,
  cartTotalQuantity: 0,
  cartShipping: 12,
  cartDiscount: 22,
  cartSavings: 0,
  cartGrandTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemsToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success(`Item QTY increased`);
      } else {
        const temp = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temp);
        toast.success(`${action.payload.title} added to cart`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    removeItemsFromCart: (state, action) => {
      const removeIndex = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = removeIndex;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      toast.success(`${action.payload.title} removed from cart`);
    },
    increaseItemsQty: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success("Item QTY increased");
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    decreaseCartQty: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        toast.success(`Item QTY decreased`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    getTotals: (state, action) => {
      let { totalAmount, totalQty } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const totalPrice = price * cartQuantity;

          cartTotal.totalAmount += totalPrice;
          cartTotal.totalQty += cartQuantity;
          return cartTotal;
        },
        {
          totalAmount: 0,
          totalQty: 0,
        }
      );
      state.cartTotalAmount = totalAmount;
      state.cartTotalQuantity = totalQty;

      // const shipping = totalAmount + state.cartDiscount;
      // const savings = (state.cartDiscount * shipping) / 100;
      // const grandTotal = shipping - savings;

      // state.cartGrandTotal = grandTotal.toFixed(2) + state.cartShipping;
      // state.cartSavings = savings;

      const shipping = totalAmount + state.cartShipping;
      const savings = (shipping * state.cartDiscount) / 100;
      const grandTotal = shipping - savings;

      state.cartSavings = savings;
      state.cartGrandTotal = grandTotal.toFixed(2);
    },
  },
});

export const {
  addItemsToCart,
  removeItemsFromCart,
  increaseItemsQty,
  decreaseCartQty,
  getTotals,
} = cartSlice.actions;
export default cartSlice.reducer;
