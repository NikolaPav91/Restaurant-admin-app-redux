import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';





class Menubutton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <button className={this.props.buttonclassname} onClick={this.props.onClick}>
        <img className={this.props.imgclassname} src={this.props.imgsrc}></img>{this.props.buttontext}
      </button>
    )
  }
}

class Menubuttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: 'About',
    }
  }

  onMenuButtonClick(event)
  {
      if (this.state.showing== event.target.textContent) {
        return
      }
      this.setState({
        showing: event.target.textContent,
      })



  }


  render()
  {
    let tabs= document.querySelectorAll('[targetName]');
    for (let tab of tabs) {
  tab.classList.remove('showing-div');
  tab.classList.add('hiding-div');
  if (tab.getAttribute('targetName')==this.state.showing) {
    tab.classList.remove('hiding-div');
    tab.classList.add('showing-div');
  }
  }
    let TextArray= this.props.allButtonsLabels.split(", ");
    let allButtons= TextArray.map((item,index) => {
    return (
    <Menubutton
      buttonclassname="Menu-button"
      imgclassname="Cog-img"
      imgsrc="61094.svg"
      buttontext={item}
      onClick={this.onMenuButtonClick.bind(this)}
      showing={1}

    />
  )
})
    return  (
    <div className="Menu-top-container">  {allButtons}</div>
    )
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-container">
          <div className="Menu-top-container">
          <Menubuttons allButtonsLabels="About, Menu, Visual View, Reservations, Contact"
          />
        </div>
        <div className="Logout-container">
          <button className="Menu-button Logout">
            <img className="Cog-img" src="61094.svg"></img>
            Logout
          </button>
        </div>
      </div>
        <div className="Content-container">
          <div className="About-container" targetName="About">

            <h2> Your place info </h2>
            <label for="name"> Name </label>
            <input className="About-input" type="text"></input>
            <label for="address"> Address </label>
            <input className="About-input" type="text"></input>
            <label for="type"> Type </label>
            <input className="About-input" type="text"></input>
            <label for="additional-info"> Additional info </label>
            <textarea className= "Additional-info" rows="4" cols="50"></textarea>
          </div>
          <div targetName="Menu" className="Menu-container"> blaaaaa

          </div>
          <div targetName="Visual View" className="Menu-container"> VIsual bla bla
          </div>

        </div>
      </div>
    );
  }
}



export default App;
