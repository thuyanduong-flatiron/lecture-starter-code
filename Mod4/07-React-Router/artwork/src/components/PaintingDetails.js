import React from 'react'

const PaintingDetails = ({painting}) => {
  return painting ?
    <div className="ui card">
      <div>
        <img src={painting.image} alt={painting.title}/>
        <h3>
          {painting.title}
        </h3>
        <div>{`Artist: ${painting.artist.name}`}</div>
        <div>{`Born: ${painting.artist.birthday}`}</div>
        <div>{`Died: ${painting.artist.deathday}`}</div>
        <div>{`Date: ${painting.date}`}</div>
        <div>
          {`Dimensions: ${painting.dimensions.width} in. x ${painting.dimensions.height} in.`}
        </div>
      </div>
    </div>
    :
    null
}

export default PaintingDetails
