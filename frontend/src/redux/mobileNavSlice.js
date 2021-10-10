import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false,
};

export const mobileNavSlice = createSlice({
  name: 'mobileNav',
  initialState,
  reducers: {
    changeNav: (state) => {
      state.value = !state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeNav } = mobileNavSlice.actions;

export default mobileNavSlice.reducer;
