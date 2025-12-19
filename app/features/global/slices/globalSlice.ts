import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GlobalState {
  isSidebarOpen: boolean;
  theme: 'light' | 'dark' | 'system';
  isLoading: boolean;
}

const initialState: GlobalState = {
  isSidebarOpen: false,
  theme: 'system',
  isLoading: false,
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    setTheme: (state, action: PayloadAction<GlobalState['theme']>) => {
      state.theme = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { toggleSidebar, setTheme, setLoading } = globalSlice.actions;

export default globalSlice.reducer;
