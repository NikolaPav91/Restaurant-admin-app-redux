import React from "react";
import MenuButton from "../MenuButton/MenuButton";

export default class MenuButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    }
  }

  onMenuButtonClick(event, index) {
    let tabs= document.querySelectorAll('[targetName]');
    for (let tab of tabs) {
      tab.style.display='none';
    }
    for (let tab of tabs) {
      if (tab.getAttribute('targetName')==event.target.closest('.Menu-button').textContent) {
        tab.style.display='flex';
      }
    }
    this.setState({
      activeIndex: index,
    })
  }

  render() {
    let textarray= this.props.allButtonsLabels.split(", ");
    let allbuttons= textarray.map((item,index) => {
      return (
        <MenuButton
          imgclassname="Cog-img"
          imgsrc="61094.svg"
          buttontext={item}
          onClick={ (event)=> this.onMenuButtonClick(event,index)}
          active={index===this.state.activeIndex}
        />
      )
    })
    return  (
      <div className="Menu-top-container">  {allbuttons}</div>
    )
  }
}
