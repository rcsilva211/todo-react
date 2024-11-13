import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: Number(''),
  },
  reducers: {
    increment: (state, action) => {
      const amount = action.payload;
      state.value += amount;
    },
    decrement: (state, action) => {
      const amount = action.payload;
      state.value -= amount;
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
