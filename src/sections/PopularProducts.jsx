import React from 'react';
import {products} from "../assets/constans/index.js";
import PopularProductCard from '../components/PopularProductCard.jsx'

const PopularProducts = () => {
    return (
      <section id = "products"
      className="max-container
      max-sm:mt-12 ">
      <div className= "flex flex-col
      justify-start gap-5">
          <h2 className="text-4xl
          font-palanquin font-bold">Our
              <span className="text-coral-red"> Popular </span>
           Products </h2>
          <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
              Discover the latest Nike collections designed to
              elevate your performance and style. From cutting-edge
              footwear to innovative apparel, our popular products blend
              comfort with iconic design.
          </p>
      </div>
          <div className="mt-16 grid
          lg:grid-cols-4 md:grid-cols-3
          sm:grid-cols-2 grid-cols-1
          sm:gap-4 gap-14">
              { products.map( (product) => (

              <PopularProductCard
                  key = {product.name}
                  {...product}

             /> ))}
          </div>

      </section>
    );
};

export default PopularProducts;