import React from 'react'

const Painting = ({painting, onSelectPainting}) => {
  return(
    <div className="ui card">
      <div>
        <img src={painting.image} alt={painting.title}/>
        <div>
          {painting.title}
        </div>
      </div>
      <button data-painting-id={painting.id} onClick={onSelectPainting}>More Info</button>
    </div>
  )
}

export default Painting
