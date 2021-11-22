import React from 'react';
import { useState, useEffect } from 'react';
import './style.css';
import SocialCard from './SocialCard';
import './App.css'

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );
        userData = await response.json();
      } catch (error) {
        console.log(error);
        userData = [];
      }

      setUsers(userData);
    })();
  }, []);

  return (
    <div className="App">
      <h1>Home page</h1>
      <div className="cards-container">
        {users.map((user) => (
          <SocialCard userData={user} key={user.id} />
        ))}
      </div>
    </div>
  );
}