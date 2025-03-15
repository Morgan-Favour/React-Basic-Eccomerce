import React from 'react'
import "../css/products.css"
import "../css/global.css"
import "../css/responsive.css"

function RecommendedProducts(props) {
    return (
        <div className="product-card">
          <img src={props.imageUrl} alt={props.name} />
          <h3>{props.name}</h3>
          <p>${props.price.toFixed(2)}</p> 
        </div>
      );
}

export default RecommendedProducts