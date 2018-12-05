import React from "react";
import ProductCategory from "../ProductCategory/ProductCategory";

export default class ProductCategories extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let productNames= this.props.productCategoryNames.split(", ");
    let allProductNames= productNames.map((item,index) => {
      return(
        <ProductCategory productName={item}
          className="Product-button"
        />
      )
    })
    return (
      <div className="Reservations-tabs">{allProductNames}
      </div>
    )
  }
}
