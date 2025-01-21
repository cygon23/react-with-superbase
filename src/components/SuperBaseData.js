import React from "react"
import { Link } from "react-router-dom"
import supabase from "../config/superBaseClient"

const SuperBaseData = ({ data,onDelete }) => {

    const handleDelete = async () => {
        const { data:responseData, error } = await supabase
            .from('project').delete().eq('id', data.id).select()
        
        if (error) {
            console.log(error)
        }

        if (data) {
            console.log(responseData)
            onDelete(data.id)
        }
    }

    return (
        <div className="smoothie-card">
            <h3>{data.title}</h3>
            <p>{data.name}</p>
            <div className="rating">{data.rate}</div>
            <div className="buttons">
                <Link to={`/${data.id}`}>
                    <i className="material-icons">edit</i>
                </Link>
                <i className="material-icons" onClick={handleDelete}>delete</i>
            </div>
        </div>
    )

}


export default SuperBaseData