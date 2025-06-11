


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserForm from './UserForm';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;  // You can change number of records per page

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    setUsers(res.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    setUsers(users.filter(user => user.id !== id));
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleFormSubmit = async (userData) => {
    if (editingUser) {
      await axios.put(`https://jsonplaceholder.typicode.com/users/${editingUser.id}`, userData);
      setUsers(users.map(u => u.id === editingUser.id ? {...userData, id: editingUser.id} : u));
      setEditingUser(null);
    } else {
      const res = await axios.post('https://jsonplaceholder.typicode.com/users', userData);
      setUsers([...users, {...res.data, id: Math.floor(Math.random()*1000)}]);
    }
  };

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(users.length / usersPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <h2>Users CRUD with Pagination</h2>
      <UserForm onSubmit={handleFormSubmit} initialData={editingUser} />

      <ul>
        {currentUsers.map(user => (
          <li key={user.id}>
            {user.name} ({user.email}) 
            <button onClick={() => handleEdit(user)}>Edit</button> 
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: '20px' }}>
        <button onClick={goToPrevPage} disabled={currentPage === 1}>Previous</button>
        <span style={{ margin: '0 10px' }}>Page {currentPage} of {totalPages}</span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default UserList;



