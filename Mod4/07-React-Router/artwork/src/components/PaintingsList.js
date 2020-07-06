import React from 'react'
import Painting from './Painting'
import Searchbar from './Searchbar'

const PaintingsList = ({onSearchHandler, paintings, onSelectPainting}) => {
  return(
    <div>
    <Searchbar onChangeHandler={onSearchHandler} />
    {paintings.map(painting => <Painting
      key={painting.id}
      painting={painting}
      onSelectPainting={onSelectPainting}
    />)}
    </div>
  )
}

export default PaintingsList
