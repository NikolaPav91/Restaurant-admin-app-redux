import React from "react";
import classNames from 'classnames';

export default class Product extends React.Component {
  render() {
    let productimgclass= classNames({
      'Menu-product-picture': this.props.productImg
    })
    return (
      <div className="Product-container" id={this.props.productName}>
        <div className="Product-3row-separator">
          <div className="Product-name">
            {this.props.productName}
          </div>
          <div className="Product-picture">
            <img className={productimgclass} src={this.props.productImg}></img>
          </div>
          <div className="Product-description">
            {this.props.productDescription}
          </div>
        </div>
        <div id="product-last2row-separator">
          <div className="Product-price">
            {this.props.productPrice}
          </div>
          <div className="Edit-remove-container">
            <button className="Edit-product-button" onClick={this.props.onEditClick}>
              <img src="product_edit_button.png"></img>
            </button>
            <button className="Delete-product-button" onClick={this.props.onDeleteClick}>
              <img src="product_delete_button.png"></img>
            </button>
          </div>
        </div>
      </div>
    )
  }
}
