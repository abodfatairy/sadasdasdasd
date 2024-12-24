import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface servType {
  id: number;
  name: string;
  time: number;
  price: number;
  employees: string[];
}
export interface CartItem {
  serv: servType;
  qty: number;
  employee: string;
}

export interface Cart {
  productData: CartItem[];
}
const initialState: Cart = {
  productData: [
    // {
    //   serv: {
    //     id: Number(undefined),
    //     name: "",
    //     time: 0,
    //     price: 0,
    //     employees: [],
    //   },
    //   qty: 0,
    //   employee: "",
    // },
  ],
};

export const orebSlice = createSlice({
  name: "orebi",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemExist = state.productData.find(
        (item) => item.serv.id === action.payload.id
      );
      // console.log(JSON.stringify(state, null, 2), "hi");

      if (itemExist) {
        itemExist.qty += action.payload.qty;
      } else {
        state.productData.push({
          serv: action.payload,
          qty: 1,
          employee: action.payload.employees[0],
        });
      }
    },
    setEmployee: (state, action) => {
      const itemExist = state.productData.find(
        (item) => item.serv.id === action.payload.id
      );

      if (itemExist?.qty) {
        itemExist.employee = action.payload.employee;
      } else {
        return;
      }
    },
    increaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item) => item.serv.id === action.payload
      );
      // console.log(action, "action", JSON.stringify(state, null, 2), "state");
      // if (existingProduct) {
      //   console.log("done");
      // } else {
      //   console.log("nono");
      // }

      existingProduct && existingProduct.qty++;
      // console.log(existingProduct,'as');
    },

    decreaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item) => item.serv.id === action.payload
      );
      if (existingProduct?.qty === 1) {
        existingProduct.qty === 1;
      } else {
        existingProduct && existingProduct.qty--;
      }
    },
    deleteProduct: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item.serv.id !== action.payload
      );
    },

    resetCart: (state) => {
      state.productData = [];
    },
  },
});

const productData = (state: RootState) => state.orebi.productData;

export const productQty = createSelector(
  [productData, (productData, productId: number) => productId],
  (productData, productId) =>
    productData.find((el) => el.serv.id === productId)?.qty
);
export const getEmployee = createSelector(
  [productData, (productData, productId: number) => productId],
  (productData, productId) =>
    productData.find((el) => el.serv.id === productId)?.employee
);

export const {
  addToCart,
  setEmployee,
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
  resetCart,
} = orebSlice.actions;
export default orebSlice.reducer;
