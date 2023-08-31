import { createSlice } from '@reduxjs/toolkit';
import { getMessages, addMessageDB } from './operations';

const messageSlice = createSlice({
  name: 'message',
  initialState: {
    items: [],
  },
  extraReducers: {
    [getMessages.fulfilled](state, { payload }) {
      state.items = payload;
    },
    [addMessageDB.fulfilled](state, { payload }) {
      state.items.push(payload);
    },
  },
});

export default messageSlice.reducer;
