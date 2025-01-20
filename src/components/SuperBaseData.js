import React from "react"

const superBaseData = ({ data }) => {
    return (
        <div className="smoothie-card">
            <h3>{data.title}</h3>
            <p>{data.name}</p>
            <div className="rating">{ data.rate}</div>
        </div>
    )
}

export default superBaseData