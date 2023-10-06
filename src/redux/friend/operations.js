import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL =
//   'https://chat-back-end-6mf9.onrender.com/chat/';

axios.defaults.baseURL = 'http://localhost:3001/chat';

export const getAllFriends = createAsyncThunk(
  'friends/getAllFriends',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('friends/');
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const addFriend = createAsyncThunk(
  'friends/addFriend ',
  async ({ name, avatarURL, _id }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`friends/${_id}`, {
        name,
        avatarURL,
      });
      console.log(response.data);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
