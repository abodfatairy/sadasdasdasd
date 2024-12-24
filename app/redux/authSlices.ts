// import { servType } from "@/data";

import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from "./store";
import axios from "axios";
interface servType {
  id: number;
  name: string;
  time: number;
  price: number;
  employee: string;
}
// import { servType } from "@/data";
export interface CartItem {
  serv: servType;
  qty: number;
}

const initialState: {
  currentUser: { token: string; isAuth: boolean };
  isLoading: boolean;
} = {
  currentUser: { token: "", isAuth: false },
  isLoading: false,
};

export const register = createAsyncThunk(
  "auth/register",
  async (userData: { email: string; password: string }, thunkAPI) => {
    // console.log(userData, "userese");
    try {
      const response = await axios.post(
        "https://ourstorre.runasp.net/api/Users/Login",
        {
          email: userData.email,
          password: userData.password,
        }
      );
      console.log(JSON.stringify(response.data.token, null, 2), "user");

      return response.data.user;
    } catch (err) {
      // @ts-ignore
      // return thunkAPI.rejectWithValue(err.response.data.errors);
      // console.log(thunkAPI.rejectWithValue(err));
      console.log(err);
    }
  }
);

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
        // console.log(action.payload.token, "hey from serv");
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

const productData = (state: RootState) => state.orebi.productData;

export const productQty = createSelector(
  [productData, (productData, productId: number) => productId],
  (productData, productId) =>
    productData.find((el) => el.serv.id === productId)?.qty
);

// export const { addToCart, deleteProduct } = AuthSlice.actions;
export default AuthSlice.reducer;
