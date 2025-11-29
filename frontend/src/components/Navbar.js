import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const token = localStorage.getItem('token');
  const role = token ? JSON.parse(atob(token.split('.')[1])).role : null;

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('rememberMe');
    window.location.href = '/';
  };

  return (
    <nav>
      {token ? (
        <>
          <Link to='/profile'>Profile</Link>
          {role === 'admin' && <Link to='/admin'>Admin</Link>}
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to='/'>Login</Link>
          <Link to='/signup'>Signup</Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;