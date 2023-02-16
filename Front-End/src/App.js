import './App.css';
import React, { useState, useEffect, createContext } from 'react';
import Page from './Components/Page';
import Add from './Components/Add';
import Show from './Components/Show';
import Signup from './Components/Signup';
import Login from './Components/Login';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const Global = createContext();
function App() {

  const [data, setData] = useState([]);
  const [data1, setData1] = useState({});
  const [count, setCount] = useState([]);
  const [_id, setId] = useState();
  const [file, setFile] = useState();


  function myChange(e) {
    if (e.target.name === "testImage") {
      setFile(e.target.files[0]);
    }
    else {
      const { name, value } = e.target;
      setData1({ ...data1, [name]: value });
    }
  }
  const handleDelete = (id) => {
    delChild(id);
  }

  const handleEdit = (index, _id) => {
    setCount(index);
    setId(_id);
  }

  const func = (person) => {
    if (count.length === 0) {
      postChild(person);
    }
    else {
      updateChild(_id, person);
      setCount([]);
    }
    setData1({});

  };

  async function display() {
    let url = await fetch("http://localhost:4000/show");
    let data = await url.json();
    setData(data);
  };
  useEffect(() => {
    display();
  }, []);

  const postChild = async (person) => {
    let form = new FormData();
    form.append("name", person.name);
    form.append("email", person.email);
    form.append("exercise", person.exercise);
    form.append("date", person.date);
    form.append("duration", person.duration);
    form.append("testImage", file);

    try {
      await fetch("http://127.0.0.1:4000/create", {
        method: 'POST',
        body: form
      }).then(response => response.json())
        .then(data => {

          console.log(data);
          display();
        });
    }
    catch (error) {
      console.log("Post submission failed");
      console.log(error.message);
    }
  }

  const delChild = async (id) => {
    try {
      await fetch("http://127.0.0.1:4000/delete/" + id, {
        method: 'DELETE'
      }).then(response => response.json())
        .then(data => {

          console.log(data);
          display();
        });

    }
    catch (error) {
      console.log("Post submission failed");
      console.log(error.message);
    }
  }

  const updateChild = async (id, person) => {
    let form = new FormData();
    form.append("name", person.name);
    form.append("email", person.email);
    form.append("exercise", person.exercise);
    form.append("date", person.date);
    form.append("duration", person.duration);
    form.append("testImage", file);

    try {
      await fetch("http://127.0.0.1:4000/update/" + id, {
        method: 'PATCH',
        body: form
      }).then(response => response.json())
        .then(data => {

          console.log(data);
          display();
        });


    }
    catch (error) {
      console.log("Post submission failed");
      console.log(error.message);
    }
  }

  return (
    <>
      <Router>
        <Routes>
        <Route path={"/Signup"} element={<Signup />}></Route>
        <Route path={"/Login"} element={<Login />}></Route>
          <Route path={"/"} element={<Page />}></Route>
          <Route path={"/Add"} element={<Global.Provider value={{ data1: data1, myFunc: func, myChange: myChange }}>
            <Add />
          </Global.Provider>}>
          </Route>
          <Route path={"/Show"} element={<Global.Provider value={{ myApi: data, handleDelete: handleDelete, handleEdit: handleEdit, data1: data1, myFunc: func, myChange: myChange }}>
            <Show />
          </Global.Provider>}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
