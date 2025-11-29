import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Admin() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:4000/admin/users', { headers: { Authorization: `Bearer ${token}` } });
        setUsers(res.data);
      } catch (err) {
        setError('Failed to load users');
      }
    };
    fetchUsers();
  }, []);

  if (error) return <p style={{color:'red'}}>{error}</p>;

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        {users.map(user => <li key={user._id}>{user.email} ({user.role})</li>)}
      </ul>
    </div>
  );
}

export default Admin;