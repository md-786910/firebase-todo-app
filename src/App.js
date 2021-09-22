import React, { useState, useEffect } from 'react';
import "./App.css"
import Todo from "./Todo"
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, deleteField, onSnapshot, addDoc, deleteDoc, updateDoc } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBRYfWgC5mePE3iOicsPYmeLKHHnwDlY4M",
  authDomain: "fir-crud-82eeb.firebaseapp.com",
  databaseURL: "https://fir-crud-82eeb-default-rtdb.firebaseio.com",
  projectId: "fir-crud-82eeb",
  storageBucket: "fir-crud-82eeb.appspot.com",
  messagingSenderId: "903749919373",
  appId: "1:903749919373:web:a6902371af21afd5ceb8c4",
  measurementId: "G-2LR7K78C59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function App() {

  const todoKey = 1;

  const [todo, setTodo] = useState([])
  const [todoUpdate, setTodoUpdate] = useState()


  const addContacHandler = async (props) => {
    const { title, desc } = props
    // set to update document
    setTodoUpdate({ title: title, desc: desc })
    const collectionRef = collection(db, "todos")
    const payload = { title, desc }
    const docRef = await addDoc(collectionRef, payload)
    // store id of document
    // const id = docRef.id
  }


  const delteById = async (props) => {
    await deleteDoc(doc(db, "todos", props));
  }


  const updateById = async (props) => {

    const payload = { title: props.title, desc: props.desc }
    const cityRef = doc(db, 'todos', props.id);
    const updatedata = await updateDoc(cityRef, payload);

  }

  useEffect(() => {
    // fetchDataFromDb()
    onSnapshot(collection(db, "todos"), (snapshot) => {
      setTodo(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    })
  }, [])

  return (
    <div class="App">
      <h1 class="title mb-3">todo app</h1>

      <Todo todo={todo} addContacHandler={addContacHandler} delteById={delteById} key={todoKey} updateById={updateById} />
    </div>
  );
}

export default App;
