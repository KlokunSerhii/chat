import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
import { options } from 'options/configMessage';

// axios.defaults.baseURL =
//   'https://chat-back-end-6mf9.onrender.com/chat';
axios.defaults.baseURL = 'http://localhost:3001/chat';

const message = Notiflix.Notify;

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = token => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(
        '/users/register',
        credentials
      );
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      message.failure(
        '😡 Sorry, something went wrong. This user may not exist. Please try again',
        options
      );
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      message.failure(
        '😡 Sorry, something went wrong. Maybe this user already exists. Please try again',
        options
      );
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      clearAuthHeader();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (!persistedToken) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    setAuthHeader(persistedToken);
    try {
      const response = await axios.get('/users/current');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  'auth/updateAvatar',
  async (file, thunkAPI) => {
    try {
      const formData = new FormData(file);
      const response = await axios.patch('/users/avatars', formData);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const updateUserData = createAsyncThunk(
  'auth/updateUserData',
  async ({ email, password, name, avatarURL }, thunkAPI) => {
    try {
      const response = await axios.patch('/users/current', {
        email,
        password,
        name,
        avatarURL,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
