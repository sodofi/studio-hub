import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";


const Create = () => {

  const [name, setName] = useState('');
  const [pfp, setPfp] = useState('');
  const [year, setYear] = useState('');
  const [major, setMajor] = useState('');
  const [projects, setProjects] = useState([]);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const profile = { name, major, year, pfp, projects };

    fetch('http://localhost:8000/profiles/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profile)
    }).then(() => {
      // history.go(-1);
      history.push('/');
    })
  }

  return (
    <div className="create">
      <h2>Build your studio hub</h2>
      {/* <img
          ref={uploadedImage}
          style={{
            width: "20%",
            height: "20%",
            position: "absolute"
          }}
        /> */}
      <form onSubmit={handleSubmit}>
        <label>Full name:</label>
        <input 
          type="text" 
          required 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Profile Photo URL:</label>
        <input 
          type="url" 
          placeholder="https://example.com"
          value={pfp}
          onChange={(e) => {setPfp(e.target.value); console.log(pfp)}}
        />
        <label>Major title:</label>
        <input 
          type="text" 
          required 
          value={major}
          
          onChange={(e) => setMajor(e.target.value)}
        />
        <label>Year:</label>
        <select
          value={year}
          required
          onChange={(e) => setYear(e.target.value)}
        >
          <option value="freshman">freshman</option>
          <option value="sophmore">sophmore</option>
          <option value="junior">junior</option>
          <option value="senior">senior</option>
        </select>
        <button>Create profile</button>
      </form>
    </div>
  );
}
 
export default Create;