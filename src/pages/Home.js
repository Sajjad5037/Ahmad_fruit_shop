import React from "react";
import { Link } from "react-router-dom";

// Sample featured products
const featuredProducts = [
  { id: 1, name: "Almonds", price: 12.99, image: "/images/almonds.jpeg" },
  { id: 2, name: "Cashews", price: 14.99, image: "/images/cashews.jpeg" },
  { id: 3, name: "Walnuts", price: 16.99, image: "/images/walnuts.jpeg" },
];

const Home = () => {
  return (
    <div className="bg-yellow-50 min-h-screen font-sans text-gray-800">
      
      {/* Hero Section */}
      <section className="relative bg-white text-center py-24">
        <h1 className="text-5xl md:text-6xl font-extrabold text-green-900 mb-6 drop-shadow-lg">
          Royal Dry Fruits
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
          Premium quality dry fruits, carefully handpicked and delivered fresh to your doorstep.
        </p>
        <Link
          to="/ShopOnline"
          className="bg-green-700 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:bg-green-800 transition duration-300"
        >
          Shop Now
        </Link>
      </section>

      {/* Banner */}
      <img
        src="/images/cover_photo.jpg"
        alt="Royal Dry Fruits Banner"
        className="w-full h-72 object-cover"
      />

      {/* Why Choose Us */}
      <section className="py-20 px-6 text-center max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-900">
          Why Choose Us?
        </h2>
        <p className="text-gray-700 mb-14 max-w-3xl mx-auto">
          We carefully select only the finest nuts and dried fruits, sourced directly from trusted farms.
          Freshness, quality, and taste are guaranteed in every pack.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
            <p>Only the best dry fruits handpicked for you.</p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p>Delivered fresh and on time, every time.</p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <div className="text-4xl mb-4">💚</div>
            <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
            <p>We prioritize quality service and happy customers.</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-6 bg-green-50 text-center max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-green-900">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-green-700 font-bold mb-4">${product.price}</p>
              <Link
                to={`/products/${product.id}`}
                className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition"
              >
                Buy Now
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-200 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-900">
          Get Your Favorite Dry Fruits Today!
        </h2>
        <Link
          to="/ShopOnline"
          className="bg-green-700 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:bg-green-800 transition duration-300"
        >
          Shop Now
        </Link>
      </section>
    </div>
  );
};

export default Home;
