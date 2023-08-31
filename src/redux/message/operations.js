import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =
  'https://chat-back-end-6mf9.onrender.com/chat/';

export const getMessages = createAsyncThunk(
  'message/getMessages',
  async ({ room }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `messages/chat/${room}`
      );
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
      const response = await axios.post(
        `messages/chat/${params.room}`,
        {
          roomId: params.room,
          ...data,
        }
      );
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
