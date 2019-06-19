import React from "react";
import Pig from "./Pig";
import {connect} from 'react-redux'

const PigContainer = ({ pigs }) => {
  return (
    <div>
      {pigs.map(pig => (
        <Pig pig={pig} key={pig.id} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    pigs: state.hogs
  }
}

export default connect(mapStateToProps)(PigContainer);
