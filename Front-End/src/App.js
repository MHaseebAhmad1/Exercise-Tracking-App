import './App.css';
import React, { useState, useRef, useEffect, createContext } from 'react';
import Page from './Components/Page';


export const Global = createContext();
function App() {

  const id = useRef();
  const name = useRef();
  const email = useRef();
  const phone = useRef();
  const duration = useRef();
  const [data, setData] = useState([]);
  const [data1, setData1] = useState({});
  const [count, setCount] = useState(0);
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
  const handleDelete = (index, id) => {
    delChild(id);
  }

  const handleEdit = (index, _id) => {
    id.current.value = data[index].id;
    name.current.value = data[index].name;
    email.current.value = data[index].email;
    phone.current.value = data[index].phone;
    duration.current.value = data[index].duration;
    setCount(index);
    setId(_id);
  }

  const func = (person) => {
    if (count === 0) {
      postChild(person);
    }
    else {
      updateChild(_id, person);
      setCount(0);
    }
    setData1("");

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
    form.append("id", person.id);
    form.append("name", person.name);
    form.append("email", person.email);
    form.append("phone", person.phone);
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
    form.append("id", person.id);
    form.append("name", person.name);
    form.append("email", person.email);
    form.append("phone", person.phone);
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
      <Global.Provider value={{ myApi: data, data1: data1, id: id, name: name, email: email, phone: phone, duration: duration, myFunc: func, myChange: myChange, handleDelete: handleDelete, handleEdit: handleEdit }}>
        <Page />
      </Global.Provider>
    </>
  );
}

export default App;
