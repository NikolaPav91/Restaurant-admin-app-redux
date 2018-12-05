import React from "react";
import Room from "../Room/Room";
import { connect } from 'react-redux';

class Rooms extends React.Component {

  render() {
    let rooms= this.props.roomNames
    let allRooms= rooms.map((item,index) => {
      return(
        <Room
          roomName={item.name}
          className="Room-button"
        />
      )
    })
    return(
      <div className="Reservations-tabs">{allRooms}</div>
    )
  }
}

const mapStateToProps= (state) => {
  return {
    roomNames: state.allRooms
  }
}

const ReduxContainerRooms= connect(
  mapStateToProps
)(Rooms)

export default ReduxContainerRooms
