import { createSlice } from '@reduxjs/toolkit';

import { getAllFriends, addFriend } from './operations';

const friendsSlice = createSlice({
  name: 'friends',
  initialState: {
    friendsList: {
      name: '',
      avatarURL: '',
    },
  },
  extraReducers: {
    [getAllFriends.fulfilled](state, { payload }) {
      state.friendsList = payload;
    },
    [addFriend.fulfilled](state, { payload }) {
      // state.friendsList.push(payload);
    },
  },
});

export default friendsSlice.reducer;
