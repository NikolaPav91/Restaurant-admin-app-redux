import React from "react";
import Room from "../Room/Room";
import { connect } from 'react-redux';

class ProductEditingCover extends React.Component {

  saveEditingProduct(product, index) {
    if (product.name===undefined || product.price=== undefined) {
      alert ("can't leave name or price blank");
      return
    }
    if (product.name=== "" || product.name.match(/\s+/)
    || product.price=== "" || product.price.match(/\s+/)) {
      alert ("can't leave name or price blank");
      return
    };
    this.props.saveEditingProduct(product, index);
    document.getElementById('productediting-cover').style.display="none";
  }

  exitEditingProduct() {
    this.props.exitEditingProduct();
    document.getElementById('productediting-cover').style.display="none";

  }


  render() {
    return(
      <div className="cover" id="productediting-cover">
        <div id="productediting-popup">
          <div id="product-editing-picture-adding-container">
            <input type="file" accept="image/*" onChange={this.props.onImgUpload}
            ></input>

            <img id="product-editing-picture-preview" src={this.props.editingProduct.pictureSrc}
              className="Menu-product-picture"></img>
          </div>
          <label for="Name"> Name </label>
          <input className="Add-itemname-input" id="edit-itemname-input" type="text"
            value={this.props.editingProduct.name}
            onChange={this.props.nameChange}></input>
          <label for="Price"> Price </label>
          <input className="Add-itemprice-input" id="edit-itemname-input" type="text"
            value={this.props.editingProduct.price}
            onChange={this.props.priceChange}></input>
          <label for="social-media"> Description </label>
          <input className="Add-itemdescription-input" id="edit-itemname-input" type="text"
            value={this.props.editingProduct.description}
            onChange={this.props.descriptionChange}></input>
          <button onClick={()=>this.exitEditingProduct()}> EXIT </button>
          <button onClick={()=>this.saveEditingProduct(this.props.editingProduct, this.props.editingProductIndex)}> SAVE </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps= (state) => {
  return {
    editingProduct: state.editingProduct,
    editingProductIndex: state.editingProductIndex,
  }
}

const mapDispatchToProps= (dispatch) => {
  return {
    nameChange: (event) => {
      dispatch({
        type: 'NAME_CHANGE_EDIT_PRODUCT',
        name: event.target.value
      })
    },
    priceChange: (event) => {
      dispatch({
        type: 'PRICE_CHANGE_EDIT_PRODUCT',
        price: event.target.value
      })
    },
    descriptionChange: (event) => {
      dispatch({
        type: 'DESCRIPTION_CHANGE_EDIT_PRODUCT',
        description: event.target.value
      })
    },
    onImgUpload: (event) => {
      dispatch({
        type: 'PICTURE_CHANGE_EDIT_PRODUCT',
        URL: window.URL.createObjectURL(event.target.files[0]),
      })
    },
    saveEditingProduct: (product, index) => {
      dispatch({
        type: 'EDIT_PRODUCT',
        newVersion: product,
        index: index,
      }),
      dispatch({
        type: 'RESET_EDITING_PRODUCT'
      })
    },
    exitEditingProduct: ()=> {
      dispatch({
        type: 'RESET_EDITING_PRODUCT'
      })
    }
  }
}

const ProductEditingCoverContainer= connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductEditingCover)

export default ProductEditingCoverContainer
