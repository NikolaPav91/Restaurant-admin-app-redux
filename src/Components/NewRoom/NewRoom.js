import React from 'react';
import addRoom from '../../actions';
import { connect } from 'react-redux';

class AddNewRoomTab extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let input;
    let yesClick= ()=> {
      let cover=document.getElementById('room-adding-cover');
      cover.style.display="none";
      if (input.value=== "" || input.value.match(/\s+/)) {input.value=""; return};
      this.props.dispatch(addRoom(input.value));
      input.value="";
    };
    let cancelClick= () => {
        input.value="";
        let cover=document.getElementById('room-adding-cover');
        cover.style.display="none";
      }
    return (
      <div>
      <input type="text"  ref= {node => {
        input= node;    /* ??????? */
      }}></input>
      <button onClick={()=>yesClick()}> YES </button>
      <button onClick={()=>cancelClick()}> CANCEL
      </button>
    </div>)
}
}

const AddNewRoomTabContainer= connect()(AddNewRoomTab);

export default AddNewRoomTabContainer;
