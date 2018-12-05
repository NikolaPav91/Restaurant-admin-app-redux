import React from "react";
import Product from "../Product/Product";
import { connect } from 'react-redux';

class ProductList extends React.Component {
  onItemDeleteClick(event, index, itemName) { //event je nepotreban u celom lancu
      let cover=document.getElementById('product-deleting-cover');
      cover.style.display="flex";
      let product= event.target.closest(".Product-container");
      this.props.onItemDeleteClick(index, itemName);
  }

  onEditItemClick(index, item){
    let cover=document.getElementById('productediting-cover');
    cover.style.display="flex";
    this.props.onEditItemClick(index, item)
  }

  render() {
    let allproducts=this.props.allProducts;
    let productlist= allproducts.map((item,index)=> {
      return (
        <Product
          productName={item.name}
          productImg={item.pictureSrc}
          productDescription={item.description}
          productPrice={item.price}
          onDeleteClick={(event)=>this.onItemDeleteClick(event, index, item.name)}
          onEditClick={()=>this.onEditItemClick(index, item)}
        />
      )
    })
    return(
      <div id="allproducts-container">
        {productlist}
      </div>
    )
  }
}

const mapStateToProps= (state) => {
  return {
    allProducts: state.allProducts
  }
}

const mapDispatchToProps= (dispatch)=> {
  return {
    onItemDeleteClick: (index,itemName) => {
      dispatch({
        type: 'SET_DELETING_PRODUCT',
        index: index,
        name: itemName,
      })
    },
    onEditItemClick: (index, item) => {
      dispatch({
        type: 'SET_EDITING_PRODUCT',
        index: index,
        product: item,
      })
    }
  }
}

const ProductListContainer= connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList)

export default ProductListContainer
