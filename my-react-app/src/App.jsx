import { useState } from "react";
import { products } from "./data (2)";
import "./App.css";

export default function App() {
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // Filter produk berdasarkan nama dan harga maksimum
  const filteredProducts = products.filter((product) => {
    const matchesName = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesPrice = maxPrice === "" || product.price <= parseFloat(maxPrice);
    return matchesName && matchesPrice;
  });

  return (
    <div className="app">
      <h1>Products</h1>

      {/* Filter Form */}
      <div className="filter-container">
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="filter-input"
        />
     
      </div>

      {/* Grid of Products */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <div className="product-details">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-description">{product.description}</p>
              <p className="product-price">{product.price}</p>
            </div>
          </div>
        ))}
        {filteredProducts.length === 0 && (
          <p className="no-results">No products match your search.</p>
        )}
      </div>
    </div>
  );
}
