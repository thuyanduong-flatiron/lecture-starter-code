import React, {Component} from 'react'
import Painting from '../component/Painting'
import paintings from '../data/paintings'

class PaintingsContainer extends Component{

  render(){
    return (
      <div>
        {paintings.map(painting =>
          <Painting
            key={painting.id}
            painting={painting}
          />)}
      </div>
    )
  }
}

export default PaintingsContainer
