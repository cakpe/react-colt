import './App.css';
import { useState, useEffect } from "react"
import { db } from './firebase-config';
import { collection, getDocs, addDoc, updateDoc, doc } from 'firebase/firestore'

function App() {
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);

  //remember that to call an async function in a useEffect, you have to create it in the useEffect.
  useEffect(() => {
    //below is how to point to a collection in firestore
    const usersCollectionRef = collection(db, "users");

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
  }, [users]);

  //function should be async because it deals with firestore
  const createUser = async() => {
    //below is how to point to a collection in firestore
    const usersCollectionRef = collection(db, "users");

    await addDoc(usersCollectionRef, {name: newName, age: Number(newAge)});
    setNewAge(0);
    setNewName('');
  }

  const updateUser = async(id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = { age: age+1 };
    await updateDoc(userDoc, newFields);
  }

  return (
    <div className="App">

      {/* I think forms are eaier than colt taught */}
      <input placeholder='Name...' onChange={(e) => {
        e.preventDefault();
        setNewName(e.target.value);
      }}
      value={newName}/>
      <input placeholder='age...' type={'number'} onChange={(e) => {
        e.preventDefault();
        setNewAge(e.target.value);
      }}
      value={newAge}/>
      <button onClick={createUser}>Add user</button>

      {users.map(user => {
        return <div key={user.id}> 
          <h1>Name: {user.name}</h1>
          <p>Age: {user.age}</p>
          <button onClick={() => updateUser(user.id, user.age)}>Increment age</button>
        </div>
      })}
    </div>
  );
}

export default App;
