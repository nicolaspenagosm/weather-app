import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export interface UiState {
  isDark: boolean;
}

const initialState: UiState = {
  isDark: true,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    setIsDark(state, { payload }: PayloadAction<boolean>) {
      state.isDark = payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;