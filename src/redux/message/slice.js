import { createSlice } from '@reduxjs/toolkit';
import {
    getMessages
} from './operations';

const messageSlice = createSlice({
  name: 'message',
  initialState: {
    items:[]
  },
  extraReducers: {
    [getMessages.fulfilled](state, { payload }) {
        state.items = payload
    },
  },
});

export default messageSlice.reducer;