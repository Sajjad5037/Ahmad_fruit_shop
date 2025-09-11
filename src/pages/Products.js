import React, { useEffect, useState } from "react";

const styles = {
  container: {
    padding: "20px",
    fontFamily: `"Segoe UI", Tahoma, Geneva, Verdana, sans-serif`,
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
  },
  title: {
    fontSize: "3rem",
    textAlign: "center",
    color: "#8e44ad",
    marginBottom: "2rem",
  },
  sectionHeader: {
    fontSize: "2rem",
    color: "#2c3e50",
    borderBottom: "3px solid #9b59b6",
    paddingBottom: "0.5rem",
    marginTop: "2rem",
    marginBottom: "1rem",
  },
  productRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "20px",
    marginBottom: "1.5rem",
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
  productImage: {
    width: "150px",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
    color: "#34495e",
  },
  productDescription: {
    fontSize: "1rem",
    color: "#2c3e50",
    lineHeight: 1.5,
  },
};

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = [
          {
            id: 1,
            name: "Almonds",
            description: "Rich in vitamin E and healthy fats. Supports heart health and skin wellness.",
            image_url: "/images/almonds.jpg",
            category: "Nuts",
          },
          {
            id: 2,
            name: "Cashews",
            description: "High in magnesium and antioxidants. Helps improve bone and heart health.",
            image_url: "/images/cashews.jpg",
            category: "Nuts",
          },
          {
            id: 3,
            name: "Walnuts",
            description: "Loaded with omega-3 fatty acids. Supports brain function and reduces inflammation.",
            image_url: "/images/walnuts.jpg",
            category: "Nuts",
          },
          {
            id: 4,
            name: "Pumpkin Seeds",
            description: "A great source of zinc and magnesium. Boosts immunity and heart health.",
            image_url: "/images/pumpkin-seeds.jpg",
            category: "Seeds",
          },
          {
            id: 5,
            name: "Sunflower Seeds",
            description: "Rich in vitamin E and selenium. Helps with skin health and protects against oxidative stress.",
            image_url: "/images/sunflower-seeds.jpg",
            category: "Seeds",
          },
          {
            id: 6,
            name: "Raisins",
            description: "Packed with antioxidants and iron. Improves digestion and provides instant energy.",
            image_url: "/images/raisins.jpg",
            category: "Dried Fruits",
          },
          {
            id: 7,
            name: "Dates",
            description: "Natural sweetener full of fiber and potassium. Supports digestion and heart health.",
            image_url: "/images/dates.jpg",
            category: "Dried Fruits",
          },
          {
            id: 8,
            name: "Apricots",
            description: "High in vitamins A and C. Helps improve vision and skin health.",
            image_url: "/images/apricots.jpg",
            category: "Dried Fruits",
          },
          {
            id: 9,
            name: "Trail Mix",
            description: "A healthy combination of nuts, seeds, and dried fruits. Provides energy and essential nutrients.",
            image_url: "/images/trail-mix.jpg",
            category: "Mixes",
          },
          {
            id: 10,
            name: "Energy Mix",
            description: "Perfect snack for an active lifestyle. Rich in protein, healthy fats, and fiber.",
            image_url: "/images/energy-mix.jpg",
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

  const groupedProducts = products.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading products...</p>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Royal Dry Fruits – Health Benefits</h1>

      {Object.entries(groupedProducts).map(([category, items]) => (
        <div key={category}>
          <h2 style={styles.sectionHeader}>{category}</h2>
          {items.map((item) => (
            <div key={item.id} style={styles.productRow}>
              <img src={item.image_url} alt={item.name} style={styles.productImage} />
              <div style={styles.productInfo}>
                <div style={styles.productName}>{item.name}</div>
                <div style={styles.productDescription}>{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Products;
