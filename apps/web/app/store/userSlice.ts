import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@repo/models/user';


export interface UsersState {
  users: User[];
}

const initialState: UsersState = {
  users: [],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
    },
    addUser(state, action: PayloadAction<User>) {
      state.users.push(action.payload);
    },
  },
});

export const { setUsers, addUser } = userSlice.actions;
export default userSlice.reducer;