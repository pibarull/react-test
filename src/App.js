import React from 'react';
import { useState, useEffect } from 'react';
import './style.css';
import SocialCard from './SocialCard';

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );
        userData = (await response.json()).results;
        console.log(userData);
      } catch (error) {
        console.log(error);
        userData = [];
      }

      setUsers(userData);
    })();
  }, []);

  return (
    <div className="App">
      <h1>Social Cards</h1>
      {users.map((user, index) => (
        <SocialCard userData={user} key={index} />
      ))}
    </div>
  );
}
