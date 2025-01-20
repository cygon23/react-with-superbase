import React from "react"
import supabase from "../config/superBaseClient"
import { useEffect, useState } from "react"

//components
import SuperBaseData from "../components/SuperBaseData";

const Home = () => {
  const [fetchError, setFetchError] = useState(null)
  const [store, setStore] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('project').select()
      
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
  },[])
  
  return (
    <div className="page home">
      {fetchError && (<p>{fetchError}</p>)}
      {store && (<div className="smoothies">
        <div className="smoothie-grid">
            {store.map(item => (
          <SuperBaseData key={item.id} data={item} />
        ))}
       </div>
      </div>)}
    </div>
  )
}

export default Home