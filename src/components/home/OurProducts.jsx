import React from "react";

const products = [
  {
    id: 1,
    name: "Fusion",
    category: "UI Kit",
    href: "#",
    price: "$49",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-05-related-product-01.jpg",
    imageAlt:
      "Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.",
  },
  {
    id: 1,
    name: "Fusion",
    category: "UI Kit",
    href: "#",
    price: "$49",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-05-related-product-01.jpg",
    imageAlt:
      "Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.",
  },
  {
    id: 1,
    name: "Fusion",
    category: "UI Kit",
    href: "#",
    price: "$49",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-05-related-product-01.jpg",
    imageAlt:
      "Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.",
  },
  {
    id: 1,
    name: "Fusion",
    category: "UI Kit",
    href: "#",
    price: "$49",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-05-related-product-01.jpg",
    imageAlt:
      "Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.",
  },
];

const OurProducts = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl pt-5 pb-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between space-x-4">
          <h2 className="text-3xl font-bold tracking-tight">Our products</h2>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="object-cover object-center"
                />
                <div
                  className="flex items-end justify-center p-4 opacity-0 group-hover:opacity-60 group-hover:bg-black transition-all ease-in-out"
                  aria-hidden="true"
                >
                  <div className="w-1/2 rounded-md bg-white bg-opacity-100 opacity-100 py-2 px-4 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter border border-gray-300">
                    View Product
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900">
                <h3>
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p>{product.price}</p>
              </div>
              <p className="mt-1 text-sm text-gray-500">{product.category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
