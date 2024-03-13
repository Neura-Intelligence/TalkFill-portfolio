import React from "react";

const AboutUs = () => {
  return (
    <div className="my-16 bg-gradient-to-r from-teal-500 to-cyan-600 pb-16 lg:relative lg:z-10 lg:pb-0">
      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
        <div className="relative lg:-my-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
          />
          <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:h-full lg:p-0">
            <div className="aspect-w-10 aspect-h-6 overflow-hidden rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
              <img
                className="object-cover lg:h-full lg:w-full"
                src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
          <div className="mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0 lg:py-20">
            <blockquote>
              <div>
                <div className="text-4xl font-bold text-white">Who we are</div>
                <p className="mt-6 text-xl font-medium text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  urna nulla vitae laoreet augue. Amet feugiat est integer dolor
                  auctor adipiscing nunc urna, sit.
                </p>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
