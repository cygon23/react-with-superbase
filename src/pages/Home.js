import React from "react"
import supabase from "../config/superBaseClient"
import { useEffect, useState } from "react"

//components
import SuperBaseData from "../components/SuperBaseData";

const Home = () => {
  const [fetchError, setFetchError] = useState(null)
  const [store, setStore] = useState(null)
  const [orderBy, setOrderBy] = useState('created_at')

  //updating the local state
  const handleDelete = (id) => {
    setStore(prevData => {
      return prevData.filter(pd => pd.id !== id)
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('project')
        .select().order(orderBy, {ascending: false})
      
      if (error) {
        setFetchError('colud not actually fetch the data')
        setStore(null)
        console.log(error)
      }

      if (data) {
        setStore(data)
        setFetchError(null)
      }
    }

    fetchData() 
  },[orderBy])
  
  return (
    <div className="page home">
      {fetchError && (<p>{fetchError}</p>)}
      {store && (<div className="smoothies">
        <div className="order-by">
          <p>Order by:</p>
          <button onClick={() => setOrderBy('created_at')}>Time Created</button>
          <button onClick={() => setOrderBy('title')}>Title</button>
          <button onClick={() => setOrderBy('rate')}>Rating</button>
        </div>
        <div className="smoothie-grid">
            {store.map(item => (
              <SuperBaseData
                key={item.id}
                data={item}
                //passing the prop
                onDelete={handleDelete}
              />
        ))}
       </div>
      </div>)}
    </div>
  )
}

export default Home