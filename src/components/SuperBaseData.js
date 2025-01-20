import React from "react"
import { Link } from "react-router-dom"

const SuperBaseData = ({ data }) => {
    return (
        <div className="smoothie-card">
            <h3>{data.title}</h3>
            <p>{data.name}</p>
            <div className="rating">{data.rate}</div>
              <div className="buttons">
                 <Link to={`/${data.id}`}>
                      <i className="material-icons">edit</i>
                  </Link>
      </div>
        </div>
    ) 
}

export default SuperBaseData