import React, {Component} from 'react'
import Painting from '../component/Painting'
import paintingsData from '../data/paintings'

class PaintingsContainer extends Component{

  render(){
    return (
      <div>
        {paintingsData.map(painting =>
          <Painting
            key={painting.id}
            paintingObj={painting}
          />)}
      </div>
    )
  }
}

export default PaintingsContainer
