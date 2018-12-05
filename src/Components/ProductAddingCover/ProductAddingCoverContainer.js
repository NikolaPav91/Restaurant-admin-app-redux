import React from "react";
import Room from "../Room/Room";
import { connect } from 'react-redux';

class ProductAddingCover extends React.Component {

  saveNewProduct(newProduct) {
    if (newProduct.name===undefined || newProduct.price=== undefined) {
      alert ("can't leave name or price blank");
      return
    }
    if (newProduct.name=== "" || newProduct.name.match(/\s+/)
    || newProduct.price=== "" || newProduct.price.match(/\s+/)) {
      alert ("can't leave name or price blank");
      return
    };


    document.getElementById('productadding-cover').style.display="none";
    this.props.saveNewProduct(newProduct);
    let inputs= document.querySelectorAll('#productadding-popup input');
    for (let input of inputs) {
      input.value=null;
    }

  }

  exitNewProductPopup() {
    document.getElementById('productadding-cover').style.display="none";
  }
  render() {
    let picturePreviewClass;
    if (this.props.addingProduct.pictureSrc) {picturePreviewClass="Menu-product-picture"} else {
      picturePreviewClass=null};
    return (
      <div className="cover" id="productadding-cover">
        <div id="productadding-popup">
           <div id="picture-adding-container">
            <input type="file" accept="image/*" onChange={this.props.onImgUpload}></input>

            <img id="picture-preview" src={this.props.addingProduct.pictureSrc} className={picturePreviewClass}></img>
          </div>
          <label for="Name"> Name
          </label>
          <input className="Add-itemname-input" type="text" onChange={this.props.onNameChange}></input>
            <label for="Price"> Price </label>
            <input className="Add-itemprice-input" type="text" onChange={this.props.onPriceChange}></input>
            <label for="social-media"> Description </label>
            <input className="Add-itemdescription-input" type="text" onChange={this.props.onDescriptionChange}></input>
            <button onClick={this.exitNewProductPopup}> EXIT </button>
            <button onClick={()=>this.saveNewProduct(this.props.addingProduct)}> SAVE </button>
          </div>
        </div>
    )
  }
}

const mapStateToProps= (state) => {
  return {
    addingProduct: state.addingProduct,
  }
}

const mapDispatchToProps= (dispatch)=> {
  return {

    onPriceChange: (event) => {
      dispatch({
        type: 'PRICE_CHANGE_ADD_PRODUCT',
        price: event.target.value,
      });
    },
    onNameChange: (event) => {
      dispatch({
        type: 'NAME_CHANGE_ADD_PRODUCT',
        name: event.target.value,
      });
    },
    onDescriptionChange: (event) => {
      dispatch({
        type: 'DESCRIPTION_CHANGE_ADD_PRODUCT',
        description: event.target.value,
      })
    },
    onImgUpload: (event)=> {
      dispatch({
        type: 'PICTURE_CHANGE_ADD_PRODUCT',
        URL: window.URL.createObjectURL(event.target.files[0]),
      })
    },
    saveNewProduct: (newProduct)=> {
    dispatch({
      type: 'ADD_PRODUCT',
      newProduct: newProduct,
    }),
    dispatch({
      type: 'RESET_STATE_ADD_PRODUCT'
    })
  }
}
}

const ProductAddingCoverContainer= connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductAddingCover)

export default ProductAddingCoverContainer
