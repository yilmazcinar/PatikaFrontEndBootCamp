import React from "react";

const PurchaseCard = ({ product }) => {
  const handleAddToCart = () => {
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="purchase-card">
      <img src={product.image} alt={product.name} />
      <div className="purchase-info">
        <h4>{product.name}</h4>
        <p className="price">
          {product.originalPrice} / {product.salePrice}
        </p>
        <div className="purchase-actions">
          <i className="fas fa-shopping-cart"></i>
          <button className="btn btn-primary" onClick={handleAddToCart}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseCard;
