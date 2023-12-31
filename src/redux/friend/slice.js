import { createSlice } from '@reduxjs/toolkit';

import { getAllFriends, addFriend, deleteFriend } from './operations';

const friendsSlice = createSlice({
  name: 'friends',
  initialState: {
    friendsList: [],
  },
  extraReducers: {
    [getAllFriends.fulfilled](state, { payload }) {
      state.friendsList = payload;
    },
    [addFriend.fulfilled](state, { payload }) {
      state.friendsList.push(payload);
    },

    [deleteFriend.fulfilled](state, { payload }) {
      const index = state.friendsList.findIndex(
        friend => friend._id === payload._id
      );
      state.friendsList.splice(index, 1);
    },
  },
});

export default friendsSlice.reducer;
