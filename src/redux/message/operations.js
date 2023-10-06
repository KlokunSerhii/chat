import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =
  'https://chat-back-end-6mf9.onrender.com/chat/';

// axios.defaults.baseURL = 'http://localhost:3001/chat';

export const getMessages = createAsyncThunk(
  'message/getMessages',
  async (room, { rejectWithValue }) => {
    try {
      const response = await axios.get(`messages/${room}`);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const addMessageDB = createAsyncThunk(
  'message/addMessageDB ',
  async ({ params, data }, thunkAPI) => {
    try {
      const response = await axios.post(`messages/${params.room}`, {
        roomId: params.room,
        ...data,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
