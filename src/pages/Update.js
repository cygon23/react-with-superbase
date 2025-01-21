import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import supabase from "../config/superBaseClient"


  const Update = () => {
  const { id } = useParams()
  const navigate = useNavigate()

   
  const [title, setTitle] = useState('')
  const [name, setName] = useState('')
  const [rate, setRate] = useState('')
  const [formError, setFormError] = useState(null)
    
    const formHandler = async (e) => {
      e.preventDefault()
      
      if (!title || !name || !rate) {
        setFormError('please fill all the fields')
        return
      }

      const { data, error } = await supabase.from('project')
        .update({ title, name, rate }).eq('id', id).select()
      //use select() for v2 of superbase to receive data

      if (error) {
        console.log(error)
        setFormError('please fill all the fields')
      }

      if (data) {
        console.log(data)
        setFormError(null)
        navigate('/')
      }
    }

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('project').select().eq('id', id).single()
      
      if (error) {
        navigate('/', {replace: true})
      }

      if (data) {
        setTitle(data.title)
        setName(data.name)
        setRate(data.rate)
        console.log(data)
      }
    }

    fetchData()

 }, [id, navigate])
  
  return (
    <div className="page update">
      <form onSubmit={formHandler}>
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

        <button>Update Smoothie Recipe</button>
        

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  )
}

export default Update