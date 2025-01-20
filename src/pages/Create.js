import React, { useState } from "react"
import supabase from "../config/superBaseClient"
import { useNavigate } from "react-router-dom"
 
const Create = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [name, setName] = useState('')
  const [rate, setRate] = useState('')
  const [formError, setFormError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!title || !name || !rate) {
      setFormError('please fill all the fields')
      return
    }
     
    const { data, error } = await supabase.from('project')
      .insert([{ title, name, rate }])
    
  if (error) {
  console.error("Error details:", error);
  setFormError("Error saving data. Please try again.");
}


  if (data) {
  console.log(data);
  setFormError(null);
   navigate(`/`);
    
}

  }

  return (
    <div className="page create">
       <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input 
          type="text" 
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="name">Method:</label>
        <textarea 
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="rate">Rating:</label>
        <input 
          type="number"
          id="rate"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />

        <button type="submit">Create Smoothie Recipe</button>
        

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  )
}

export default Create