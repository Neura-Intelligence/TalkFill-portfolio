import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import textToSpeech from "../../assets/speech-to-text.jpeg";
import talkFill_Logo from "../../assets/talkfil.png";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const HeroSection = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 h-screen">
      <img
        src={textToSpeech}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute bg-gray-800 -z-10 top-0 left-0 w-full h-screen opacity-100 bg-opacity-80" />
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".2"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ef7548" />
              <stop offset={1} stopColor="#0e8376" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="px-6 lg:px-8">
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel
            focus="true"
            className="fixed inset-0 z-10 overflow-y-auto bg-gray-900 px-6 py-6 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                {/* <XMarkIcon className="h-6 w-6" aria-hidden="true" /> */}
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-400/10"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-white hover:bg-gray-400/10"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
        <div className="h-screen flex flex-col mx-auto max-w-2xl align-content-center justify-center">
          <div className="text-center">
            <img
              src={talkFill_Logo}
              alt="talkFill_Logo"
              className="h-48 mx-auto"
            />
            <p className="mt-6 text-2xl font-semibold text-gray-200">
              We’re building an AI-powered tool to fill any form by capturing
              context from natural spoken language. Our tool is designed to be
              intuitive and user-friendly, making it a valuable asset for
              various industries
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
