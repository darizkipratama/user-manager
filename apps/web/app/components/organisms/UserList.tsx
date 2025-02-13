import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/index.js';
import { setUsers } from '../../store/userSlice.js';
import { Container, Typography, List, ListItem } from '@mui/material';

const UserList: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users.users);

  useEffect(() => {
    // Fetch users from an API or other source

  }, [dispatch]);

  return (
    <Container maxWidth="sm">
      <Typography variant="h4">Users</Typography>
      <List>
        {users.map((user) => (
          <ListItem key={user.id}>{user.name}</ListItem>
        ))}
      </List>
    </Container>
  );
};

export default UserList;