import React from "react";
import Product from "../Product/Product";

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      allProducts: [
        {name: "Lemonade", pictureSrc: "lemonade_picture.jpg", description: "Sugar, water, lemon, ice", price: "200 RSD"},
        {name: "Juice", pictureSrc: "orange_juice.jpg", description: "100% orange juice", price: "250 RSD"}
      ],
    }
  }

    deletingItem(index) {
      let allproducts=this.state.allProducts;
      allproducts.splice(index,1);
      this.setState({
        allProducts: allproducts,
      })
    }

  render() {
    let allproducts=this.state.allProducts;
    let productlist= allproducts.map((item,index)=> {
      return (
        <Product
          productName={item.name}
          productImg={item.pictureSrc}
          productDescription={item.description}
          productPrice={item.price}
          imgclassName="Menu-product-picture"
          onDeleteClick={()=>this.deletingItem(index)}
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
