import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: {
    language: 'en',
  },
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {setLanguage} = languageSlice.actions;
export const languageSelector = state => state.language.value;
export default languageSlice.reducer;
