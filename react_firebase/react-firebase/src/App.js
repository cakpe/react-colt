import './App.css';
import { useState, useEffect } from "react"
import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore'

function App() {
  const [users, setUsers] = useState([]);

  //below is how to point to a collection in firestore
  const usersCollectionRef = collection(db, "users");

  //remember that to call an async function in a useEffect, you have to create it in the useEffect.
  useEffect(() => {
    const getUsers = async() => {
      try {
        const data = await getDocs(usersCollectionRef);
        setUsers(data.docs.map(doc => (
          {...doc.data(), id: doc.id}
        )))
      } catch(e) {
        alert(e);
      }
    };

    getUsers();
  }, []);

  return (
    <div className="App">
      {users.map(user => {
        return <div key={user.id}> 
          <h1>Name: {user.name}</h1>
          <p>Age: {user.age}</p>
        </div>
      })}
    </div>
  );
}

export default App;
