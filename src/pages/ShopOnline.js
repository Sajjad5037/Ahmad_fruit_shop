import React, { useEffect, useState } from "react";

const styles = {
  container: {
    padding: "20px",
    fontFamily: `"Segoe UI", Tahoma, Geneva, Verdana, sans-serif`,
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
  },
  title: {
    fontSize: "2.5rem",
    textAlign: "center",
    color: "#8e44ad",
    marginBottom: "1rem",
  },
  sectionHeader: {
    fontSize: "1.75rem",
    color: "#2c3e50",
    borderBottom: "3px solid #9b59b6",
    paddingBottom: "0.5rem",
    marginTop: "2rem",
  },
  menuGroup: {
    marginBottom: "2rem",
  },
  menuItemsWrapper: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    justifyContent: "center",
  },
  menuCard: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    width: "280px",
    padding: "1rem",
    textAlign: "center",
    transition: "transform 0.2s",
  },
  menuCardHover: {
    transform: "scale(1.02)",
  },
  menuImage: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "4px",
    marginBottom: "0.5rem",
  },
  addButton: {
    marginTop: "0.75rem",
    padding: "0.5rem 1rem",
    backgroundColor: "#27ae60",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  cartSection: {
    maxWidth: "600px",
    margin: "2rem auto",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    padding: "1.5rem",
  },
  cartList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #ecf0f1",
    padding: "0.75rem 0",
  },
  removeButton: {
    padding: "0.3rem 0.6rem",
    backgroundColor: "#c0392b",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  phoneInput: {
    width: "100%",
    padding: "0.75rem",
    fontSize: "1rem",
    borderRadius: "4px",
    border: "1px solid #bdc3c7",
    marginTop: "0.5rem",
  },
  totalRow: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginTop: "1rem",
  },
  checkoutButton: {
    marginTop: "1rem",
    width: "100%",
    padding: "0.75rem",
    backgroundColor: "#9b59b6",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1rem",
  },
};

