import { useState, useRef, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";


const AddProject = () => {

    const { id } = useParams();
    const { data: profile, error, isPending } = useFetch('http://localhost:8000/profiles/' + id);
    const history = useHistory();


  const [title, setTitle] = useState('');
  const [img, setImg] = useState('https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80');
  const [desc, setDesc] = useState('');
  const [tags, setTags] = useState('general');


  const handleSubmit = (e) => {
    e.preventDefault();
    
    let newProj = [...profile.projects, {
        title: title, 
        img: img,
        desc: desc,
        tags: tags
    }];
    console.log(newProj);

    fetch('http://localhost:8000/profiles/' + profile.id, {
      method: 'PATCH',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        projects: newProj
      })
    }).then(() => {
      console.log(newProj);
      history.push(`/profiles/${profile.id}`);
      //window.location.reload();
    })
  }

  return (
    <div className="create">
      <h2>Add a project</h2>
      <form onSubmit={handleSubmit}>
        <label>Project Title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => {setTitle(e.target.value) ; console.log(title)}}
        />
        <label>Project Photo URL:</label>
        <input 
          type="url" 
          placeholder="https://example.com"
          //value={img}
          onChange={(e) => {setImg(e.target.value)}}
        />
        <label>Description:</label>
        <input 
          type="text" 
          required 
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <label>Tags:</label>
        <select
          value={tags}
          required
          onChange={(e) => setTags(e.target.value)}
        >
          <option value="general">general</option>
          <option value="design">design</option>
          <option value="research">research</option>
          <option value="software engineering">software engineering</option>
          <option value="data science">data science</option>
        </select>
        <button className="primary-button">Create project</button>
      </form>
    </div>
  );
}
 
export default AddProject;