import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@repo/models/user';


export interface UsersState {
  users: User[];
  selectedUser: User | null;
}

const initialState: UsersState = {
  users: [],
  selectedUser: null,
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
    selectUser(state, action: PayloadAction<User>) {
      state.selectedUser = action.payload;
    },
    updateUser(state, action: PayloadAction<User>) {
      const index = state.users.findIndex(user => user.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
  },
});

export const { 
  setUsers, 
  addUser,
  selectUser,
  updateUser,
} = userSlice.actions;
export default userSlice.reducer;