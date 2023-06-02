import React, { useRef, useState } from "react";
import "./Form.css";

const Form = ({data}) => {

  const name = useRef();
  const email = useRef();
  const num = useRef();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    localStorage.setItem('name', name.current.value);
    localStorage.setItem('email', email.current.value);
    localStorage.setItem('num', num.current.value);
  };
  return (
    <div>
      <h2 style={{color:"white", textAlign:"center"}}>Book ticket for the movie {data}</h2>
      <form
       onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "300px",
          margin: "0 auto"
        }}
      >
        <label htmlFor="name">Name:</label>
        <input type="text" ref={name} style={{padding:"5px"}}/>

        <label htmlFor="email">Email:</label>
        <input type="email" ref={email} style={{padding:"5px"}}/>

        <label htmlFor="phone">Contact Number:</label>
        <input type="phone" ref={num} style={{padding:"5px"}} />

        <button type="submit" className="form-button">Submit</button>
      </form>
    </div>
  );
};

export default Form;
