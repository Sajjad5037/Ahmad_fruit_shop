import React from "react";
import { useParams } from "react-router-dom";

const products = [
  { id: 1, name: "Almonds", price: 12.99, description: "Fresh premium almonds." },
  { id: 2, name: "Cashews", price: 14.99, description: "Delicious cashews." },
  { id: 3, name: "Walnuts", price: 16.99, description: "Healthy walnuts." },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p className="p-10">Product not found</p>;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="my-4">${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;
