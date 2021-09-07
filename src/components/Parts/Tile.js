import React from 'react'
import './Tile.css'

const Tile = (props) => {
    return (
        <div className="tile">
            <p>{props.content}</p>
        </div>
    )
}

export default Tile
