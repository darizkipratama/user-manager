"use client";
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/index';
import { setUsers, selectUser } from '../../store/userSlice';
import { Container, Typography, List, ListItem } from '@mui/material';
import Button from '../atoms/Button';
import EditUserForm from '../molecules/EditUserForm';
import { User } from '@repo/models/user';


const UserList: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users.users);
  const selectedUser = useSelector((state: RootState) => state.users.selectedUser);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Fetch users from an API or other source
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/users');
        const data = await response.json();
        dispatch(setUsers(data));
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    };

    fetchUsers();
  }, [dispatch]);

  const handleEdit = (user: User): void => {
    dispatch(selectUser(user));
    setIsEditing(true);
  }

  const handleSave = (updatedUser: User) => {
    // Handle save logic here
    setIsEditing(false);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4">Users</Typography>
      {isEditing && selectedUser ? (
        <EditUserForm user={selectedUser} onSave={handleSave} />
      ) : (
        <List>
          {users.map((user) => (
            <ListItem key={user.id}>
              {user.name} - {user.email}
              <Button label="Edit" onClick={() => handleEdit(user)}/>
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default UserList;