const ShopOnline = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [phone, setPhone] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [clickedItemId, setClickedItemId] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        // Replace with your actual API or local data
        const data = [
          // Nuts
          {
            id: 1,
            name: "Almonds",
            price: 1200,
            description: "Fresh and crunchy almonds",
            image_url: "/images/almonds.jpeg",
            category: "Nuts",
          },
          {
            id: 2,
            name: "Cashews",
            price: 1500,
            description: "Premium cashews",
            image_url: "/images/cashews.jpeg",
            category: "Nuts",
          },
          {
            id: 3,
            name: "Walnuts",
            price: 1600,
            description: "Healthy walnuts",
            image_url: "/images/walnuts.jpeg",
            category: "Nuts",
          },
        
          // Seeds
          {
            id: 4,
            name: "Pumpkin Seeds",
            price: 500,
            description: "Crunchy and nutritious pumpkin seeds",
            image_url: "/images/pumpkin-seeds.jpeg",
            category: "Seeds",
          },
          {
            id: 5,
            name: "Sunflower Seeds",
            price: 400,
            description: "High-quality sunflower seeds",
            image_url: "/images/sunflower-seeds.jpeg",
            category: "Seeds",
          },
        
          // Dried Fruits
          {
            id: 6,
            name: "Raisins",
            price: 300,
            description: "Sweet and juicy raisins",
            image_url: "/images/raisins.jpeg",
            category: "Dried Fruits",
          },
          {
            id: 7,
            name: "Dates",
            price: 600,
            description: "Soft and natural dates",
            image_url: "/images/dates.jpeg",
            category: "Dried Fruits",
          },
          {
            id: 8,
            name: "Apricots",
            price: 700,
            description: "Premium dried apricots",
            image_url: "/images/apricots.jpeg",
            category: "Dried Fruits",
          },
        
          // Mixes
          {
            id: 9,
            name: "Trail Mix",
            price: 800,
            description: "Healthy mix of nuts and dried fruits",
            image_url: "/images/trail-mix.jpeg",
            category: "Mixes",
          },
          {
            id: 10,
            name: "Energy Mix",
            price: 900,
            description: "Perfect snack with nuts, seeds, and dried fruits",
            image_url: "/images/energy-mix.jpeg",
            category: "Mixes",
          },
        ];

        setProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (item) => {
    setCart((prev) => {
      const exist = prev.find((i) => i.id === item.id);
      if (exist) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setClickedItemId(item.id);
    setTimeout(() => setClickedItemId(null), 1500);
  };

  const handleRemoveFromCart = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const groupedProducts = products.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  const handleCheckout = async () => {
  if (!cart.length) {
    alert("Cart is empty");
    return;
  }

  if (!phone) {
    alert("Enter your phone number");
    return;
  }

  const summary = cart
    .map((item, i) => `${i + 1}. ${item.name} x${item.quantity} — Rs.${item.price * item.quantity}`)
    .join("\n");

  const confirmed = window.confirm(
    `Order Summary:\n${summary}\nTotal: Rs.${total}\nPhone: ${phone}\nProceed?`
  );

  if (!confirmed) return;

  try {
    const payload = {
      items: cart,
      total,
      phone,
      timestamp: new Date().toISOString()  // ✅ Add timestamp
    };

    const res = await fetch("https://usefulapis-production.up.railway.app/api/send-dry-fruit-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) throw new Error("Failed to send order");

    alert("Order placed successfully! You will receive an SMS shortly.");
    setCart([]);
    setPhone("");
    setOrderPlaced(true);
  } catch (err) {
    console.error("Order submission error:", err);
    alert("Error sending order. Please try again.");
  }
};



  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Royal Dry Fruits Store</h1>

      {Object.entries(groupedProducts).map(([category, items]) => (
        <div key={category} style={styles.menuGroup}>
          <h2 style={styles.sectionHeader}>{category}</h2>
          <div style={styles.menuItemsWrapper}>
            {items.map((item) => (
              <div
                key={item.id}
                style={styles.menuCard}
                onMouseEnter={(e) =>
                  Object.assign(e.currentTarget.style, styles.menuCardHover)
                }
                onMouseLeave={(e) =>
                  Object.assign(e.currentTarget.style, { transform: "none" })
                }
              >
                <img
                  src={item.image_url}
                  alt={item.name}
                  style={styles.menuImage}
                />
                <h4>{item.name}</h4>
                <p style={{ color: "#7f8c8d" }}>{item.description}</p>
                <p style={{ fontWeight: "bold", margin: "0.5rem 0" }}>
                  Rs. {item.price}
                </p>
                <button
                  onClick={() => handleAddToCart(item)}
                  style={{
                    ...styles.addButton,
                    backgroundColor:
                      clickedItemId === item.id
                        ? "#4CAF50"
                        : styles.addButton.backgroundColor,
                  }}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}

      <h2 style={styles.sectionHeader}>Your Cart</h2>
      {cart.length === 0 ? (
        <p style={{ textAlign: "center", color: "#7f8c8d" }}>
          Your cart is empty.
        </p>
      ) : (
        <div style={styles.cartSection}>
          <ul style={styles.cartList}>
            {cart.map((item) => (
              <li key={item.id} style={styles.cartItem}>
                <span>
                  {item.name} x{item.quantity} — Rs.{item.price * item.quantity}
                </span>
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  style={styles.removeButton}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div>
            <label htmlFor="phone" style={{ fontWeight: "bold" }}>
              Phone / Address:
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g., 0300-1234567"
              style={styles.phoneInput}
            />
          </div>

          <div style={styles.totalRow}>
            <span>Total:</span>
            <span>Rs. {total}</span>
          </div>

          <button
            onClick={handleCheckout}
            disabled={!phone}
            style={{
              ...styles.checkoutButton,
              opacity: phone ? 1 : 0.5,
              cursor: phone ? "pointer" : "not-allowed",
            }}
          >
            Checkout
          </button>
        </div>
      )}

      {orderPlaced && (
        <div style={{ textAlign: "center", marginTop: "1.5rem", color: "#27ae60" }}>
          🎉 Order placed successfully!
        </div>
      )}
    </div>
  );
};

export default ShopOnline;
