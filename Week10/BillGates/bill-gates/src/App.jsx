import { useState } from "react";
import "./App.css";

function App() {
  const initialMoney = 100000000000; // $100 billion
  const [money, setMoney] = useState(initialMoney);
  const [purchases, setPurchases] = useState({});

  const products = [
    { id: 1, name: "Big Mac", price: 2, image: "🍔" },
    { id: 2, name: "Coffee", price: 4, image: "☕" },
    { id: 3, name: "iPhone 15 Pro", price: 1199, image: "📱" },
    { id: 4, name: "Gaming Laptop", price: 2500, image: "💻" },
    { id: 5, name: "Tesla Model S", price: 90000, image: "🚗" },
    { id: 6, name: "Rolex Watch", price: 50000, image: "⌚" },
    { id: 7, name: "Luxury Yacht", price: 10000000, image: "🛥️" },
    { id: 8, name: "Private Jet", price: 50000000, image: "✈️" },
    { id: 9, name: "Manhattan Apartment", price: 100000000, image: "🏢" },
    { id: 10, name: "Sports Team", price: 2000000000, image: "🏟️" },
    { id: 11, name: "Space Station", price: 150000000000, image: "🛰️" },
  ];

  const formatNumber = (num) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  };

  const buyProduct = (product) => {
    if (money >= product.price) {
      setMoney(money - product.price);
      setPurchases((prev) => ({
        ...prev,
        [product.id]: (prev[product.id] || 0) + 1,
      }));
    }
  };

  const sellProduct = (product) => {
    if (purchases[product.id] > 0) {
      setMoney(money + product.price);
      setPurchases((prev) => ({
        ...prev,
        [product.id]: prev[product.id] - 1,
      }));
    }
  };

  const getTotalSpent = () => {
    return Object.entries(purchases).reduce((total, [productId, quantity]) => {
      const product = products.find((p) => p.id === parseInt(productId));
      return total + product.price * quantity;
    }, 0);
  };

  const getPurchasedItems = () => {
    return Object.entries(purchases)
      .filter(([, quantity]) => quantity > 0)
      .map(([productId, quantity]) => {
        const product = products.find((p) => p.id === parseInt(productId));
        return { product, quantity, total: product.price * quantity };
      });
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Spend Bill Gates' Money</h1>
        <div className="money-display">
          <h2>{formatNumber(money)}</h2>
          <p>Money left to spend</p>
        </div>
      </header>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">{product.image}</div>
            <h3>{product.name}</h3>
            <p className="price">{formatNumber(product.price)}</p>
            <div className="quantity-display">{purchases[product.id] || 0}</div>
            <div className="product-actions">
              <button
                className="sell-btn"
                onClick={() => sellProduct(product)}
                disabled={!purchases[product.id] || purchases[product.id] === 0}
              >
                Sell
              </button>
              <button
                className="buy-btn"
                onClick={() => buyProduct(product)}
                disabled={money < product.price}
              >
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>

      {getPurchasedItems().length > 0 && (
        <div className="receipt">
          <h3>Your Receipt</h3>
          <div className="receipt-items">
            {getPurchasedItems().map(({ product, quantity, total }) => (
              <div key={product.id} className="receipt-item">
                <span>{product.name}</span>
                <span>x{quantity}</span>
                <span>{formatNumber(total)}</span>
              </div>
            ))}
          </div>
          <div className="receipt-total">
            <strong>Total: {formatNumber(getTotalSpent())}</strong>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
