import React from "react";

const ProductCard = ({
  image,
  brand,
  name,
  gender,
  price,
  discountedPrice,
  discountPercent,
}) => {
  return (
    <div className="flex flex-col justify-between w-60 m-2 gap-4 bg-white h-100 pb-2 hover:shadow-xl hover:transition-shadow hover:duration-200">
      <img src={image} alt="product" className="h-80" />
      <section className="flex flex-col px-2 gap-1 hover:-translate-y-1 hover:transition-all hover:duration-200 ease-in-out">
        <h4 className="text-gray-400 font-bold">{brand}</h4>
        <p>{name}</p>
        <p>
          <span className="font-bold">₹{discountedPrice}</span>{" "}
          <s className="text-gray-400 font-medium">₹{price}</s>{" "}
          <span className="text-green-500 text-sm font-medium">
            {discountPercent}% off
          </span>
        </p>
      </section>
    </div>
  );
};

export { ProductCard };
