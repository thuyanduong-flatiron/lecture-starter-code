import React from 'react'

const Searchbar = (props) => {
  return(
    <div>
      <input type="text" onChange={props.onChangeHandler}/>
    </div>
  )
}

export default Searchbar
