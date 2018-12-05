import React from "react";
import { connect } from 'react-redux';

class ProductDeletingCover extends React.Component {

  deletingItem (index) {
    this.props.deleteProduct(index);
    let cover= document.getElementById('product-deleting-cover');
    cover.style.display="none";

  }

  exitDeleteProductPopup() {
    let cover=document.getElementById('product-deleting-cover');
    cover.style.display="none";
  }

  render() {
    return (
      <div className="cover" id="product-deleting-cover">
        <div id="product-deleting-popup">
          <h2> Delete item from menu </h2>
          <div> You are about to remove {this.props.deletingProductName}<br /> from the menu. <br/> Are you sure you want to do this?
        </div>
          <button onClick={this.exitDeleteProductPopup}> CANCEL </button>
          <button onClick={()=>this.deletingItem(this.props.deletingProductIndex)}> YES </button>
        </div>
      </div>
    )
  }
}


const mapStateToProps= (state) => {
  return {
    deletingProductName: state.deletingProduct.name,
    deletingProductIndex: state.deletingProduct.index
  }
}

const mapDispatchToProps= (dispatch)=> {
  return {
    deleteProduct: (index) => {
      dispatch({
        type: 'DELETE_PRODUCT',
        index: index,
      })
    }
  }
}

const ProductDeletingCoverContainer= connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDeletingCover)

export default ProductDeletingCoverContainer
