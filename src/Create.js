import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";


const Create = () => {

  const [name, setName] = useState('');
  const [pfp, setPfp] = useState('https://i.postimg.cc/Hs24PmP1/Group-48095455-1.png');
  const [year, setYear] = useState('');
  const [major, setMajor] = useState('');
  const [projects, setProjects] = useState([]);
  const [email, setEmail] = useState('');
  const [linkedin, setLinkedIn] = useState('https://www.linkedin.com/');
  const [gitHub, setGitHub] = useState('https://github.com/');

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const profile = { name, major, year, pfp, projects, email, linkedin, gitHub };

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
      <form onSubmit={handleSubmit}>
        <label>Full name: *</label>
        <input 
          type="text" 
          required 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email: *</label>
        <input 
          type="text" 
          required
          placeholder="johnsmith@gmail.com"
          onChange={(e) => setEmail("mailto:" + e.target.value)}
        />
        <label>Profile Photo URL:</label>
        <input 
          type="url" 
          placeholder="https://example.com"
          //value={pfp}
          onChange={(e) => {setPfp(e.target.value); console.log(pfp)}}
        />
        <label>Major title: *</label>
        <input 
          type="text" 
          required 
          value={major}
          onChange={(e) => setMajor(e.target.value)}
        />
        <label>Year: *</label>
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
        <label>LinkedIn URL:</label>
        <input 
          type="text" 
          placeholder="https://linkedin.com/in/username"
          onChange={(e) => setLinkedIn(e.target.value)}
        />
        <label>GitHub URL:</label>
        <input 
          type="text" 
          placeholder="https://github.com/username"
          onChange={(e) => setGitHub(e.target.value)}
        />
        <button className="primary-button">Create profile</button>
      </form>
    </div>
  );
}
 
export default Create;