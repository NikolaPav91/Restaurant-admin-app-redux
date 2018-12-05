import React, { Component } from 'react';
import './App.css';
import MenuButtons from "./Components/MenuButtons/MenuButtons";
import ProductCategories from "./Components/ProductCategories/ProductCategories";
import ReduxContainerRooms from "./Components/Rooms/Rooms";
import ProductListContainer from "./Components/ProductList/ProductList";
import AddNewRoomTab from './Components/NewRoom/NewRoom';
import ProductDeletingCoverContainer from './Components/ProductDeletingCover/ProductDeletingCoverContainer';
import ProductAddingCoverContainer from './Components/ProductAddingCover/ProductAddingCoverContainer';
import ProductEditingCoverContainer from './Components/ProductEditingCover/ProductEditingCoverContainer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productCategoryNames: "All, Drinks, Desserts, Snacks",
    }
  }

  onAddRoomClick() {
    let cover=document.getElementById('room-adding-cover');
    cover.style.display="flex";
  }



  addCategory() {
    let productNames= this.state.productCategoryNames;
    productNames+=", Category";
    this.setState({
      productCategoryNames: productNames,
    })
  }

  addItemClick() {
    let cover=document.getElementById('productadding-cover')
    cover.style.display="flex";
}

  render() {
    return (
      <div className="App">
        <div className="Menubar-container">
          <div className="Menu-top-container">
            <MenuButtons
              allButtonsLabels="About, Menu, Visual View, Reservations, Contact"
            />
          </div>
          <div className="Menu-logout-container">
            <button className="Menu-button" id="logout-menu-button" onClick={()=> alert(JSON.stringify(this.state))}>
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
          <div id="Menu-wrapper">
            <div targetName="Menu" className="Menu-container">
              <h2>Menu items</h2>
              <div className="Menu-tabs-container">
                <ProductCategories
                  productCategoryNames={this.state.productCategoryNames}
                />
                <button onClick={this.addCategory.bind(this)}>Add category</button>
              </div>
              <div className="Menu-informationlabels-div">
                <div id="informationlabel-seperation-div">
                  <div id="informationlabel-name"> NAME
                  </div>
                  <div id="informationlabel-photo"> PHOTO
                  </div>
                  <div id="informationlabel-description"> DESCRIPTION
                  </div>
                </div>
                <div id="informationlabel-last2row-separator">
                  <div id="informationlabel-price"> PRICE
                  </div>
                  <div id="add-product-div">
                    <p id="add-product-text" onClick={this.addItemClick.bind(this)}> ADD ITEM
                    </p>
                  </div>
                </div>
              </div>
              <ProductListContainer
              />
            <div className="Menu-products-div">

            </div>
          </div>
        </div>
        <div targetName="Visual View" className="Visualview-container"> Visual View
        </div>
        <div id="Reservations-wrapper">
          <div targetName= "Reservations" className="Reservations-container">
            <h2>Reservations</h2>
            <div className="Reservations-tabs-container">
              <ReduxContainerRooms
              />
              <button onClick={this.onAddRoomClick}>
                Add RoomX
              </button>
            </div>
            <div className="Reservations-labels-div">

            </div>
            <div className="Reservations-all-div">

            </div>
          </div>
        </div>
        <div targetName="Contact" className="Contact-container">
          <h2>Contact info</h2>
          <label for="email"> Email </label>
          <input className="About-input" type="text"></input>
          <label for="phone-number"> Phone number </label>
          <input className="About-input" type="text"></input>
          <label for="social-media"> Social media </label>
          <input className="About-input" type="text"></input>
          <label for="website"> Website </label>
          <input className="About-input" type="text"></input>
        </div>
      </div>
      <ProductAddingCoverContainer
      />
      <ProductEditingCoverContainer
      />
      <ProductDeletingCoverContainer
      />
      <div className="cover" id="room-adding-cover">
        <div id="room-adding-popup">
          <h2> Add room? </h2>
            <AddNewRoomTab />
        </div>
      </div>
    </div>
     );
   }
 }



function objectCopy(src) {
  return Object.assign({}, src);
}

export default App;
