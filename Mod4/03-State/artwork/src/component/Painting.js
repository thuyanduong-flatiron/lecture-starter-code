import React from 'react'

const Painting = ({painting:{title, image, artist: {name}, dimensions: {height, width}}}) => {
  return (
    <div className="ui card">
      <div>
        <img alt={title} src={image} />
      </div>
      <p>{`${title} by ${name}`}</p>
      <p>{`${height} x ${width}`}</p>
    </div>
  )
}

export default Painting
