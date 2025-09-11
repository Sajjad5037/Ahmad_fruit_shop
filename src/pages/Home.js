import React from "react";
import { Link } from "react-router-dom";

// Sample featured products
const featuredProducts = [
  { id: 1, name: "Fruit Basket", price: 12.99, image: "/images/featured_product1.jpg" },
  { id: 2, name: "Dry Fruit Basket", price: 14.99, image: "/images/featured_product2.webp" },
  { id: 3, name: "Bid For Nikah", price: 16.99, image: "/images/featured_product3.webp" },
]; 

const Home = () => {
  return (
    <div className="bg-yellow-50 min-h-screen font-sans text-gray-800">
      
      {/* Hero Section */}
      <section className="relative bg-white text-center py-24">
        <h1 className="text-5xl md:text-6xl font-extrabold text-green-900 mb-6 drop-shadow-lg">
          Ahmad Fruit and vegetables
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
          Fresh fruits, crisp vegetables, and tender meats — delivered straight to your home
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
        src="/images/cover_photo.jpeg"
        alt="Ahmad Fruit and Vegetables"
        className="w-full h-72 object-cover"
      />

      {/* Why Choose Us */}
      <section className="py-20 px-6 text-center max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-900">
          Why Choose Us?
        </h2>
        <p className="text-gray-700 mb-14 max-w-3xl mx-auto">
          We source only the finest fruits, vegetables, and meats from trusted farms and suppliers.
          Freshness, quality, and taste are guaranteed with every delivery
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <div className="aspect-w-16 aspect-h-9 mb-4">
              <iframe
                className="w-full h-64 rounded-xl"
                src="https://www.youtube.com/watch?v=1opFRVdQ0vo" 
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
            <p>Watch how we bring you the freshest produce, every day.</p>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <div className="aspect-w-16 aspect-h-9 mb-4">
              <iframe
                className="w-full h-64 rounded-xl"
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
            <p>Watch how we bring you the freshest produce, every day.</p>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <div className="aspect-w-16 aspect-h-9 mb-4">
              <iframe
                className="w-full h-64 rounded-xl"
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
            <p>Watch how we bring you the freshest produce, every day.</p>
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
